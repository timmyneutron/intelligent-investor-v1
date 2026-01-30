import React, { useState, useEffect } from 'react';

function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterAccount, setFilterAccount] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/transactions').then(r => r.json()),
      fetch('/api/transactions/categories').then(r => r.json()),
    ])
      .then(([txns, cats]) => {
        setTransactions(txns);
        setCategories(cats);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleCategoryChange = (id, newCategory) => {
    fetch(`/api/transactions/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ category: newCategory }),
    })
      .then(r => r.json())
      .then(updated => {
        setTransactions(prev =>
          prev.map(t => (t.id === updated.id ? updated : t))
        );
      });
  };

  const fmt = (n) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);

  const accounts = [...new Set(transactions.map(t => t.account))];

  const filtered = transactions.filter(t => {
    const matchSearch =
      !search ||
      t.description.toLowerCase().includes(search.toLowerCase()) ||
      t.merchant.toLowerCase().includes(search.toLowerCase());
    const matchCategory = !filterCategory || t.category === filterCategory;
    const matchAccount = !filterAccount || t.account === filterAccount;
    return matchSearch && matchCategory && matchAccount;
  });

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div>
      <div className="page-header">
        <h2>Transactions</h2>
        <p>View and categorize all your transactions</p>
      </div>

      <div className="card">
        <div className="controls">
          <input
            type="text"
            placeholder="Search by description or merchant..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          <select
            value={filterCategory}
            onChange={e => setFilterCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map(c => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          <select
            value={filterAccount}
            onChange={e => setFilterAccount(e.target.value)}
          >
            <option value="">All Accounts</option>
            {accounts.map(a => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Account</th>
                <th>Description</th>
                <th>Merchant</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(t => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td>
                    <span className="account-badge">{t.account}</span>
                  </td>
                  <td>{t.description}</td>
                  <td>{t.merchant}</td>
                  <td>
                    <select
                      className="category-select"
                      value={t.category}
                      onChange={e => handleCategoryChange(t.id, e.target.value)}
                    >
                      {categories.map(c => (
                        <option key={c} value={c}>{c}</option>
                      ))}
                    </select>
                  </td>
                  <td className={`amount ${t.amount >= 0 ? 'positive' : 'negative'}`}>
                    {t.amount >= 0 ? '+' : ''}{fmt(t.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p style={{ marginTop: 16, fontSize: '0.8rem', color: '#94a3b8' }}>
          Showing {filtered.length} of {transactions.length} transactions
        </p>
      </div>
    </div>
  );
}

export default TransactionList;
