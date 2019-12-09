var router = require('express-promise-router')();
const fruitsController = require('../controller/FruitsController')

router.route('/:player/createfruit')
    .post(fruitsController.createFruit)
router.route('/getall')
    .get(fruitsController.getAllfruit)
router.route('/:player/getsinglefruit')
    .get(fruitsController.getSingleAll)
router.route('/:player/updatefruit')
    .post(fruitsController.updateFruit)




module.exports = router;
