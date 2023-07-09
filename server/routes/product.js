const express = require("express");

const isAuth = require("../middlewares/is-auth");
const upload = require("../middlewares/multer");
const productController = require("../controllers/product");

const router = express.Router();

router.post(
  "/product",
  isAuth(["admin"]),
  upload.single("image"),
  productController.postProduct
);

router.get(
  "/products", 
  productController.getProducts
);

router.get(
  "/product/:productId", 
  productController.getProduct
);

router.put(
  "/product/:productId",
  isAuth(["admin"]),
  upload.single("image"),
  productController.updateProduct
);

router.delete(
  "/product/:productId",
  isAuth(["admin"]),
  productController.deleteProduct
);

module.exports = router;
