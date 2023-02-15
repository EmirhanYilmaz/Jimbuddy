// routes/api/books.js

const express = require('express');
const router = express.Router();

// Load program model
const Program = require('../models/programmodel');

// @route GET api/programs/
// @description tests books route
// @access Public
router.get('/programs', (req, res) => res.send('test'));

// @route GET api/books
// @description Get all books
// @access Public
router.get('/', (req, res) => {
  Program.find()
    .then(books => res.json(books))
    .catch(err => res.status(404).json({ nobooksfound: 'No Books found' }));
});

// @route GET api/books/:id
// @description Get single program by id
// @access Public
router.get('/:id', (req, res) => {
    Program.findById(req.params.id)
    .then(program => res.json(program))
    .catch(err => res.status(404).json({ nobookfound: 'No program found' }));
});

// @route GET api/books
// @description add/save program
// @access Public
router.post('/', (req, res) => {
    Program.create(req.body)
    .then(program => res.json({ msg: 'program added successfully' }))
    .catch(err => res.status(400).json({ error: 'Unable to add this program' }));
});

// @route GET api/books/:id
// @description Update program
// @access Public
router.put('/:id', (req, res) => {
    Program.findByIdAndUpdate(req.params.id, req.body)
    .then(program => res.json({ msg: 'Updated successfully' }))
    .catch(err =>
      res.status(400).json({ error: 'Unable to update the Database' })
    );
});

// @route GET api/books/:id
// @description Delete program by id
// @access Public
router.delete('/:id', (req, res) => {
    Program.findByIdAndRemove(req.params.id, req.body)
    .then(program => res.json({ mgs: 'program entry deleted successfully' }))
    .catch(err => res.status(404).json({ error: 'No such a program' }));
});

module.exports = router;