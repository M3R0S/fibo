import React, { FC } from 'react'
import FooterApp from './components/footer/FooterApp';
import Navbar from './components/navbar/Navbar'
import PageApp from './components/pages/PageApp'

const App : FC = () => {
  return (
    <div>
      <Navbar></Navbar>
      <PageApp></PageApp>
      <FooterApp></FooterApp>
    </div>
  );
}

export default App