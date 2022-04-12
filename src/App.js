import React from 'react';
import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';
import MainNav from './components/Layout/MainNav/MainNav';

function App() {
  return (
    <div className='App'>
      <MainNav />
      <Header />
      <Main />
    </div>
  );
}

export default App;
