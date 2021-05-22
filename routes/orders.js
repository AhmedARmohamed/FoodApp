const express = require("express");
const router = express.Router();

const Order = require("../models/order");

router.post("/", async (req, res) => {
  console.log(req.body);
  const newOrder = new Order({
    menuItemId: req.body.menuItemId,
    userPhoneNumber: req.body.userPhoneNumber,
  });

  try {
    await newOrder.save();
    res.status(200).json(newOrder);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
