import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main/Main';
import Home from './components/Main/Home/Home';

function App() {
  return (
    <div className='container mx-auto max-w-[1340px]'>
      <Header />
      <Main>
        <Home />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
