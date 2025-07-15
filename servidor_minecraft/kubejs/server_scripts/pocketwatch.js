PlayerEvents.tick(event => {
  const player = event.player
  if (player.level.isClientSide) return
  if (player.age % 20 !== 0) return

  const ITEM_ID = 'kubejs:pocket_watch'
  const EFFECT_ID = 'tombstone:unstable_intangibility'
  const hasInInventory = player.inventory.findItem(ITEM_ID) != null

  let hasInCurios = false
  const curios = player.persistentData.curios
  if (curios) {
    for (const slot of Object.values(curios)) {
      if (Array.isArray(slot) && slot.some(item => item.id === ITEM_ID)) {
        hasInCurios = true
        break
      }
    }
  }

  const hasWatch = hasInInventory || hasInCurios
  const hasEffect = player.hasEffect(EFFECT_ID)
  if (hasWatch && !hasEffect) {
    player.potionEffects.add(EFFECT_ID, 40, 0, true, true)
  } else if (!hasWatch && hasEffect) {
    player.potionEffects.remove(EFFECT_ID)
  }
})
