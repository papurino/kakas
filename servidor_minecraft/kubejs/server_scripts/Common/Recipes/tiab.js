ServerEvents.recipes(event => {
    event.shaped(Item.of('tiab:time_in_a_bottle', 1), [
        'GGG',
        'DCD',
        'LBL'
    ],
    {
        G:'minecraft:gold_block',
        D:'minecraft:diamond_block',
        C:'minecraft:clock',
        L:'minecraft:lapis_block',
        B:'minecraft:dragon_breath',
    })
})
