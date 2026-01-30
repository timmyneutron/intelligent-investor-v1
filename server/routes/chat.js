const express = require('express');
const Anthropic = require('@anthropic-ai/sdk');
const {
  getTransactions,
  getFinancialSummary,
  getSpendingByCategory,
  getSpendingByMerchant,
  getRecurringExpenses,
} = require('../data');

const router = express.Router();

function buildFinancialContext() {
  const summary = getFinancialSummary();
  const categories = getSpendingByCategory();
  const merchants = getSpendingByMerchant();
  const recurring = getRecurringExpenses();
  const transactions = getTransactions();

  return `
FINANCIAL DATA (as of ${new Date().toISOString().split('T')[0]})
================================================================

OVERALL SUMMARY:
- Total Income: $${summary.totalIncome.toFixed(2)}
- Total Expenses: $${summary.totalExpenses.toFixed(2)}
- Net Cashflow: $${summary.net.toFixed(2)}

MONTHLY BREAKDOWN:
${summary.monthly.map(m => `  ${m.month}: Income $${m.income.toFixed(2)} | Expenses $${m.expenses.toFixed(2)} | Net $${m.net.toFixed(2)}`).join('\n')}

SPENDING BY CATEGORY (all time):
${categories.map(c => `  ${c.category}: $${c.total.toFixed(2)} (${c.percentage}%, ${c.count} transactions)`).join('\n')}

SPENDING BY MERCHANT (all time, top 15):
${merchants.slice(0, 15).map(m => `  ${m.merchant} [${m.category}]: $${m.total.toFixed(2)} (${m.count} transactions)`).join('\n')}

RECURRING EXPENSES (appear in 2+ months):
${recurring.map(r => `  ${r.merchant} [${r.category}]: ~$${r.avgAmount.toFixed(2)}/occurrence, ${r.monthsActive} months, total $${r.totalSpent.toFixed(2)}`).join('\n')}

ALL TRANSACTIONS:
${transactions.map(t => `  [${t.date}] ${t.merchant} | ${t.description} | ${t.category} | ${t.account} | $${t.amount >= 0 ? '+' : ''}${t.amount.toFixed(2)}`).join('\n')}
`.trim();
}

// POST /api/chat
router.post('/', async (req, res) => {
  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ error: 'Message is required' });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return res.status(500).json({
      error: 'ANTHROPIC_API_KEY environment variable is not set. Start the server with: ANTHROPIC_API_KEY=your-key npm run server',
    });
  }

  try {
    const client = new Anthropic();
    const context = buildFinancialContext();

    const systemPrompt = `You are a helpful financial assistant for the "Intelligent Investor" personal finance app. You have access to the user's complete transaction history and financial data.

Use the data below to answer questions accurately. Be concise and specific. Always reference actual dollar amounts and dates from the data when relevant. If the user asks about something not covered by the data, let them know.

Format currency as $X,XXX.XX. Keep responses conversational but informative. Use short paragraphs, not long walls of text.

${context}`;

    const messages = [];
    if (history && history.length > 0) {
      messages.push(...history);
    }
    messages.push({ role: 'user', content: message });
    
    const response = await client.messages.create({
      model: 'claude-3-haiku-20240307',
      max_tokens: 1024,
      system: systemPrompt,
      messages,
    });

    const reply = response.content[0].text;

    res.json({ reply });
  } catch (err) {
    console.error('Chat error:', err.message);
    res.status(500).json({ error: 'Failed to generate response. Check your API key and try again.' });
  }
});

module.exports = router;
