const Spell = require('../model/Spell')
module.exports = {
    createSpell: async (req, res) => {
        const player = req.params.player
        const body = req.body
        const shield_spell_active = body.shield_spell_active
        const slo_mo_spell_active = body.slo_mo_spell_active
        const productive_spell_active = body.productive_spell_active
        const momentum_spell_active = body.momentum_spell_active
        const healing_spell_active = body.healing_spell_active
        const shield_spell_use = body.shield_spell_use
        const slo_mo_spell_use = body.slo_mo_spell_use
        const productive_spell_use = body.productive_spell_use
        const momentum_spell_use = body.momentum_spell_use
        const healing_spell_use = body.healing_spell_use
        const newSpell = new Spell()


        const players = await Spell.findOne({player: player})

        if (players) {
            return res.status(401).json({
                msg: "Players Exist With The spell"
            })
        }
        if (player) {
            newSpell.player = player
            newSpell.shield_spell_active = shield_spell_active
            newSpell.slo_mo_spell_active = slo_mo_spell_active
            newSpell.productive_spell_active = productive_spell_active
            newSpell.momentum_spell_active = momentum_spell_active
            newSpell.healing_spell_active = healing_spell_active
            newSpell.shield_spell_use = shield_spell_use
            newSpell.slo_mo_spell_use = slo_mo_spell_use
            newSpell.productive_spell_use = productive_spell_use
            newSpell.momentum_spell_use = momentum_spell_use
            newSpell.healing_spell_use = healing_spell_use
            await newSpell.save()
            res.status(201).json(newSpell)

        }
    },
    upgradeSpell: async (req, res) => {
        const player = req.params.player
        const body = req.body
        const shield_spell_active = body.shield_spell_active
        const slo_mo_spell_active = body.slo_mo_spell_active
        const productive_spell_active = body.productive_spell_active
        const momentum_spell_active = body.momentum_spell_active
        const healing_spell_active = body.healing_spell_active
        const shield_spell_use = body.shield_spell_use
        const slo_mo_spell_use = body.slo_mo_spell_use
        const productive_spell_use = body.productive_spell_use
        const momentum_spell_use = body.momentum_spell_use
        const healing_spell_use = body.healing_spell_use
        const newSpell = await Spell.findOneAndUpdate({player : player},{$set:body})

        await newSpell.save()
        res.status(201).json(newSpell)





    },
    getAll:async (req,res) => {
        const data = await Spell.find().populate('spell')
        res.status(200).json(data)

    },
    getSingleAll:async (req,res) => {
        const data = await Spell.find({player : req.params.player}).populate('spell')
        res.status(200).json(data)
    }


}



