# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh










Overview
The code consists of several React components that work together to create a functional and interactive bank transactions application. Each component handles a specific part of the user interface and logic.

Components
TransactionTable:

Purpose: Displays a table of bank transactions.
Functionality:
Sorting: Allows sorting transactions by clicking on table headers (Date, Description, Category, Amount). The sorting is controlled by state (sortConfig) to toggle between ascending and descending order.
Deletion: Provides functionality to delete a transaction. This is managed by the handleDelete function, which sends a DELETE request to the backend and updates the state to remove the transaction from the table.
TransactionForm:

Purpose: Provides a form to add new transactions.
Functionality:
Form Handling: Manages form state using useState to keep track of input values.
Submission: On form submission, sends a POST request to the backend to add a new transaction and updates the parent component with the newly added transaction.
SearchBar:

Purpose: Allows users to filter transactions by description.
Functionality: Updates the searchTerm state based on user input. This searchTerm is used to filter the transactions displayed in the TransactionTable.
TransactionRow:

Purpose: Represents a single row in the transactions table.
Functionality: Displays transaction details (date, description, category, amount) and includes a delete button to remove the transaction.
Data Flow
State Management:

Transactions: The TransactionTable component manages the list of transactions and sorting configuration. When a transaction is added or deleted, the state is updated to reflect these changes.
Search Term: The SearchBar component updates the search term, which filters the transactions displayed in the TransactionTable.
Props:

TransactionTable: Receives transactions and addTransaction as props from a parent component. It also passes the handleDelete function to TransactionRow.
TransactionForm: Receives the addTransaction function as a prop to add new transactions to the table.
How It All Works Together
Displaying Transactions: The TransactionTable fetches and displays transactions in a table. It allows users to sort and delete transactions.

Adding Transactions: The TransactionForm allows users to input and submit new transactions, which are then sent to the backend and added to the table.

Filtering Transactions: The SearchBar component filters the transactions shown in the table based on user input.