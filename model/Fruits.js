const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const timestamps = require('mongoose-timestamp')
const Schema = mongoose.Schema;
const FruitsSchema = new Schema({
    player : {
        type: Schema.Types.ObjectId,
        ref: "player"
    },
    fruitone : Number,
    fruittwo : Number,
    fruitthree : Number,
    fruitfour : Number,
    fruitfive : Number,
    fruitsix : Number,
    fruitseven : Number,
    fruiteight : Number,
    fruitnine : Number,
    fruitten : Number,
    fruiteleven : Number,
    fruittwelve : Number,
    fruitthrteen : Number,
    fruitfourteen : Number,
    fruitfifteen : Number,
    fruitsixteen : Number,
    fruitseventeen : Number,
    fruiteightteen : Number,
    fruitnineteen : Number,
    fruittwenty : Number,
    fruittwentyone : Number,
    fruittwentytwo : Number,
    fruittwentythree : Number,
    fruittwentyfour : Number,
    fruittwentyfive : Number

});

FruitsSchema.plugin(timestamps)
FruitsSchema.index({createdAt:1, updatedAt: 1})

module.exports = mongoose.model('fruits',FruitsSchema);
