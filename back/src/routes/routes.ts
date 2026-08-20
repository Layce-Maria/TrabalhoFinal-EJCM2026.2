
import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { ProductController } from "../controllers/ProductController";

const router = Router();

router.post("/users", UserController.create);
router.get("/users/:id", UserController.getById);
router.patch("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

router.post("/products", ProductController.create);
router.get("/products/:id", ProductController.getById);
router.patch("/products/:id", ProductController.update);
router.delete("/products/:id", ProductController.delete);


export default router;