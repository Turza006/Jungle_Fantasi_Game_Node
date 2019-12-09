var router = require('express-promise-router')();
const spellController = require('../controller/SpellController')

router.route('/:player/createspell')
  .post(spellController.createSpell)
router.route('/:player/upgrade')
    .post(spellController.upgradeSpell)
router.route('/allspell')
    .get(spellController.getAll)
router.route('/:player/singleplayer')
    .get(spellController.getSingleAll)

module.exports = router;
