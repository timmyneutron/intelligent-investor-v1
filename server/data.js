const transactions = [
  // November 2025
  { id: 1, date: '2025-11-01', account: 'Checking', description: 'Direct deposit - biweekly payroll', merchant: 'Acme Corp', amount: 2250.00, category: 'Salary' },
  { id: 2, date: '2025-11-01', account: 'Checking', description: 'Monthly rent payment', merchant: 'Greenfield Apartments', amount: -1800.00, category: 'Housing' },
  { id: 3, date: '2025-11-02', account: 'Credit Card', description: 'Weekly grocery run', merchant: 'Whole Foods', amount: -143.67, category: 'Groceries' },
  { id: 4, date: '2025-11-03', account: 'Credit Card', description: 'Fill up gas tank', merchant: 'Shell', amount: -48.52, category: 'Transportation' },
  { id: 5, date: '2025-11-04', account: 'Credit Card', description: 'Monthly streaming subscription', merchant: 'Netflix', amount: -15.99, category: 'Subscriptions' },
  { id: 6, date: '2025-11-05', account: 'Credit Card', description: 'Lunch', merchant: 'Chipotle', amount: -12.85, category: 'Dining' },
  { id: 7, date: '2025-11-07', account: 'Credit Card', description: 'Household supplies', merchant: 'Amazon', amount: -67.43, category: 'Shopping' },
  { id: 8, date: '2025-11-08', account: 'Credit Card', description: 'Groceries for the week', merchant: "Trader Joe's", amount: -89.21, category: 'Groceries' },
  { id: 9, date: '2025-11-09', account: 'Checking', description: 'Monthly electric bill', merchant: 'City Power & Light', amount: -112.34, category: 'Utilities' },
  { id: 10, date: '2025-11-10', account: 'Credit Card', description: 'Ride to airport', merchant: 'Uber', amount: -23.45, category: 'Transportation' },
  { id: 11, date: '2025-11-11', account: 'Credit Card', description: 'Music streaming', merchant: 'Spotify', amount: -9.99, category: 'Subscriptions' },
  { id: 12, date: '2025-11-12', account: 'Checking', description: 'Monthly gym membership', merchant: 'Planet Fitness', amount: -49.99, category: 'Health' },
  { id: 13, date: '2025-11-13', account: 'Credit Card', description: 'Clothes and toiletries', merchant: 'Target', amount: -54.32, category: 'Shopping' },
  { id: 14, date: '2025-11-14', account: 'Credit Card', description: 'Morning coffee', merchant: 'Starbucks', amount: -6.75, category: 'Dining' },
  { id: 15, date: '2025-11-15', account: 'Checking', description: 'Direct deposit - biweekly payroll', merchant: 'Acme Corp', amount: 2250.00, category: 'Salary' },
  { id: 16, date: '2025-11-15', account: 'Checking', description: 'Monthly internet service', merchant: 'Comcast', amount: -79.99, category: 'Utilities' },
  { id: 17, date: '2025-11-16', account: 'Credit Card', description: 'Weekend grocery shopping', merchant: 'Whole Foods', amount: -98.43, category: 'Groceries' },
  { id: 18, date: '2025-11-17', account: 'Credit Card', description: 'Dinner out', merchant: 'Thai Palace', amount: -42.50, category: 'Dining' },
  { id: 19, date: '2025-11-18', account: 'Credit Card', description: 'Cold medicine and vitamins', merchant: 'CVS Pharmacy', amount: -28.67, category: 'Health' },
  { id: 20, date: '2025-11-19', account: 'Credit Card', description: 'Gas fill-up', merchant: 'Shell', amount: -52.18, category: 'Transportation' },
  { id: 21, date: '2025-11-20', account: 'Checking', description: 'Monthly phone bill', merchant: 'T-Mobile', amount: -85.00, category: 'Utilities' },
  { id: 22, date: '2025-11-21', account: 'Credit Card', description: 'Movie night with friends', merchant: 'AMC Theaters', amount: -32.00, category: 'Entertainment' },
  { id: 23, date: '2025-11-22', account: 'Credit Card', description: 'Groceries', merchant: 'Safeway', amount: -76.89, category: 'Groceries' },
  { id: 24, date: '2025-11-24', account: 'Credit Card', description: 'New headphones', merchant: 'Amazon', amount: -129.99, category: 'Shopping' },
  { id: 25, date: '2025-11-25', account: 'Credit Card', description: 'Thanksgiving dinner out', merchant: 'Olive Garden', amount: -65.43, category: 'Dining' },
  { id: 26, date: '2025-11-28', account: 'Checking', description: 'Freelance web development project', merchant: 'Client - Johnson LLC', amount: 1200.00, category: 'Freelance' },

  // December 2025
  { id: 27, date: '2025-12-01', account: 'Checking', description: 'Direct deposit - biweekly payroll', merchant: 'Acme Corp', amount: 2250.00, category: 'Salary' },
  { id: 28, date: '2025-12-01', account: 'Checking', description: 'Monthly rent payment', merchant: 'Greenfield Apartments', amount: -1800.00, category: 'Housing' },
  { id: 29, date: '2025-12-02', account: 'Credit Card', description: 'Weekly grocery run', merchant: 'Whole Foods', amount: -167.89, category: 'Groceries' },
  { id: 30, date: '2025-12-03', account: 'Credit Card', description: 'Gas fill-up', merchant: 'Shell', amount: -44.31, category: 'Transportation' },
  { id: 31, date: '2025-12-04', account: 'Credit Card', description: 'Monthly streaming subscription', merchant: 'Netflix', amount: -15.99, category: 'Subscriptions' },
  { id: 32, date: '2025-12-05', account: 'Credit Card', description: 'Dinner with colleagues', merchant: 'Sushi Zen', amount: -78.50, category: 'Dining' },
  { id: 33, date: '2025-12-06', account: 'Credit Card', description: 'Holiday gifts', merchant: 'Amazon', amount: -234.56, category: 'Shopping' },
  { id: 34, date: '2025-12-07', account: 'Credit Card', description: 'Groceries and snacks', merchant: "Trader Joe's", amount: -112.33, category: 'Groceries' },
  { id: 35, date: '2025-12-08', account: 'Checking', description: 'Monthly electric bill', merchant: 'City Power & Light', amount: -128.67, category: 'Utilities' },
  { id: 36, date: '2025-12-09', account: 'Credit Card', description: 'New bluetooth speaker', merchant: 'Best Buy', amount: -189.99, category: 'Shopping' },
  { id: 37, date: '2025-12-10', account: 'Credit Card', description: 'Delivery dinner', merchant: 'Uber Eats', amount: -34.21, category: 'Dining' },
  { id: 38, date: '2025-12-11', account: 'Credit Card', description: 'Music streaming', merchant: 'Spotify', amount: -9.99, category: 'Subscriptions' },
  { id: 39, date: '2025-12-12', account: 'Checking', description: 'Monthly gym membership', merchant: 'Planet Fitness', amount: -49.99, category: 'Health' },
  { id: 40, date: '2025-12-13', account: 'Credit Card', description: 'Winter jacket', merchant: 'Nordstrom', amount: -156.78, category: 'Shopping' },
  { id: 41, date: '2025-12-14', account: 'Credit Card', description: 'Coffee and pastry', merchant: 'Starbucks', amount: -8.25, category: 'Dining' },
  { id: 42, date: '2025-12-15', account: 'Checking', description: 'Direct deposit - biweekly payroll', merchant: 'Acme Corp', amount: 2250.00, category: 'Salary' },
  { id: 43, date: '2025-12-15', account: 'Checking', description: 'Monthly internet service', merchant: 'Comcast', amount: -79.99, category: 'Utilities' },
  { id: 44, date: '2025-12-16', account: 'Credit Card', description: 'Bulk grocery shopping', merchant: 'Costco', amount: -198.43, category: 'Groceries' },
  { id: 45, date: '2025-12-17', account: 'Savings', description: 'Quarterly dividend payout', merchant: 'Vanguard', amount: 156.78, category: 'Investment' },
  { id: 46, date: '2025-12-18', account: 'Credit Card', description: 'Holiday dinner out', merchant: 'Italian Bistro', amount: -56.90, category: 'Dining' },
  { id: 47, date: '2025-12-19', account: 'Credit Card', description: 'Prescription refill', merchant: 'CVS Pharmacy', amount: -42.15, category: 'Health' },
  { id: 48, date: '2025-12-20', account: 'Checking', description: 'Monthly phone bill', merchant: 'T-Mobile', amount: -85.00, category: 'Utilities' },
  { id: 49, date: '2025-12-21', account: 'Credit Card', description: 'Gas fill-up', merchant: 'Shell', amount: -39.87, category: 'Transportation' },
  { id: 50, date: '2025-12-22', account: 'Credit Card', description: 'Last-minute gifts', merchant: 'Target', amount: -87.65, category: 'Shopping' },
  { id: 51, date: '2025-12-23', account: 'Credit Card', description: 'Holiday party groceries', merchant: 'Whole Foods', amount: -145.23, category: 'Groceries' },
  { id: 52, date: '2025-12-24', account: 'Credit Card', description: 'Gift wrapping supplies and gifts', merchant: 'Amazon', amount: -178.90, category: 'Shopping' },
  { id: 53, date: '2025-12-26', account: 'Credit Card', description: 'Post-holiday road trip gas', merchant: 'Shell', amount: -51.23, category: 'Transportation' },
  { id: 54, date: '2025-12-28', account: 'Credit Card', description: 'Movie outing', merchant: 'AMC Theaters', amount: -28.00, category: 'Entertainment' },
  { id: 55, date: '2025-12-30', account: 'Credit Card', description: 'Groceries', merchant: 'Safeway', amount: -92.11, category: 'Groceries' },

  // January 2026
  { id: 56, date: '2026-01-01', account: 'Checking', description: 'Direct deposit - biweekly payroll', merchant: 'Acme Corp', amount: 2250.00, category: 'Salary' },
  { id: 57, date: '2026-01-01', account: 'Checking', description: 'Monthly rent payment', merchant: 'Greenfield Apartments', amount: -1800.00, category: 'Housing' },
  { id: 58, date: '2026-01-02', account: 'Credit Card', description: 'New year grocery haul', merchant: 'Whole Foods', amount: -134.56, category: 'Groceries' },
  { id: 59, date: '2026-01-03', account: 'Credit Card', description: 'Gas fill-up', merchant: 'Shell', amount: -46.78, category: 'Transportation' },
  { id: 60, date: '2026-01-04', account: 'Credit Card', description: 'Monthly streaming subscription', merchant: 'Netflix', amount: -15.99, category: 'Subscriptions' },
  { id: 61, date: '2026-01-05', account: 'Credit Card', description: 'Quick lunch', merchant: 'Panda Express', amount: -18.95, category: 'Dining' },
  { id: 62, date: '2026-01-06', account: 'Credit Card', description: 'Phone case and screen protector', merchant: 'Amazon', amount: -45.67, category: 'Shopping' },
  { id: 63, date: '2026-01-07', account: 'Credit Card', description: 'Groceries for the week', merchant: "Trader Joe's", amount: -95.43, category: 'Groceries' },
  { id: 64, date: '2026-01-08', account: 'Checking', description: 'Monthly electric bill', merchant: 'City Power & Light', amount: -105.23, category: 'Utilities' },
  { id: 65, date: '2026-01-09', account: 'Credit Card', description: 'Ride to downtown', merchant: 'Uber', amount: -19.87, category: 'Transportation' },
  { id: 66, date: '2026-01-10', account: 'Checking', description: 'Monthly gym membership', merchant: 'Planet Fitness', amount: -49.99, category: 'Health' },
  { id: 67, date: '2026-01-11', account: 'Credit Card', description: 'Music streaming', merchant: 'Spotify', amount: -9.99, category: 'Subscriptions' },
  { id: 68, date: '2026-01-12', account: 'Credit Card', description: 'Morning coffee', merchant: 'Starbucks', amount: -5.50, category: 'Dining' },
  { id: 69, date: '2026-01-13', account: 'Credit Card', description: 'Annual checkup copay', merchant: 'City Medical Center', amount: -35.00, category: 'Health' },
  { id: 70, date: '2026-01-14', account: 'Credit Card', description: 'Allergy medication', merchant: 'Walgreens', amount: -22.45, category: 'Health' },
  { id: 71, date: '2026-01-15', account: 'Checking', description: 'Direct deposit - biweekly payroll', merchant: 'Acme Corp', amount: 2250.00, category: 'Salary' },
  { id: 72, date: '2026-01-15', account: 'Checking', description: 'Monthly internet service', merchant: 'Comcast', amount: -79.99, category: 'Utilities' },
  { id: 73, date: '2026-01-16', account: 'Credit Card', description: 'Weekend grocery shopping', merchant: 'Whole Foods', amount: -118.90, category: 'Groceries' },
  { id: 74, date: '2026-01-17', account: 'Credit Card', description: 'Date night dinner', merchant: 'Sakura Sushi', amount: -52.30, category: 'Dining' },
  { id: 75, date: '2026-01-18', account: 'Credit Card', description: 'Gas fill-up', merchant: 'Shell', amount: -43.21, category: 'Transportation' },
  { id: 76, date: '2026-01-19', account: 'Credit Card', description: 'Home essentials', merchant: 'Target', amount: -63.45, category: 'Shopping' },
  { id: 77, date: '2026-01-20', account: 'Checking', description: 'Monthly phone bill', merchant: 'T-Mobile', amount: -85.00, category: 'Utilities' },
  { id: 78, date: '2026-01-21', account: 'Checking', description: 'Freelance design project', merchant: 'Client - Smith & Co', amount: 950.00, category: 'Freelance' },
  { id: 79, date: '2026-01-22', account: 'Credit Card', description: 'Matinee movie', merchant: 'AMC Theaters', amount: -15.00, category: 'Entertainment' },
  { id: 80, date: '2026-01-23', account: 'Credit Card', description: 'Groceries', merchant: 'Safeway', amount: -82.34, category: 'Groceries' },
  { id: 81, date: '2026-01-25', account: 'Credit Card', description: 'New novel and planner', merchant: 'Barnes & Noble', amount: -34.99, category: 'Shopping' },
  { id: 82, date: '2026-01-27', account: 'Credit Card', description: 'Delivery dinner', merchant: 'Uber Eats', amount: -29.45, category: 'Dining' },
];

const CATEGORIES = [
  'Salary', 'Freelance', 'Investment',
  'Housing', 'Groceries', 'Dining', 'Transportation',
  'Utilities', 'Shopping', 'Health', 'Entertainment',
  'Subscriptions', 'Education', 'Personal Care'
];

function getTransactions() {
  return [...transactions].sort((a, b) => b.date.localeCompare(a.date) || b.id - a.id);
}

function updateTransaction(id, updates) {
  const index = transactions.findIndex(t => t.id === id);
  if (index === -1) return null;
  const allowed = ['category', 'description'];
  allowed.forEach(key => {
    if (updates[key] !== undefined) {
      transactions[index][key] = updates[key];
    }
  });
  return transactions[index];
}

function round(n) {
  return Math.round(n * 100) / 100;
}

function getSpendingByCategory(startDate, endDate) {
  const txns = transactions.filter(t => {
    if (t.amount >= 0) return false;
    if (startDate && t.date < startDate) return false;
    if (endDate && t.date > endDate) return false;
    return true;
  });

  const categories = {};
  txns.forEach(t => {
    if (!categories[t.category]) categories[t.category] = { total: 0, count: 0 };
    categories[t.category].total += Math.abs(t.amount);
    categories[t.category].count += 1;
  });

  const totalExpenses = Object.values(categories).reduce((sum, c) => sum + c.total, 0);

  return Object.entries(categories)
    .map(([category, data]) => ({
      category,
      total: round(data.total),
      count: data.count,
      percentage: round((data.total / totalExpenses) * 100),
    }))
    .sort((a, b) => b.total - a.total);
}

function getSpendingByMerchant(startDate, endDate) {
  const txns = transactions.filter(t => {
    if (t.amount >= 0) return false;
    if (startDate && t.date < startDate) return false;
    if (endDate && t.date > endDate) return false;
    return true;
  });

  const merchants = {};
  txns.forEach(t => {
    if (!merchants[t.merchant]) merchants[t.merchant] = { total: 0, count: 0, category: t.category };
    merchants[t.merchant].total += Math.abs(t.amount);
    merchants[t.merchant].count += 1;
  });

  return Object.entries(merchants)
    .map(([merchant, data]) => ({
      merchant,
      category: data.category,
      total: round(data.total),
      count: data.count,
    }))
    .sort((a, b) => b.total - a.total);
}

function getRecurringExpenses() {
  const txns = transactions.filter(t => t.amount < 0);
  const merchantMonths = {};

  txns.forEach(t => {
    const month = t.date.substring(0, 7);
    if (!merchantMonths[t.merchant]) merchantMonths[t.merchant] = { months: new Set(), category: t.category, amounts: [] };
    merchantMonths[t.merchant].months.add(month);
    merchantMonths[t.merchant].amounts.push(Math.abs(t.amount));
  });

  return Object.entries(merchantMonths)
    .filter(([, data]) => data.months.size >= 2)
    .map(([merchant, data]) => ({
      merchant,
      category: data.category,
      monthsActive: data.months.size,
      avgAmount: round(data.amounts.reduce((s, a) => s + a, 0) / data.amounts.length),
      totalSpent: round(data.amounts.reduce((s, a) => s + a, 0)),
    }))
    .sort((a, b) => b.totalSpent - a.totalSpent);
}

function getFinancialSummary() {
  const txns = transactions;
  const income = txns.filter(t => t.amount > 0).reduce((s, t) => s + t.amount, 0);
  const expenses = txns.filter(t => t.amount < 0).reduce((s, t) => s + Math.abs(t.amount), 0);

  const monthly = {};
  txns.forEach(t => {
    const month = t.date.substring(0, 7);
    if (!monthly[month]) monthly[month] = { income: 0, expenses: 0 };
    if (t.amount > 0) monthly[month].income += t.amount;
    else monthly[month].expenses += Math.abs(t.amount);
  });

  return {
    totalIncome: round(income),
    totalExpenses: round(expenses),
    net: round(income - expenses),
    monthly: Object.entries(monthly)
      .map(([month, data]) => ({
        month,
        income: round(data.income),
        expenses: round(data.expenses),
        net: round(data.income - data.expenses),
      }))
      .sort((a, b) => a.month.localeCompare(b.month)),
  };
}

function searchTransactions(query) {
  const q = query.toLowerCase();
  return getTransactions().filter(t =>
    t.description.toLowerCase().includes(q) ||
    t.merchant.toLowerCase().includes(q) ||
    t.category.toLowerCase().includes(q)
  );
}

module.exports = {
  getTransactions,
  updateTransaction,
  CATEGORIES,
  getSpendingByCategory,
  getSpendingByMerchant,
  getRecurringExpenses,
  getFinancialSummary,
  searchTransactions,
};
