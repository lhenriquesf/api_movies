const {Router} = require("express");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const multer = require("multer");
const uploadConfig = require("../configs/upload");


const UsersController = require("../controllers/UsersController");
const UsersAvatarController = require("../controllers/UsersAvatarController");

const upload = multer(uploadConfig.MULTER);

const usersRoutes = Router();
const usersController = new UsersController();
const usersAvatarController = new UsersAvatarController();

usersRoutes.post("/", usersController.create);
usersRoutes.put("/", ensureAuthenticated, usersController.update);
usersRoutes.patch("/avatar", ensureAuthenticated, upload.single("avatar"), usersAvatarController.update);


module.exports = usersRoutes;