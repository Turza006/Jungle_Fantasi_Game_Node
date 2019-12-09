const Scene = require('../model/Scene')
module.exports = {
    createScene : async (req,res) =>{
        const player = req.params.player
        console.log(player)
        const body = req.body
        const sceneone = body.sceneone
        const scenetwo = body.scenetwo
        const scenethree = body.scenethree
        const scenefour = body.scenefour
        const scenefive = body.scenefive
        const scenesix = body.scenesix
        const sceneseven = body.sceneseven
        const sceneeight = body.sceneeight
        const scenenine = body.scenenine
        const sceneten = body.sceneten

        const players = await Scene.findOne({player: player})
        const newScene = new Scene()

        if (players) {
            return res.status(401).json({
                msg: "Players Exist With The spell"
            })
        }
        if (player) {
            newScene.player = player
            newScene.sceneone = sceneone
            newScene.scenetwo = scenetwo
            newScene.scenethree = scenethree
            newScene.scenefour = scenefour
            newScene.scenefive = scenefive
            newScene.scenesix = scenesix
            newScene.sceneseven = sceneseven
            newScene.sceneeight = sceneeight
            newScene.scenenine = scenenine
            newScene.sceneten = sceneten

            }
        await newScene.save()
        res.status(200).json(newScene)

    },
    getAllscene: async (req,res) =>{
        const data = await Scene.find().populate('Scene')
        res.status(200).json(data)
    },
    getSingleAllscene:async (req,res) => {
        const data = await Scene.find({player : req.params.player}).populate('Scene')
        res.status(200).json(data)
    },
    updateScene:async (req,res) => {
        const player = req.params.player
        const body = req.body
        const sceneone = body.sceneone
        const scenetwo = body.scenetwo
        const scenethree = body.scenethree
        const scenefour = body.scenefour
        const scenefive = body.scenefive
        const scenesix = body.scenesix
        const sceneseven = body.sceneseven
        const sceneeight = body.sceneeight
        const scenenine = body.scenenine
        const sceneten = body.sceneten
        const newScene = await Scene.findOneAndUpdate({player : player},{$set:body})
        console.log(body)
        await newScene.save()
        res.status(200).json(newScene)


    }
}



