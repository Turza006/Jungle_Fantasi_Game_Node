var router = require('express-promise-router')();
const sceneController = require('../controller/SceneController')

router.route('/:player/createscene')
    .post(sceneController.createScene)
router.route('/getallscene')
    .get(sceneController.getAllscene)
router.route('/:player/getsinglescene')
    .get(sceneController.getSingleAllscene)
router.route('/:player/updatescene')
    .post(sceneController.updateScene)



module.exports = router;
