var express = require('express');
var router = express.Router();

var PostController = require("../controllers/PostController");

router.get("/", PostController.posts);
router.get("/:id", PostController.show);
router.post("/adduser", PostController.adduser);
router.post("/create", PostController.create);
router.get("/comment", PostController.comment);

module.exports = router;