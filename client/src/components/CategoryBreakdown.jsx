import React, { useState, useEffect } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const COLORS = [
  '#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6',
  '#ec4899', '#06b6d4', '#f97316', '#6366f1', '#14b8a6',
  '#84cc16', '#a855f7',
];

function CategoryBreakdown() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/expenses/category')
      .then(r => r.json())
      .then(data => {
        setCategories(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const fmt = (n) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);

  const totalExpenses = categories.reduce((sum, c) => sum + c.total, 0);

  const CustomTooltip = ({ active, payload }) => {
    if (!active || !payload || !payload.length) return null;
    const data = payload[0].payload;
    return (
      <div style={{
        background: '#fff',
        border: '1px solid #e2e8f0',
        borderRadius: 8,
        padding: '12px 16px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
      }}>
        <p style={{ fontWeight: 600, marginBottom: 4 }}>{data.category}</p>
        <p style={{ fontSize: '0.85rem', color: '#64748b' }}>
          {fmt(data.total)} ({data.percentage}%)
        </p>
        <p style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
          {data.count} transaction{data.count !== 1 ? 's' : ''}
        </p>
      </div>
    );
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div>
      <div className="page-header">
        <h2>Expense Categories</h2>
        <p>See where your money is going</p>
      </div>

      <div className="two-columns">
        <div className="card">
          <h3>Spending Distribution</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categories}
                  dataKey="total"
                  nameKey="category"
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={140}
                  paddingAngle={2}
                  label={({ category, percentage }) => `${category} ${percentage}%`}
                  labelLine={true}
                >
                  {categories.map((_, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card">
          <h3>Category Details</h3>
          <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: 20, marginTop: -8 }}>
            Total expenses: {fmt(totalExpenses)}
          </p>
          <div className="category-list">
            {categories.map((cat, i) => (
              <div className="category-item" key={cat.category}>
                <div
                  className="category-color"
                  style={{ backgroundColor: COLORS[i % COLORS.length] }}
                />
                <div className="category-info">
                  <div className="category-name">{cat.category}</div>
                  <div className="category-bar-bg">
                    <div
                      className="category-bar-fill"
                      style={{
                        width: `${cat.percentage}%`,
                        backgroundColor: COLORS[i % COLORS.length],
                      }}
                    />
                  </div>
                </div>
                <div className="category-amount">{fmt(cat.total)}</div>
                <div className="category-pct">{cat.percentage}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryBreakdown;
