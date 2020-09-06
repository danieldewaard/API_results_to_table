import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomTable from './users/components/CustomTable.js'
import MaterialTableTest from './users/components/MaterialTableTest.js'
import UsersList from './users/components/UsersList';

function App() {
  return (
    <div className="App">
		<MaterialTableTest />
    </div>
  );
}

export default App;

//<UsersList/>