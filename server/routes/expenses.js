const express = require('express');
const router = express.Router();
const { getTransactions } = require('../data');

// GET /api/expenses/category - breakdown of expenses by category
router.get('/category', (req, res) => {
  const transactions = getTransactions();
  const expenses = transactions.filter(t => t.amount < 0);

  const categories = {};
  expenses.forEach(t => {
    if (!categories[t.category]) {
      categories[t.category] = { total: 0, count: 0 };
    }
    categories[t.category].total += Math.abs(t.amount);
    categories[t.category].count += 1;
  });

  const totalExpenses = Object.values(categories).reduce((sum, c) => sum + c.total, 0);

  const result = Object.entries(categories)
    .map(([category, data]) => ({
      category,
      total: Math.round(data.total * 100) / 100,
      count: data.count,
      percentage: Math.round((data.total / totalExpenses) * 10000) / 100,
    }))
    .sort((a, b) => b.total - a.total);

  res.json(result);
});

module.exports = router;
