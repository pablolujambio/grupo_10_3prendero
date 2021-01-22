const path = require('path');
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const multer = require ("multer");

const registervalidator = require("../validations/registervalidator");
const loginValidator = require('../validations/loginValidatior');
const authMiddleware = require('../middlewares/authMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/uploads/avatars"))
  },
  filename: function (req, file, cb) {
    cb(null, req.body.email + path.extname(file.originalname))
  }
})
   
var upload = multer()

router.get('/register',guestMiddleware, usersController.register);
router.post("/register", upload.single('image'),registervalidator, usersController.save)
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', loginValidator, usersController.logged);
router.get("/logout" ,authMiddleware, usersController.logout);
router.get('/profile', authMiddleware, usersController.profile);



module.exports = router;