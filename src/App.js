import React from 'react';
import Header from './components/Layout/Header/Header';
import Main from './components/Layout/Main/Main';
import MainNav from './components/Layout/MainNav/MainNav';
import Footer from './components/Layout/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <MainNav />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
