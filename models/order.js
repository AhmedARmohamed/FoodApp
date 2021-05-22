const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  menuItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Menu",
  },

  userPhoneNumber: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
