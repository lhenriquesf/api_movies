const { Router } = require("express");
const UserController = require("../controllers/UsersController");

const usersRoutes = Router();
const userController = new UserController();

usersRoutes.post("/", userController.create);
usersRoutes.put("/:id",userController.update);

module.exports = usersRoutes;