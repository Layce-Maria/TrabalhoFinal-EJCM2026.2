
import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { ProductController } from "../controllers/ProductController";
import { VariantController } from "../controllers/VariantController";
import { authenticateJWT } from "../middlewares/Authenticate";

const router = Router();

//User Routes
router.post("/users", UserController.create);

router.get("/users/:id", authenticateJWT, UserController.getById);
router.patch("/users/:id", authenticateJWT, UserController.update);
router.delete("/users/:id", authenticateJWT, UserController.delete);

//Product Routes
router.post("/products", ProductController.create);

router.get("/products/:id", authenticateJWT, ProductController.getById);
router.patch("/products/:id", authenticateJWT, ProductController.update);
router.delete("/products/:id", authenticateJWT, ProductController.delete);

//Product Variant Routes
router.post("/productVariant",VariantController.create);
router.get("/productVariant/:id",VariantController.getById);
router.get("/productVariant/productId",VariantController.getVariantByProduct);
router.patch("/productVariant/:id",VariantController.update);
router.patch("/productVariant/:id",VariantController.updateStock);
router.delete("/productVariant/:id",VariantController.delete);

export default router;