
import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { ProductController } from "../controllers/ProductController";
import { authenticateJWT } from "../middlewares/Authenticate";

const router = Router();

router.post("/users", UserController.create);

router.get("/users/:id", authenticateJWT, UserController.getById);
router.patch("/users/:id", authenticateJWT, UserController.update);
router.delete("/users/:id", authenticateJWT, UserController.delete);

router.post("/products", ProductController.create);

router.get("/products/:id", authenticateJWT, ProductController.getById);
router.patch("/products/:id", authenticateJWT, ProductController.update);
router.delete("/products/:id", authenticateJWT, ProductController.delete);


export default router;