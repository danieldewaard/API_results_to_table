import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomTable from './users/components/CustomTable.js'
import UsersList from './users/components/UsersList';

function App() {
  return (
    <div className="App">
		<CustomTable />
		<UsersList/>
    </div>
  );
}

export default App;
