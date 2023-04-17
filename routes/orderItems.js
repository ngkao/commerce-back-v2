const express = require("express");
const router = express.Router();
const { getOrderItems } = require("../controllers/orderItemsController");

//GET order Items
router.route("/").get(getOrderItems);

module.exports = router;