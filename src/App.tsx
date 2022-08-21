import React, { FC } from 'react'
import Navbar from './components/navbar/Navbar'
import PageApp from './components/pages/PageApp'

const App : FC = () => {
  return (
    <div>
      <Navbar></Navbar>
      <PageApp></PageApp>
    </div>
  );
}

export default App