import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import CashflowHistory from './components/CashflowHistory';
import CategoryBreakdown from './components/CategoryBreakdown';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <div className="logo">
          <h1>Intelligent Investor</h1>
        </div>
        <nav>
          <NavLink to="/" end>
            <span className="nav-icon">&#9632;</span>
            Dashboard
          </NavLink>
          <NavLink to="/transactions">
            <span className="nav-icon">&#9776;</span>
            Transactions
          </NavLink>
          <NavLink to="/cashflow">
            <span className="nav-icon">&#9650;</span>
            Cashflow History
          </NavLink>
          <NavLink to="/categories">
            <span className="nav-icon">&#9673;</span>
            Categories
          </NavLink>
        </nav>
      </aside>
      <main className="content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/transactions" element={<TransactionList />} />
          <Route path="/cashflow" element={<CashflowHistory />} />
          <Route path="/categories" element={<CategoryBreakdown />} />
        </Routes>
      </main>
      <Chatbot />
    </div>
  );
}

export default App;
