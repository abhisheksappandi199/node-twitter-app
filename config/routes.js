const express = require('express')
const router = express.Router()
const twitterController = require('../app/controller/twitterController')

router.get('/api/users/:name',twitterController.list)

module.exports = router