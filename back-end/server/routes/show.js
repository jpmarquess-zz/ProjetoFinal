var express = require('express');
var router = express.Router();

var PostController = require("../controllers/PostController");

router.get("/", PostController.index);
router.get('/:id', PostController.show);

module.exports = router;