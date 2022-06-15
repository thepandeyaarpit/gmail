import React from 'react';
import Emaillist from './Emaillist';
import Header from './Header';
import Sidebar from './Sidebar';
// import './css/index.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Emaillist />
      </div>
    </div>
  );
}

export default App;
