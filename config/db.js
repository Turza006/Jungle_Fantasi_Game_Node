const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost/jungle', {
        useNewUrlParser: true,
        useUnifiedTopology: true
});

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error: '))

db.once('open', ()=>{
    console.log("Connected");
    
})