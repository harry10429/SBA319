const mongoose = require("mongoose");

const MenuSchema = new mongoose.Schema({
  name: { type: String, required: true },
  TimeOfDay: { type: String, required: true },
  Price: { type: Number, min: 1, required: true },
  inStock: Boolean,
});
//create index with key  "Price" in asc order;
MenuSchema.index({ Price: 1 });

const MealMenu = mongoose.model("Menu", MenuSchema);

module.exports = MealMenu;
