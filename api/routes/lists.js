const router = require('express').Router();
const List = require('../models/List');
const verify = require('../verifyToken');

// Create
router.post('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);

    try {
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('Not authorized to create lists');
  }
});

// Delete
router.delete('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id);
      res.status(200).json('List deleted successfully');
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('Not authorized to delete lists');
  }
});

// Get
router.get('/', verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  let list = [];

  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([
          { $sample: { size: 5 } },
          { $match: { type: typeQuery, genre: genreQuery } },
        ]);
      } else {
        list = await List.aggregate([
          { $sample: { size: 5 } },
          { $match: { type: typeQuery } },
        ]);
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 5 } }]);
    }
    res.status(200).json(list);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all
router.get('/all', verify, async (req, res) => {
  let list = [];
  if (req.user.isAdmin) {
    try {
      list = await List.find();
      res.status(200).json(list.reverse());
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('Not authorized to view all lists');
  }
});

// Update
router.put('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedList = await List.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedList);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json('Not authorized to update lists');
  }
});

module.exports = router;
