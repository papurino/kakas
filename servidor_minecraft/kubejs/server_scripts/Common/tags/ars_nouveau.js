ServerEvents.tags("item", event => {

    //Golem "Shards", which is what what items Amethyst Golems will collect.
    event.add("ars_nouveau:golem/shard", [
        "hexcasting:amethyst_dust",
        "hexcasting:charged_amethyst",
        "ae2:certus_quartz_crystal",
        "ae2:certus_quartz_dust"
    ])
})

ServerEvents.tags("block", event => {

    //Golem "Budding", which is what blocks Amethyst Golems will cache as Budding Blocks to look at harvesting near.
    event.add("ars_nouveau:golem/budding", /ae2:.*_budding_quartz/)

    //Golem "Cluster", which is what blocks Amethyst Golems will Harvest.
    event.add("ars_nouveau:golem/cluster", [
        "ae2:quartz_cluster"
    ])
})