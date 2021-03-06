const mongoose = require("mongoose");

const CollectionSchema = new mongoose.Schema({
  Name: { type: String, required: true },
  Title: { type: String, required: true },
  Image: { type: String, required: true },
  Desc: { type: String, required: true },
});

const Collection = mongoose.model("Collection", CollectionSchema, "Collection");
module.exports = {
  Collection,
  CollectionSchema,
};
