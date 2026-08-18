
import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { ProductController } from "../controllers/ProductController";
import { VariantController } from "../controllers/VariantController";

const router = Router();

//User Routes
router.post("/users", UserController.create);
router.get("/users/:id", UserController.getById);
router.patch("/users/:id", UserController.update);
router.delete("/users/:id", UserController.delete);

//Product Routes
router.post("/products", ProductController.create);
router.get("/products/:id", ProductController.getById);
router.patch("/products/:id", ProductController.update);
router.delete("/products/:id", ProductController.delete);

//Product Variant Routes
router.post("/productVariant",VariantController.create);
router.get("/productVariant/:id",VariantController.getById);
router.get("/productVariant/productId",VariantController.getVariantByProduct);
router.patch("/productVariant/:id",VariantController.update);
router.patch("/productVariant/:id",VariantController.updateStock);
router.delete("/productVariant/:id",VariantController.delete);

export default router;