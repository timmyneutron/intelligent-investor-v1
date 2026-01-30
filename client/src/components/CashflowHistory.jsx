import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from 'recharts';

function CashflowHistory() {
  const [history, setHistory] = useState([]);
  const [period, setPeriod] = useState('month');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/cashflow/history?period=${period}`)
      .then(r => r.json())
      .then(data => {
        setHistory(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [period]);

  const fmt = (n) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(n);

  const formatLabel = (dateStr) => {
    if (period === 'month') {
      const [year, month] = dateStr.split('-');
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      return `${months[parseInt(month) - 1]} ${year}`;
    }
    return dateStr;
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload) return null;
    return (
      <div style={{
        background: '#fff',
        border: '1px solid #e2e8f0',
        borderRadius: 8,
        padding: '12px 16px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.07)',
      }}>
        <p style={{ fontWeight: 600, marginBottom: 8 }}>{formatLabel(label)}</p>
        {payload.map((entry, i) => (
          <p key={i} style={{ color: entry.color, fontSize: '0.85rem', margin: '4px 0' }}>
            {entry.name}: {fmt(entry.value)}
          </p>
        ))}
      </div>
    );
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div>
      <div className="page-header">
        <h2>Cashflow History</h2>
        <p>Track your income and expenses over time</p>
      </div>

      <div className="card">
        <div className="controls">
          <div className="toggle-group">
            <button
              className={period === 'month' ? 'active' : ''}
              onClick={() => setPeriod('month')}
            >
              Monthly
            </button>
            <button
              className={period === 'day' ? 'active' : ''}
              onClick={() => setPeriod('day')}
            >
              Daily
            </button>
          </div>
        </div>

        <div className="chart-container">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={history} margin={{ top: 10, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis
                dataKey="date"
                tickFormatter={formatLabel}
                tick={{ fontSize: 12, fill: '#64748b' }}
                axisLine={{ stroke: '#e2e8f0' }}
              />
              <YAxis
                tickFormatter={(v) => `$${(v / 1000).toFixed(1)}k`}
                tick={{ fontSize: 12, fill: '#64748b' }}
                axisLine={{ stroke: '#e2e8f0' }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <ReferenceLine y={0} stroke="#94a3b8" strokeDasharray="3 3" />
              <Bar dataKey="income" fill="#059669" name="Income" radius={[4, 4, 0, 0]} />
              <Bar dataKey="expenses" fill="#dc2626" name="Expenses" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h3>Net Cashflow by {period === 'month' ? 'Month' : 'Day'}</h3>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>{period === 'month' ? 'Month' : 'Date'}</th>
                <th>Income</th>
                <th>Expenses</th>
                <th>Net</th>
              </tr>
            </thead>
            <tbody>
              {history.map(h => (
                <tr key={h.date}>
                  <td>{formatLabel(h.date)}</td>
                  <td className="amount positive">{fmt(h.income)}</td>
                  <td className="amount negative">{fmt(h.expenses)}</td>
                  <td className={`amount ${h.net >= 0 ? 'positive' : 'negative'}`}>
                    {h.net >= 0 ? '+' : ''}{fmt(h.net)}
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

export default CashflowHistory;
