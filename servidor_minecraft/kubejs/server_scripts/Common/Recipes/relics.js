ServerEvents.recipes(event => {

    //Blazing Flask
    event.shaped(Item.of('relics:blazing_flask', 1), [
        'SHS',
        'IEI',
        'SIS'
    ],
    {
        S:'majruszsdifficulty:enderium_shard',
        H:'nethersdelight:hoglin_hide',
        I:'cataclysm:ignitium_ingot',
        E:'majruszsdifficulty:ender_pouch',
    })
})
