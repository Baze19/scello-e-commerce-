const express = require("express");

const router = express.Router();
const { Cart, Coupon } = require("../models");
const { codeGenerator } = require("../services/couponService.js");

router.get("/cart", async (req, res) => {
  try {
    const allCart = await Cart.findAll();
    let total = 0;
    await Promise.all(
      allCart.map(async (item) => {
        total += Number(item.price);
      })
    );
    res.status(200).json({ data: allCart, total, message: "successful" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.mesage });
  }
});

router.post("/addCart", async (req, res) => {
  try {
    const data = req.body;
    const cart = await Cart.create(data);
   
    res.status(200).json({ data: cart, message: "successful" });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: error.message });
  }
});


router.get("/coupon", async (req, res) => {
  try {
    const allCart = await Cart.findAll();
    let total = 0;
    await Promise.all(
      allCart.map(async (item) => {
        total += Number(item.price);
      })
    );

    //coupon configurations

    if (total > 50 && allCart.length !== 0) {
      const discount = "$10";
      const code = codeGenerator();
      const couponCode = Coupon.create({
        code,
        discount,
        isPercent: true,
        expireDate: "2024-01-01 08:00:00",
        isActive: true,
      });
      res.status(200).json({ data: couponCode, message: "successful" });
    } else {
      throw new Error("coupon is not valid");
    }

    if (total > 100 && allCart.length > 2) {
      const discount = "$10%";
      const code = codeGenerator();
      const couponCode = Coupon.create({
        code,
        discount,
        isPercent: true,
        expireDate: "2024-01-01 08:00:00",
        isActive: true,
      });
      res.status(200).json({ data: couponCode, message: "successful" });
    } else {
      throw new Error("coupon is not valid");
    }

    if (total > 200 && allCart.length > 3) {
        const discount = "10% || $10";
        const code = codeGenerator();
        const couponCode = Coupon.create({
          code,
          discount,
          isPercent: true,
          expireDate: "2024-01-01 08:00:00",
          isActive: true,
        });
        res.status(200).json({ data: couponCode, message: "successful" });
      } else {
        throw new Error("coupon is not valid");
      }

      if (total > 1000 && allCart.length > 0) {
        const discount = "10% && $10";
        const code = codeGenerator();
        const couponCode = Coupon.create({
          code,
          discount,
          isPercent: true,
          expireDate: "2024-01-01 08:00:00",
          isActive: true,
        });
        res.status(200).json({ data: couponCode, message: "successful" });
      } else {
        throw new Error("coupon is not valid");
      }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
