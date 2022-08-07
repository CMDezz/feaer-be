const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  Ward: { type: String, required: true },
  District: { type: String, required: true },
  City: { type: String, required: true },
  Address: { type: String, required: true },
  Note: { type: String },
  CustomerFirstName: { type: String, required: true },
  CustomerLastName: { type: String, required: true },
  CustomerEmail: { type: String, required: true },
  CustomerPhone: { type: String, required: true },
  OrderShippingType: { type: String, required: true },
  OrderShippingFee: { type: Number, required: true },
  OrderTotal: { type: Number, required: true },
  OrderPayment: { type: String, required: true },
  ListProducts: [
    {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
  ],
});

const Order = mongoose.model("Order", OrderSchema, "Order");

module.exports = {
  Order,
  OrderSchema,
};
