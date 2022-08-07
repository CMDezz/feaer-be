const { Order } = require("./../../models/Order");

module.exports.getAllOrder = (req, res, next) => {
  Order.find()
    .then((orders) => res.status(200).json(orders))
    .catch((err) => res.status(500).json(err));
};

module.exports.createOrder = (req, res, next) => {
  const {
    Address,
    District,
    Ward,
    City,
    Note,
    CustomerFirstName,
    CustomerLastName,
    CustomerEmail,
    CustomerPhone,
    ListProducts,
    OrderShippingType,
    OrderShippingFee,
    OrderTotal,
    OrderPayment,
  } = req.body;

  Order.create({
    Address,
    District,
    Ward,
    City,
    Note,
    CustomerFirstName,
    CustomerLastName,
    CustomerEmail,
    CustomerPhone,
    ListProducts,
    OrderShippingType,
    OrderShippingFee,
    OrderTotal,
    OrderPayment,
  })
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(500).json(err));
};

module.exports.deleteOrderById = (req, res, next) => {
  const { id } = req.body;
  Order.deleteOne({ _id: id })
    .then((order) => res.status(200).json("Deleted Successfully"))
    .catch((err) => res.status(500).json(err));
};
