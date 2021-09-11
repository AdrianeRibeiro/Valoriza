import { request, Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { CreateTagController } from "./controllers/CreateTagController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { AutheticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimentController";

const router = Router();
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AutheticateUserController()
const createComplimentController = new CreateComplimentController()

router.post("/tags", ensureAdmin, createTagController.handle)
router.post("/users", createUserController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", createComplimentController.handle)

export { router }