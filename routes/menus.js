const express = require("express");
const router = express.Router();
const MealMenu = require("../models/menu");

router.get("/Create", async (req, res) => {
  try {
    await MealMenu.create([
      {
        name: "Grilled Chicken",
        TimeOfDay: "Dinner",
        Price: 8,
        inStock: true,
      },
      {
        name: "bread",
        TimeOfDay: "Breakfast",
        Price: 3,
        inStock: true,
      },
      {
        name: "milk",
        TimeOfDay: "Breakfast",
        Price: 2,
        inStock: true,
      },
      {
        name: "Cookie",
        TimeOfDay: "Breakfast",
        Price: 2,
        inStock: true,
      },
      {
        name: "Roast Beef",
        TimeOfDay: "Dinner",
        Price: 12,
        inStock: false,
      },
      {
        name: "Cheese Cake",
        TimeOfDay: "Dinner",
        Price: 6,
        inStock: false,
      },
      {
        name: "Pinapple Pizza",
        TimeOfDay: "Dinner",
        Price: 10,
        inStock: true,
      },
      {
        name: "steak",
        TimeOfDay: "Dinner",
        Price: 14,
        inStock: true,
      },
      {
        name: "Bagel",
        TimeOfDay: "Breakfast",
        Price: 1,
        inStock: true,
      },
      {
        name: "Fried fish",
        TimeOfDay: "Dinner",
        Price: 8,
        inStock: true,
      },
      {
        name: "Egg roll",
        TimeOfDay: "Breakfast",
        Price: 3,
        inStock: true,
      },
      {
        name: "Beef Burger",
        TimeOfDay: "Dinner",
        Price: 7,
        inStock: false,
      },
      {
        name: "Sandwich",
        TimeOfDay: "Breakfast",
        Price: 5,
        inStock: true,
      },
      {
        name: "Italian noodle",
        TimeOfDay: "Dinner",
        Price: 7,
        inStock: true,
      },
      {
        name: "Lobster roll",
        TimeOfDay: "Dinner",
        Price: 20,
        inStock: false,
      },
    ]);
    res.status(200).redirect("/api/menu");
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const MenuTemp = await MealMenu.find({});
    res.status(200).json(MenuTemp);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const foundMeal = await MealMenu.findById(req.params.id);
    res.status(200).json(foundMeal);
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE the meal with specific id
router.delete("/:id", async (req, res) => {
  try {
    const deletedMenu = await MealMenu.findByIdAndDelete(req.params.id);
    console.log(deletedMenu);
    res.status(200).redirect("/api/menu");
  } catch (err) {
    res.status(400).send(err);
  }
});

//Post - Create Menu in db
router.post("/", async (req, res) => {
  try {
    await MealMenu.create(req.body);
    res.status(200).redirect("/api/menu");
  } catch (err) {
    res.status(400).send(err);
  }
});

//update the meal info with specific id
router.patch("/:id", async (req, res) => {
  try {
    await MealMenu.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).redirect("/api/menu");
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
