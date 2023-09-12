const express = require("express");
const router = express.Router();
const {
  getProducts,
  addProduct,
  getProductsSold,
} = require("../controllers/productController");

router.use(express.json());

// GET all products
router.route("/").get(getProducts);

// GET all products with sold quantity
router.route("/sold").get(getProductsSold);

// POST new product
router.route("/add").post(addProduct);

module.exports = router;
