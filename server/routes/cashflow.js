const express = require('express');
const router = express.Router();
const { getTransactions } = require('../data');

// GET /api/cashflow - net cashflow summary
router.get('/', (req, res) => {
  const transactions = getTransactions();
  const income = transactions
    .filter(t => t.amount > 0)
    .reduce((sum, t) => sum + t.amount, 0);
  const expenses = transactions
    .filter(t => t.amount < 0)
    .reduce((sum, t) => sum + Math.abs(t.amount), 0);

  res.json({
    income: Math.round(income * 100) / 100,
    expenses: Math.round(expenses * 100) / 100,
    net: Math.round((income - expenses) * 100) / 100,
  });
});

// GET /api/cashflow/history?period=day|month
router.get('/history', (req, res) => {
  const period = req.query.period || 'month';
  const transactions = getTransactions();

  const grouped = {};
  transactions.forEach(t => {
    const key = period === 'day' ? t.date : t.date.substring(0, 7);
    if (!grouped[key]) {
      grouped[key] = { income: 0, expenses: 0 };
    }
    if (t.amount > 0) {
      grouped[key].income += t.amount;
    } else {
      grouped[key].expenses += Math.abs(t.amount);
    }
  });

  const history = Object.entries(grouped)
    .map(([date, data]) => ({
      date,
      income: Math.round(data.income * 100) / 100,
      expenses: Math.round(data.expenses * 100) / 100,
      net: Math.round((data.income - data.expenses) * 100) / 100,
    }))
    .sort((a, b) => a.date.localeCompare(b.date));

  res.json(history);
});

module.exports = router;
