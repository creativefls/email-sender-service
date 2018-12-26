const router = require('express').Router();
const { home, email, webhook } = require('../controllers')

/* GET home page. */
router.get('/', home.hello);
router.post('/single', email.sendOne);

router.post('/webhook/tracking', webhook.tracking);

module.exports = router;
