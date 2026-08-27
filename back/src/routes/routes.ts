import { Router } from "express";
import { validate } from "../middlewares/Validate";

import { createUserSchema, loginSchema, updateUserSchema } from "../schemas/user.schema";
import { createProductSchema, updateProductSchema } from "../schemas/product.schema";
import { createCategorySchema, updateCategorySchema } from "../schemas/category.schema";
import { createVariantSchema, updateVariantSchema, updateStockSchema } from "../schemas/variant.schema";

import { UserController } from "../controllers/UserController";
import { ProductController } from "../controllers/ProductController";
import { VariantController } from "../controllers/VariantController";

import { OrderController } from "../controllers/OrderController";
import { CategoryController } from "../controllers/CategoryController";

import { authenticateJWT } from "../middlewares/Authenticate";
import { WishListController } from "../controllers/WishListController";
import { CartController } from "../controllers/CartController";


import { CartItemController } from "../controllers/CartItemController";







//User Routes


const router = Router();

// User Routes
router.post("/users", validate(createUserSchema), UserController.create);
router.post("/login", validate(loginSchema), UserController.login);
router.get("/users/:id", authenticateJWT, UserController.getById);
router.patch("/users/:id", authenticateJWT, validate(updateUserSchema), UserController.update);
router.delete("/users/:id", authenticateJWT, UserController.delete);

// Product Routes
router.post("/products", authenticateJWT, validate(createProductSchema), ProductController.create);
router.get("/products/:id", authenticateJWT, ProductController.getById);
router.patch("/products/:id", authenticateJWT, validate(updateProductSchema), ProductController.update);
router.delete("/products/:id", authenticateJWT, ProductController.delete);


// Product Variant Routes
router.post("/productVariant", authenticateJWT, validate(createVariantSchema), VariantController.create);
router.get("/productVariant/:id", authenticateJWT, VariantController.getById);
router.get("/productVariant/product/:productId", authenticateJWT, VariantController.getVariantByProduct);
router.patch("/productVariant/:id", authenticateJWT, validate(updateVariantSchema), VariantController.update);
router.patch("/productVariant/:id/stockQuantity", authenticateJWT, validate(updateStockSchema), VariantController.updateStock);
router.delete("/productVariant/:id", authenticateJWT, VariantController.delete);

// Wishlist Routes
router.post("/wishlist/:userId", authenticateJWT, WishListController.create);
router.get("/wishlist/:userId", authenticateJWT, WishListController.get);
router.delete("/wishlist/:userId/product/:productId", authenticateJWT, WishListController.deleteOne);
router.delete("/wishlist/:userId", authenticateJWT, WishListController.deleteAll);

// Order Routes
router.post("/orders", authenticateJWT, OrderController.create);
router.get("/orders/:id", authenticateJWT, OrderController.getById);
router.patch("/orders/:id", authenticateJWT, OrderController.update);
router.delete("/orders/:id", authenticateJWT, OrderController.delete);

// Category Routes
router.post("/categories", authenticateJWT, validate(createCategorySchema), CategoryController.create);
router.get("/categories", authenticateJWT, CategoryController.getAll);
router.get("/categories/:id", authenticateJWT, CategoryController.getById);
router.patch("/categories/:id", authenticateJWT, validate(updateCategorySchema), CategoryController.update);
router.delete("/categories/:id", authenticateJWT, CategoryController.remove);

// Cart Routes
router.post("/cart",authenticateJWT, CartController.create);
router.get("/cart/:id",authenticateJWT, CartController.getbyId);
router.patch("/cart/:id",authenticateJWT, CartController.updatecart);
router.delete('/cart/:cartId/item/:itemId',authenticateJWT,CartController.removeItem);
router.post("/category",authenticateJWT, CategoryController.create);

// CartItem Routes
router.post("/cartitem",authenticateJWT, CartItemController.create);
router.get("/cartitem/:id",authenticateJWT,  CartItemController.get);
router.patch("/cartitem/:id",authenticateJWT,  CartItemController.update);
router.delete('/cartItem/cart/:userId/item/:variantId',authenticateJWT, CartItemController.delete);

//Coupon Routes


export default router;