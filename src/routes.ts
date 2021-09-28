import { request, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticated } from "./middlewares/ensureAuthenticated";

import { AutheticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";
import { ListUserReceiveComplimentsController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ListTagsConstroller } from "./controllers/ListTagsController";


const router = Router();
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AutheticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentsController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listTagsController = new ListTagsConstroller()

router.post("/tags", ensureAuthenticated, ensureAdmin, createTagController.handle)
router.post("/users", createUserController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAuthenticated, createComplimentController.handle)

router.get("/users/compliments/send", ensureAuthenticated, listUserReceiveComplimentsController.handle)
router.get("/users/compliments/receive", ensureAuthenticated, listUserSendComplimentsController.handle)
router.get("/tags", ensureAuthenticated, listTagsController.handle)


export { router }