const express = require('express');
const cors = require('cors');
const cashflowRoutes = require('./routes/cashflow');
const expensesRoutes = require('./routes/expenses');
const transactionsRoutes = require('./routes/transactions');
const mcpRoutes = require('./routes/mcp');
const chatRoutes = require('./routes/chat');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/cashflow', cashflowRoutes);
app.use('/api/expenses', expensesRoutes);
app.use('/api/transactions', transactionsRoutes);
app.use('/api/mcp', mcpRoutes);
app.use('/api/chat', chatRoutes);

app.listen(PORT, () => {
  console.log(`Intelligent Investor API running on port ${PORT}`);
});
