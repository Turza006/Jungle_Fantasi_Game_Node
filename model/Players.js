const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const timestamps = require('mongoose-timestamp')
const Schema = mongoose.Schema;
const PlayersSchema = new Schema({
    first_name : String,
    last_name : String,
    email : String,
    profile_pic : String,
    xp : Number,
    coin : Number,
    playing : Number,
    country : String,
    dimond : Number,
    score : Number

});

PlayersSchema.plugin(timestamps)
PlayersSchema.index({createdAt:1, updatedAt: 1})

module.exports = mongoose.model('players',PlayersSchema);
