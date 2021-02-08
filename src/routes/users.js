const path = require('path');
const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const multer = require ("multer");

const registervalidator = require("../validations/registervalidator");
const registerEvalidator = require("../validations/registerEditValidation");
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
   
var upload = multer({ storage: storage })

router.get('/register',guestMiddleware, usersController.register);
router.post("/register", upload.single('image'), registervalidator, usersController.save)
router.get('/login', guestMiddleware, usersController.login);
router.post('/login', loginValidator, usersController.logged);
router.get("/logout" ,authMiddleware, usersController.logout);
router.get("/profile/:id", authMiddleware, usersController.profile);
router.get('/RegisterEdit/:id', authMiddleware, usersController.edit);
router.post('/RegisterEdit/:id', upload.single('image'),registerEvalidator, usersController.update);





module.exports = router;