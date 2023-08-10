const router = require('express').Router()

// GET ALL

router.use('/users',require('./user.route'))
router.use("/games", require("./user.route copy"));





module.exports = router