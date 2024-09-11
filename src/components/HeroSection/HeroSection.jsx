import React from 'react'
import { NavBar } from './Navbar'
import { Banner } from './Banner'

const HeroSection = () => {
  return (
    <div>
        {/* NavBar */}
        <div>
          <NavBar/>
        </div>
        {/* Banner */}
        <div>
            <Banner/>
        </div>
    </div>
  )
}

export default HeroSection