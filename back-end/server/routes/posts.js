var express = require('express');
var router = express.Router();

var PostController = require("../controllers/PostController");

router.get("/", PostController.posts);
router.get("/:id", PostController.show);
router.post("/adduser", PostController.adduser);

module.exports = router;