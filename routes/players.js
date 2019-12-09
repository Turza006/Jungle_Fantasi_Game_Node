var router = require('express-promise-router')();
const playersController = require('../controller/PlayersController')

router.route('/createplayers')
  .post(playersController.createPlayers)
router.route('/:email/singleplayer')
    .get(playersController.singlePlayer)
router.route('/getplayers')
    .get(playersController.getPlayers)
router.route('/:email/mainmanu')
    .get(playersController.mainManu)
router.route('/:email/upgradePlayer')
    .get(playersController.upgradePlayer)

module.exports = router;
