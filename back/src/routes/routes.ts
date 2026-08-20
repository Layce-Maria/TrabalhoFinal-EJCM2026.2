
import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { ProductController } from "../controllers/ProductController";
import { VariantController } from "../controllers/VariantController";
<<<<<<< HEAD
=======
import { authenticateJWT } from "../middlewares/Authenticate";
import { WishListController } from "../controllers/WishListController";
>>>>>>> cd192a6 (feat:criaWishListControllerERotas)

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
router.post("/productVariant",authenticateJWT, VariantController.create);
router.get("/productVariant/:id",authenticateJWT, VariantController.getById);
router.get("/productVariant/productId", authenticateJWT, VariantController.getVariantByProduct);
router.patch("/productVariant/:id",authenticateJWT, VariantController.update);
router.patch("/productVariant/:id",authenticateJWT, VariantController.updateStock);
router.delete("/productVariant/:id",authenticateJWT, VariantController.delete);

//Wishlist Routes
router.post("/wishlist/:userId",authenticateJWT,  WishListController.create);
router.get("/wishlist/:userId",authenticateJWT,  WishListController.get);
router.delete("/wishlist/:userId/product/:productId", authenticateJWT, WishListController.deleteOne);
router.delete("/wishlist/:userId",authenticateJWT, WishListController.deleteAll);

export default router;