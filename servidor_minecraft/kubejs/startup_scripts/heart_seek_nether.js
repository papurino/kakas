// credit to JakTac on the latvian.dev discord server, this is entirely their work.
const $EyeofEnderNether = Java.loadClass('net.minecraft.world.entity.projectile.EyeOfEnder')
const $RegistryNether = Java.loadClass('net.minecraft.core.registries.Registries')
const $TagKeyNether = Java.loadClass('net.minecraft.tags.TagKey')

StartupEvents.registry('entity_type', event => {
  let ItemEntity = Java.loadClass("net.minecraft.world.entity.item.ItemEntity")
  event.create('mobdrop_endermanheart_beating', "minecraft:eye_of_ender")
    .disableTrailParticles()
    .displayName('§7Wither Heart')
    .disableDefaultDeathLogic()
    .tick(entity => {
      if (entity.level.isClientSide) {
        entity.level.addParticle('irons_spellbooks:fire', true, entity.x, entity.y, entity.z, 0, 0, 0)
      }
    })
    .onRemovedFromWorld(entity => {
      entity.level.playSound(null, entity.x, entity.y, entity.z, 'minecraft:entity.wither.spawn', entity.getSoundSource(), 1.0, 0.8)
      
      let glowingEye = new ItemEntity(entity.level, entity.x, entity.y, entity.z, 'kubejs:mobdrop_endermanheart_beating')
      glowingEye.setGlowing(true) 
      entity.level.addFreshEntity(glowingEye)
    })
    .setSurvivalChance(0)
    .renderOffset(0, 0, 0)
    .renderScale(0.5, 0.5, 0.5)
    .item(item => {
      item.signalTo(context => {
        const { level, player, hand } = context
        let structureTag = $TagKeyNether.create($RegistryNether.STRUCTURE, 'kubejs:structure_locator_nether')
        let foundPos = level.findNearestMapStructure(structureTag, player.blockPosition(), 100, false)
        if (foundPos) {
          if (!player.abilities.instabuild) {
            player.getHeldItem(hand).count--
          }
          if (player.level.dimension == "minecraft:the_nether") {
            player.swing()
          }
          level.playSound(null, player.getX(), player.getY(), player.getZ(), 'entity.ender_eye.launch', player.getSoundSource(), 0.5, 0.5)
          return foundPos
        }
      })
      item.fireResistant(true)
    })
    .getItem(entity => {
      return Item.of('kubejs:mobdrop_endermanheart_beating')
    })
})
