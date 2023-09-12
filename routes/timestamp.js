const express = require("express");
const router = express.Router();
const { getOrderTimestamp } = require("../controllers/timestampController");

router.use(express.json());

// GET latest timestamp
router.route("/").get(getOrderTimestamp);

module.exports = router;
