import React from 'react'
import NavInfo from './navInfo/NavInfo'
import NavMenu from './navMenu/NavMenu'
import cl from '../../styles/navbar/navbar.module.sass'

const Navbar = () => {
  return (
    <header className={cl.header}>
        <NavInfo></NavInfo>
        <NavMenu></NavMenu>
    </header>
  )
}

export default Navbar