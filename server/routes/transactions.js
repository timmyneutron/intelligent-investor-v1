const express = require('express');
const router = express.Router();
const { getTransactions, updateTransaction, CATEGORIES } = require('../data');

// GET /api/transactions
router.get('/', (req, res) => {
  res.json(getTransactions());
});

// GET /api/transactions/categories - list of valid categories
router.get('/categories', (req, res) => {
  res.json(CATEGORIES);
});

// PUT /api/transactions/:id - update a transaction (e.g., re-categorize)
router.put('/:id', (req, res) => {
  const { id } = req.params;
  const updated = updateTransaction(parseInt(id), req.body);
  if (updated) {
    res.json(updated);
  } else {
    res.status(404).json({ error: 'Transaction not found' });
  }
});

module.exports = router;
