import React, { useState } from 'react';
import TransactionRow from './TransactionRow';

function TransactionTable({ transactions }) {
  const [sortConfig, setSortConfig] = useState(null);

  const sortedTransactions = [...transactions];
  if (sortConfig !== null) {
    sortedTransactions.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
  }

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => requestSort('date')}>Date</th>
          <th onClick={() => requestSort('description')}>Description</th>
          <th onClick={() => requestSort('category')}>Category</th>
          <th onClick={() => requestSort('amount')}>Amount</th>
        </tr>
      </thead>
      <tbody>
        {sortedTransactions.map(transaction => (
          <TransactionRow key={transaction.id} transaction={transaction} onDelete={handleDelete} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionTable;
