const express = require("express");
const router = express.Router();
const OrderController = require("./controller");

router.get("/", OrderController.getAllOrder);
// router.get("/getOrderById", OrderController.getOrderById);
router.delete("/deleteOrderById", OrderController.deleteOrderById);
// router.put("/editOrderById", OrderController.editOrderById);
router.post("/createOrder", OrderController.createOrder);

module.exports = router;
