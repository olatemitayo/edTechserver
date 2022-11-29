const express = require("express");
const {
  register,
  signin,
  verifyToken,
  getUser,
} = require("../controllers/user-controller");

const router = express.Router();

router.post("/register", register);
router.post("/signin", signin);
router.get("/user", verifyToken, getUser);

module.exports = router;
