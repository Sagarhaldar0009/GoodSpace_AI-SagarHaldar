import React from 'react'
import Logo from '../../assets/Logo.png'
import Location from '../../assets/Location.png'
import Telephone from '../../assets/Telephone.png'
import LinkedIn from '../../assets/LinkedIn.png'
import Youtube from '../../assets/Youtube.png'
import Instagram from '../../assets/Instagram.png'
import './Footer.scss'

const Footer = () => {
  return (
    <div className='container'>
      <div className='footer-UI'>
        <div className='div1'>
          <div className='logo'>
            <div className='image'>
            <img src={Logo} alt="Logo" />
            </div>
            
          </div>
          <div className='information'>
            <div className='info'>
              <div className='Address'>
                <div className='location'>
                  <div className='icon-location'><img src={Location}/></div>
                  <div className='icon-location-text'>Address</div>
                </div>
                <div className='location'>
                  <div className='icon-call'><img src={Telephone}/></div>
                  <div className='icon-call-text'>+91 1234567890</div>
                </div>
              </div>
              <div className='social'>
                <p className='sm-text'>Social Media</p>
                <div className='sm-icon'>
                  <div>
                    <img src={LinkedIn} alt='LinkedIn' /></div>
                  <div><img src={Youtube} alt='Youtube' /></div>
                  <div><img src={Instagram} alt='Instagram' /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='div2'></div>

        <div className='div3'>
          <div className='text'>
            <p className='blogs'>Blogs</p>
            <p className='features'>Features</p>
            <p className='pricing'>Pricing</p>
            <p className='integration'>Integrations</p>
          </div>
          <div className='copyright'>
            <p>Copyright © 2024 • ExpenseBook</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Footer