
// you can use this value and multiply it instead of putting very big numbers in calls
// probably a lot more readable
const manaPool = 1000000
const dilutedPool = 10000

// all the inputs and outputs have to be Item.of()'s for the time being :<
// i want to make these string-compatible at some point but idk how

const addTerraPlate = (event, result, ingredients, mana) => {
    let recipe = {
        'type': 'botania:terra_plate',
        'mana': mana,
        'result': result,
        'ingredients': ingredients
    }

    return event.custom(recipe)
}

//quick reference for commonly used catalysts
// if a catalyst will be used often in custom recipes, add it here
// botania also has blockstate stuff for catalysts but i haven't figured it out, will probably add commented example for such if i do
const botaniaCatalystPreset = {
    'alchemy': {
        type: 'block',
        block: 'botania:alchemy_catalyst'
    },
    'conjuration': {
        type: 'block',
        block: 'botania:conjuration_catalyst'
    }
}

//you can either provide no catalyst, a string or JSON definition of the catalyst (as seen above and in botania's own definitions for recipes)
// it has some blockstate capability but idk how it works, so how this function works will let you utilize it aswell as be lazy with normal strings
const addManaInfusion = (event, result, input, mana, catalyst) => {
    let recipe = {
        'type': 'botania:mana_infusion',
        'input': input,
        'output': result,
        'mana': mana
    }

    //set catalyst if one is provided
    catalyst = catalyst || false
    //check if JSON definition
    if(catalyst.type){
        recipe.catalyst = catalyst
    //otherwise use the given string to make one
    } else if(catalyst){
        recipe.catalyst = {
            type: 'block',
            block: catalyst
        }
    }

    return event.custom(recipe)
}

const addRunicAltar = (event, result, inputs, mana) => {
    let recipe = {
        'type': 'botania:runic_altar',
        'output': result,
        'ingredients': inputs,
        'mana': mana
    }

    return event.custom(recipe)
}

const addPetalApothecary = (event, result, inputs) => {
    let recipe = {
        'type': 'botania:petal_apothecary',
        'output': result,
        'ingredients': inputs
    }

    return event.custom(recipe)
}

const addElvenTrade = (event, results, inputs) => {
    let recipe = {
        'type': 'botania:elven_trade',
        'output': results,
        'ingredients': inputs
    }

    return event.custom(recipe)
}