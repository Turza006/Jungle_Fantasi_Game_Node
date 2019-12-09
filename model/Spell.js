const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const timestamps = require('mongoose-timestamp')
const Schema = mongoose.Schema;
const SpellSchema = new Schema({
    player : {
        type: Schema.Types.ObjectId,
        ref: "player"
    },
    shield_spell_active : Number,
    slo_mo_spell_active : Number,
    productive_spell_active : Number,
    momentum_spell_active : Number,
    healing_spell_active : Number,
    shield_spell_use : Number,
    slo_mo_spell_use : Number,
    productive_spell_use : Number,
    momentum_spell_use : Number,
    healing_spell_use : Number,
});

SpellSchema.plugin(timestamps)
SpellSchema.index({createdAt:1, updatedAt: 1})

module.exports = mongoose.model('spell',SpellSchema);
