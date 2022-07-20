const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const config = require("./config/config");

const { Product } = require("./models/Product");
const res = require("express/lib/response");
const Port = process.env.PORT || config.port;
mongoose
  .connect(config.mongodbUri, {})
  .then(() => console.log("Connect to mongodb Successfully!"))
  .catch((err) => console.log(err));

const app = express();

//set top seller tag
// setTopSellersTag();
// function setTopSellersTag() {
//   Product.find()
//     .populate("Discount")
//     .limit(20)
//     .then((ps) =>
//       ps.map((p) => {
//         p.Tag.push("62cbb943dd778f26e4877f28");
//         p.save();
//         return p;
//       })
//     )
//     .then((ps) => {
//       console.log(ps);
//     })
//     .catch((err) => res.status(500).json(err));
// }

// Product.find({
//   _id: "62d2c23057434cce6af8d055",
// })
//   .then((ps) => {
//     return ps.map((p) => {
//       (p.SizeAndStock = {
//         28: 19,
//         29: 12,
//         30: 1,
//         31: 0,
//       }),
//         p.save();
//       return p;
//     });
//   })
//   .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());
app.use("/api", require("./routes"));
app.listen(Port, () => {
  console.log(`App is running on Port :${Port}`);
});
