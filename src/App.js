import React from 'react';
import Emaillist from './Emaillist';
// import Header from './Header';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}

      <div className="app__body">
        <Sidebar />
        <Emaillist />
      </div>
    </div>
  );
}

export default App;
