const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const timestamps = require('mongoose-timestamp')
const Schema = mongoose.Schema;
const SceneSchema = new Schema({
    player : {
        type: Schema.Types.ObjectId,
        ref: "player"
    },
    sceneone : Number,
    scenetwo : Number,
    scenethree : Number,
    scenefour : Number,
    scenefive : Number,
    scenesix : Number,
    sceneseven : Number,
    sceneeight : Number,
    scenenine : Number,
    sceneten : Number
});

SceneSchema.plugin(timestamps)
SceneSchema.index({createdAt:1, updatedAt: 1})

module.exports = mongoose.model('scene',SceneSchema);