import React from 'react';
import Emaillist from './Emaillist';
import Header from './Header';
import Sidebar from './Sidebar';
// import './css/index.css';
import './index.css';
import Compose from './Compose';
import { useSelector } from 'react-redux';
import { selectsendMessageIsOpen } from './features/mailSlice';

function App() {
  const isMessageOpen = useSelector(selectsendMessageIsOpen);

  return (
    <div className="App">
      <Header />

      <div className="app__body">
        <Sidebar />
        <Emaillist />
      </div>
      {
        isMessageOpen && <Compose />
      }

      
    </div>
  );
}

export default App;
