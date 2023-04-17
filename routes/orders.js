const express = require("express");
const router = express.Router();
const {getOrders, getById } = require("../controllers/orderController");

router.use(express.json());

//GET all orders
router.route("/").get(getOrders);

//GET order by ID
router.route("/:id").get(getById);


module.exports = router;