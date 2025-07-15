WorldgenEvents.remove((event) => {

    event.removeFeatureById('underground_ores', [
        'occultism:ore_silver_deepslate',
        'cgs:lead_ore',
        'occultism:ore_silver',
        'iceandfire:silver_ore',
        'iceandfire:deepslate_silver_ore',
        'immersiveengineering:lead',
        'immersiveengineering:uranium'
    ]);
});
