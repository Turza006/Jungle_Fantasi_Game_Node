var router = require('express-promise-router')();
const playersController = require('../controller/PlayersController')

router.route('/createplayer')
  .post(playersController.createPlayers)
router.route('/:email/singleplayer')
    .get(playersController.singlePlayer)
router.route('/getplayers')
    .get(playersController.getPlayers)
router.route('/leaderboard')
    .get(playersController.mainManu)
router.route('/:email/upgradeplayer')
    .post(playersController.upgradePlayer)

module.exports = router;
