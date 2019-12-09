var indexRouter = require('../routes/index');
var playersRouter = require('../routes/players');
var spellRouter = require('../routes/spell');
var fruitRouter =  require('../routes/fruits');
var sceneRouter = require('../routes/scene');


module.exports = app => {

    app.use('/', indexRouter);
    app.use('/players', playersRouter);
    app.use('/spell', spellRouter);
    app.use('/fruit',fruitRouter);
    app.use('/scene',sceneRouter)

}