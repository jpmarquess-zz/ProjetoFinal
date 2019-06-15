var express = require('express');
var router = express.Router();

var PostController = require("../controllers/PostController");

router.get("/", PostController.posts);
router.delete("/delete/:id", PostController.delete_post);
router.get("/:id", PostController.show);
router.post("/adduser", PostController.adduser);
router.delete("/delete_user", PostController.delete_user);
router.post("/create", PostController.create);
router.get("/comment/:id", PostController.comment);
router.post("/comment/reply/:id", PostController.comment_add);

module.exports = router;