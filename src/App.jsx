import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import TransactionForm from './components/TransactionForm';
import TransactionTable from './components/TransactionTable';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/transactions')
      .then(response => response.json())
      .then(data => setTransactions(data));
  }, []);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
    <header>Bank of Flatiron</header>
    <aside className="sidebar">
      <TransactionForm addTransaction={addTransaction} />
    </aside>
    <main className="content">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TransactionTable transactions={filteredTransactions} />
    </main>
  </div>
  );
}

export default App;
