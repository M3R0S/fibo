import React from 'react'
import  cl from '../../assets/styles/footer/footer.module.sass'
import FooterContact from './FooterContact'
import FooterInfo from './FooterInfo'

const FooterApp = () => {
  return (
    <footer>
      <FooterInfo></FooterInfo>
      <FooterContact></FooterContact>
    </footer>
  )
}

export default FooterApp