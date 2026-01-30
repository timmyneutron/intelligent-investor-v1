import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  const [cashflow, setCashflow] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch('/api/cashflow').then(r => r.json()),
      fetch('/api/transactions').then(r => r.json()),
    ])
      .then(([cf, txns]) => {
        setCashflow(cf);
        setTransactions(txns.slice(0, 10));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const fmt = (n) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div>
      <div className="page-header">
        <h2>Dashboard</h2>
        <p>Overview of your financial health</p>
      </div>

      <div className="summary-cards">
        <div className="summary-card">
          <div className="label">Total Income</div>
          <div className="value income">{fmt(cashflow.income)}</div>
        </div>
        <div className="summary-card">
          <div className="label">Total Expenses</div>
          <div className="value expenses">{fmt(cashflow.expenses)}</div>
        </div>
        <div className="summary-card">
          <div className="label">Net Cashflow</div>
          <div className={`value ${cashflow.net >= 0 ? 'net-positive' : 'net-negative'}`}>
            {fmt(cashflow.net)}
          </div>
        </div>
      </div>

      <div className="card">
        <div className="section-header">
          <h3>Recent Transactions</h3>
          <Link to="/transactions" className="view-all-link">
            View all
          </Link>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Merchant</th>
                <th>Category</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(t => (
                <tr key={t.id}>
                  <td>{t.date}</td>
                  <td>{t.description}</td>
                  <td>{t.merchant}</td>
                  <td>
                    <span className="category-badge">{t.category}</span>
                  </td>
                  <td className={`amount ${t.amount >= 0 ? 'positive' : 'negative'}`}>
                    {t.amount >= 0 ? '+' : ''}{fmt(t.amount)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
