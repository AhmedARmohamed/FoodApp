const Menu = require("../models/menu");

const express = require("express");
const router = express.Router();

const menus = [
  { id: 1, name: "chips", price: 80 },
  { id: 2, name: "chicken", price: 180 },
  { id: 3, name: "Briyani", price: 380 },
  { id: 4, name: "Soda", price: 80 },
];

// feature 1 post a menu
router.post("/", async (req, res) => {
  console.log(req.body);
  const newMenu = new Menu({
    name: req.body.name,
    price: req.body.price,
  });

  try {
    await newMenu.save();
    // res.status(201).json(newMenu);
    res.status(201).json({
      status: 201,
      message: "OK",
      data: newMenu,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
