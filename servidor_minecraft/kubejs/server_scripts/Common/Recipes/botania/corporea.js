ServerEvents.recipes(event => {

    //using original recipe IDs to retain recipes in the Lexica Botania
    //event.remove({id: /botania:corporea_[^bs]/})
    //event.remove({id: "botania:corporea_spark"})
    //event.remove({id: "botania:corporea_spark_master"})


    // Corporea Bits

    //Corporea Spark
    event.shaped("botania:corporea_spark", [
        " P ",
        "MAM",
        " P "
    ],
    {
        P: "#botania:petals",
        A: "#forge:gems/amethyst",
        M: "#forge:nuggets/manasteel"
    }).id("botania:corporea_spark")

    //Master Corporea Spark
    event.shapeless("botania:corporea_spark_master", [
        "botania:corporea_spark",
        "kubejs:corporea_crystal"
    ]).id("botania:corporea_spark_master")


    //Corporea Index
    event.shaped("botania:corporea_index", [
        "AGA",
        "GCG",
        "AGA"
    ],
    {
        C: "kubejs:corporea_crystal",
        G: "quark:framed_glass",
        A: "#forge:gems/amethyst"
    }).id("botania:corporea_index")


    //Corporea Crystal Cube
    event.shaped('botania:corporea_crystal_cube', [
        'G',
        'C',
        'W'
    ], {
        G: 'kubejs:corporea_crystal',
        C: '#chipped:light_blue_carpet',
        W: '#forge:logs/archwood'
    }).id("botania:corporea_crystal_cube")


    //Corporea Automation Devices
    let corpDevice = [
        {
            result: 'funnel',
            items: [Item.of('minecraft:dropper')]
        },
        {
            result: 'interceptor',
            items: [Ingredient.of('#forge:storage_blocks/redstone')]
        },
        {
            result: 'retainer',
            items: [Ingredient.of('#forge:chests/wooden')]
        }
    ]

    corpDevice.forEach((device) => {
        let resultID = `botania:corporea_${device.result}`
        event.remove({id: resultID})
        addTerraPlate(event, Item.of(resultID), [
            Item.of('botania:corporea_block'),
            Item.of('botania:red_string')
        ].concat(device.items), 
            manaPool * 0.025)
            .id(`mce2:botania/corporea_${device.result}`)
    })


    // Related Stuff that is not directly Corporea items

    //Corporeality Crystal
    addRunicAltar(event, Item.of('kubejs:corporea_crystal', 3), [Item.of('botania:corporea_spark'), Ingredient.of('#forge:gems/amethyst'), Ingredient.of('#forge:gems/amethyst')], dilutedPool * 0.75)
        .id("mce2:botania/runic_altar/corporea_crystal")


    //Pre-End Red String (because red string devices are really cool)
    event.shapeless('botania:red_string', [
        '#forge:string',
        //'#forge:storage_blocks/redstone',
        'botania:pixie_dust',
        'botania:redstone_root'
    ]).id("botania:red_string")

    event.shapeless('botania:red_string', [
        '#forge:string',
        //'#forge:storage_blocks/redstone',
        'botania:pixie_dust',
        'botania:redstone_root',
        "minecraft:pumpkin"
    ]).id("botania:red_string_alt")
})