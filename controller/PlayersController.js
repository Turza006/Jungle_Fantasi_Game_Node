const Players = require('../model/Players')
module.exports = {
    createPlayers: async (req, res) => {
        const body = req.body
        const name = body.name
        const email = body.email
        const profile_pic = body.profile_pic
        const xp = body.xp
        const coin = body.coin
        const playing = body.playing
        const country = body.country
        const dimond = body.dimond
        const score = body.score


        const players = await Players.findOne({email: email})

        if (players) {
            return res.status(401).json({
                msg: "Players Exist With The Email"
            })
        }

        const newPlayers = new Players()
        if (email) {
            newPlayers.name = name
            newPlayers.email = email
            newPlayers.profile_pic = profile_pic
            newPlayers.xp = xp
            newPlayers.coin = coin
            newPlayers.playing = playing
            newPlayers.country = country
            newPlayers.dimond = dimond
            newPlayers.score = score
        }


            await newPlayers.save()
            res.status(201).json(newPlayers)
    },
    singlePlayer: async (req,res) =>{
        const myData = await Players.findOne({email : req.params.email},{post : 1})
        res.status(200).json(myData)
    },
    getPlayers: async (req,res) => {
        const data = await Players.find().populate('xp').populate('name').populate('score').populate('country')
        res.status(200).json(data)
    },
    mainManu: async (req,res) => {
        const data = await Players.find({email:req.params.email},{post :1}).populate('name').populate('xp').populate('coin').populate('dimond')
        res.status(200).json(data)

    },
    upgradePlayer: async (req,res) => {
        const body = req.body
        const name = body.name
        const email = req.params.email
        const profile_pic = body.profile_pic
        const xp = body.xp
        const coin = body.coin
        const playing = body.playing
        const country = body.country
        const dimond = body.dimond
        const score = body.score
        const newPLayers = await Fruit.findOneAndUpdate({email : email},{$set:body})
        await newPLayers.save()
        res.status(200).json(newPLayers)

    }




}
