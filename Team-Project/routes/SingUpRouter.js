const express = require("express");
const router = express.Router();
const signUpController = require("../controllers/signUpController");
router.get("/", signUpController.signUpForm);
router.post("/", signUpController.signUpPost);
module.exports = router;
