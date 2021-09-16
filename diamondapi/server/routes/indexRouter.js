var express = require('express');
var router = express.Router();
var userRouter = require("./userRouter")
var loginroutes = require('./login');

router.use('/', userRouter);
router.use('/',loginroutes)

module.exports = router;