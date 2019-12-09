const Fruit = require('../model/Fruits')
module.exports = {
    createFruit: async (req, res) => {
        const player = req.params.player
        const body = req.body
        const fruitone = body.fruitone
        const fruittwo = body.fruittwo
        const fruitthree = body.fruitthree
        const fruitfour = body.fruitfour
        const fruitfive = body.fruitfive
        const fruitsix = body.fruitsix
        const fruitseven = body.fruitseven
        const fruiteight = body.fruiteight
        const fruitnine = body.fruitnine
        const fruitten = body.fruitten
        const fruiteleven = body.fruiteleven
        const fruittwelve = body.fruittwelve
        const fruitthrteen = body.fruitthrteen
        const fruitfourteen = body.fruitfourteen
        const fruitfifteen = body.fruitfifteen
        const fruitsixteen = body.fruitsixteen
        const fruitseventeen = body.fruitseventeen
        const fruiteightteen = body.fruiteightteen
        const fruitnineteen = body.fruitnineteen
        const fruittwenty = body.fruittwenty
        const fruittwentyone = body.fruittwentyone
        const fruittwentytwo = body.fruittwentytwo
        const fruittwentythree = body.fruittwentythree
        const fruittwentyfour = body.fruittwentyfour
        const fruittwentyfive = body.fruittwentyfive
        const newFruit = new Fruit()
        const players = await Fruit.findOne({player: player})

        if (players) {
            return res.status(401).json({
                msg: "Players Exist With The spell"
            })
        }

        if (player) {
            newFruit.player = player
            newFruit.fruitone = fruitone
            newFruit.fruittwo = fruittwo
            newFruit.fruitthree = fruitthree
            newFruit.fruitfour = fruitfour
            newFruit.fruitfive = fruitfive
            newFruit.fruitsix = fruitsix
            newFruit.fruitseven = fruitseven
            newFruit.fruiteight = fruiteight
            newFruit.fruitnine = fruitnine
            newFruit.fruitten = fruitten
            newFruit.fruiteleven = fruiteleven
            newFruit.fruittwelve = fruittwelve
            newFruit.fruitthrteen = fruitthrteen
            newFruit.fruitfourteen = fruitfourteen
            newFruit.fruitfifteen = fruitfifteen
            newFruit.fruitsixteen =fruitsixteen
            newFruit.fruitseventeen = fruitseventeen
            newFruit.fruiteightteen = fruiteightteen
            newFruit.fruitnineteen = fruitnineteen
            newFruit.fruittwenty = fruittwenty
            newFruit.fruittwentyone = fruittwentyone
            newFruit.fruittwentytwo = fruittwentytwo
            newFruit.fruittwentythree = fruittwentythree
            newFruit.fruittwentyfour = fruittwentyfour
            newFruit.fruittwentyfive = fruittwentyfive

        }
        await newFruit.save()
        res.status(200).json(newFruit)

    },
    getAllfruit:async (req, res) => {
        const data = await Fruit.find().populate('Fruit')
        res.status(200).json(data)
    },
    getSingleAll:async (req,res) => {
        const data = await Fruit.find({player : req.params.player}).populate('Fruit')
        res.status(200).json(data)
    },
    updateFruit: async (req, res) => {
        const player = req.params.player
        const body = req.body
        const fruitone = body.fruitone
        const fruittwo = body.fruittwo
        const fruitthree = body.fruitthree
        const fruitfour = body.fruitfour
        const fruitfive = body.fruitfive
        const fruitsix = body.fruitsix
        const fruitseven = body.fruitseven
        const fruiteight = body.fruiteight
        const fruitnine = body.fruitnine
        const fruitten = body.fruitten
        const fruiteleven = body.fruiteleven
        const fruittwelve = body.fruittwelve
        const fruitthrteen = body.fruitthrteen
        const fruitfourteen = body.fruitfourteen
        const fruitfifteen = body.fruitfifteen
        const fruitsixteen = body.fruitsixteen
        const fruitseventeen = body.fruitseventeen
        const fruiteightteen = body.fruiteightteen
        const fruitnineteen = body.fruitnineteen
        const fruittwenty = body.fruittwenty
        const fruittwentyone = body.fruittwentyone
        const fruittwentytwo = body.fruittwentytwo
        const fruittwentythree = body.fruittwentythree
        const fruittwentyfour = body.fruittwentyfour
        const fruittwentyfive = body.fruittwentyfive
        const newFruit = await Fruit.findOneAndUpdate({player : player},{$set:body})
        await newFruit.save()
        res.status(200).json(newFruit)


    }







}


