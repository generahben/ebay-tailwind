
document.addEventListener('DOMContentLoaded', function () {

    /* Variables Declaration and Data Types */
    // let name = "Abraham"
    // let age = 18
    // let isMarried = true

    // let isStudent;
    // let brainCapacity = null

    // let foods = ["Rice", 200, "Yam", 6, "Eggs", true, null]

    // let gadgetOwned = {
    //     "phones": 1,
    //     "laptops": 1,
    //     "TV": 2,
    //     "car": 1,
    //     "shops": "unlimited"
    // }


    // let numberOfHousesInEstateOne = "10"
    // let numberOfHousesInEstateTwo = "20"

    // let total = numberOfHousesInEstateOne + numberOfHousesInEstateTwo

    // console.log("name: " + typeof name)
    // console.log("age: " + typeof age)
    // console.log("total: " + total)
    // console.log("name + age: " + (name + age))

    // console.log("isMarried: " + typeof isMarried)

    // console.log("isStudent: " + typeof isStudent)

    // console.log("brainCapacity: " + typeof brainCapacity)
    // console.log("foods: " + typeof foods)

    // console.log("gadgetOwned: " + typeof gadgetOwned)


    /* OBJECT and ARRAYS */

    // let car = {
    //     "brand": "Toyota",
    //     "model": "Camry",
    //     "year": 2020,
    //     "color": "Silver",
    //     "isElectric": false,
    //     "features": ["Bluetooth", "Backup Camera", "Cruise Control"],
    //     "owner": {
    //         "name": "Abraham Chisom",
    //         "age": 35,
    //     },

    //     startDriving: function () {
    //         console.log("The car is now driving.")
    //     }
    // }

    // let foods = ["Rice", 200, "Yam", 6, "Eggs", true, null]

    // console.log("car Brand: " + car.brand)
    // console.log("car Model: " + car.model)
    // console.log("car Owner's Name: " + car.owner.name)
    // console.log("First Food: " + foods[7 - 2])

    // car.startDriving()

    // console.log("Second and Third Car Feature: " + car.features[1] + " and " + car.features[2])


    // let studentName = "Abraham Chisom"

    // console.log(studentName.length)
    // console.log(studentName.charAt(7))
    // console.log(studentName.includes("aham Ch"))
    // console.log(studentName.substring(1, 8))

    // foods.pop()
    // foods.pop()
    // foods.push("Garri")
    // foods.unshift("Beans")
    // foods.shift("corn")
    // console.log(foods)

    /* ARITHMETIC OPERATORS and COMPARISON OPERATORS */

    // +
    // -
    // *
    // /
    // %
    // ++
    // --

    // == : Equality
    // === : Strict Equality
    // != : Inequality
    // !== : Strict Inequality
    // > : Greater Than
    // < : Less Than
    // >= : Greater Than or Equal To
    // <= : Less Than or Equal To
    // && : Logical AND
    // || : Logical OR


    /* CONDITIONAL STATEMENTS */

    let jambites = {
        j100568BH: {
            name: "Abraham",
            age: 19,
            gender: "male"
        },
        j1004567GB: {
            name: "Chisom",
            age: 20,
            gender: "male"
        },
        j200986TG: {
            name: "Gift",
            age: 25,
            gender: "female"
        }
    }

    // if (jambites.j200986TG.age >= 18) {
    //     console.log("Jambite can go to the party")
    // }

    if ((jambites.j100568BH.age <= 18 && jambites.j100568BH.gender === "male") || jambites.j200986TG.age == 25) {
        console.log("Jambite can go to the party")
    }

});