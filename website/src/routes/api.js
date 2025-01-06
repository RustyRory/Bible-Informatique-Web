const express = require("express");
const router = express.Router();
const Example = require("../models/ExampleModel");

// Exemple de route GET
router.get("/examples", async (req, res) => {
  try {
    const examples = await Example.find();
    res.status(200).json(examples);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Exemple de route POST
router.post("/examples", async (req, res) => {
  const example = new Example({
    name: req.body.name,
    description: req.body.description,
  });

  try {
    const newExample = await example.save();
    res.status(201).json(newExample);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
