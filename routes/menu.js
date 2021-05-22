const Menu = require("../models/menu");

const express = require("express");
const router = express.Router();

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

// get all menus
router.get("/", async (req, res) => {
  try {
    const menus = await Menu.find();
    res.status(200).json({
      status: 200,
      message: "OK",
      data: menus,
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
