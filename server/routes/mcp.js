const express = require('express');
const router = express.Router();
const {
  getFinancialSummary,
  getSpendingByCategory,
  getSpendingByMerchant,
  getRecurringExpenses,
  searchTransactions,
} = require('../data');

// GET /api/mcp/summary - overall financial summary
router.get('/summary', (req, res) => {
  res.json(getFinancialSummary());
});

// GET /api/mcp/spending-by-category?start=YYYY-MM-DD&end=YYYY-MM-DD
router.get('/spending-by-category', (req, res) => {
  const { start, end } = req.query;
  res.json(getSpendingByCategory(start, end));
});

// GET /api/mcp/spending-by-merchant?start=YYYY-MM-DD&end=YYYY-MM-DD
router.get('/spending-by-merchant', (req, res) => {
  const { start, end } = req.query;
  res.json(getSpendingByMerchant(start, end));
});

// GET /api/mcp/recurring - recurring expenses
router.get('/recurring', (req, res) => {
  res.json(getRecurringExpenses());
});

// GET /api/mcp/search?q=query - search transactions
router.get('/search', (req, res) => {
  const { q } = req.query;
  if (!q) return res.json([]);
  res.json(searchTransactions(q));
});

module.exports = router;
