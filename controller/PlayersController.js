const Players = require('../model/Players')
const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(google_auth.googleAuth.clientID);

module.exports = {
    createPlayers: async (req, res) => {
        const body = req.body
        const xp = body.xp
        const coin = body.coin
        const playing = body.playing
        const country = body.country
        const dimond = body.dimond
        const score = body.score

        async function verify() {
            const ticket = await client.verifyIdToken({
                idToken: body.googleToken,
                audience: ""
            })
            const payload = ticket.getPayload();
            console.log(payload)

            if (payload.exp > Date.now() / 1000) {
                const player = await Players.findOne({email: payload.email}, {
                    firstName: 1,
                    lastName: 1,
                    fullName: 1,
                    email: 1,
                    userName: 1,
                    _id: 1,
                    profileImage: 1,
                    loginType: 1,
                })

                const count = await Players.find().count()
                const newPlayer = new Players();
                newPlayer.firstName = payload.given_name
                newPlayer.lastName = payload.family_name
                newPlayer.fullName = payload.name
                newPlayer.email = payload.email
                newPlayer.profileImage = payload.picture
                newPlayers.xp = xp
                newPlayers.coin = coin
                newPlayers.playing = playing
                newPlayers.country = country
                newPlayers.dimond = dimond
                newPlayers.score = score
                if (count > 0) {
                    newPlayer.userName = player.firstName.toLowerCase() + "." + player.lastName.toLowerCase() + "." + count.toString()
                } else {
                    newPlayer.userName = player.firstName.toLowerCase() + "." + player.lastName.toLowerCase()
                }
                newPlayer.loginType = "Google"

                await tokenCreator("Players", player._id)
                await newPlayer.save()
                res.status(201).json(newPlayer)
            }
        }

        verify().catch(console.error);
    },






    singlePlayer: async (req,res) =>{
        const myData = await Players.findOne({email : req.params.email}).populate('Players')
        res.status(200).json(myData)
    },
    getPlayers: async (req,res) => {
        console.log("Hello")
        const data = await Players.findOne().populate('Players')

        res.status(200).json(data)
    },
    mainManu: async (req,res) => {
        const data = await Players.findOne({},{name:1, xp:1, score:1}).populate('Players').sort({score: -1})
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
        const newPLayers = await Players.findOneAndUpdate({email : email},{$set:body})
        await newPLayers.save()
        res.status(200).json(newPLayers)

    }




}
