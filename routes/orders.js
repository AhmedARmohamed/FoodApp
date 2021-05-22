const express = require("express");
const credentials = {
  apiKey: "2bd1e9fc189a85366ad432e3121babfe8c2b47a995f4216516d6141cb6f32ea4",
  username: "sandbox",
};
const smsService = require("africastalking")(credentials);
const mongoose = require("mongoose");
const router = express.Router();

const Order = require("../models/order");
const Menu = require("../models/menu");

router.post("/", async (req, res) => {
  const newOrder = new Order({
    menuItemId: req.body.menuItemId,
    userPhoneNumber: req.body.userPhoneNumber,
  });
  const sms = smsService.SMS;
  let menu = await Menu.find({ _id: req.body.menuItemId });
  let customMessage = `Please confirm your order for ${menu.name} of ksh ${menu.price}. Thank you for Dinning with us.`;
  const options = {
    to: req.body.userPhoneNumber,
    message: customMessage,
    from: "19852",
  };

  sms
    .send(options)
    .then((info) => {
      console.log(info);
      res.json(info);
    })
    .catch((error) => {
      console.log(error);
    });
});

module.exports = router;
