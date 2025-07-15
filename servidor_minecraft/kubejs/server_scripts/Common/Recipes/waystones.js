ServerEvents.recipes(event => {

    //Warp Dust
    event.remove({ id: 'waystones:warp_dust' })
    event.shapeless(Item.of('waystones:warp_dust', 4), [
        'minecraft:ender_pearl',
        'majruszsdifficulty:enderium_shard'
    ]).id("mce2:waystones/warp_dust")
})
