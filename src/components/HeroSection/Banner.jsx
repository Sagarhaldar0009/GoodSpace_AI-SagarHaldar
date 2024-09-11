import React from 'react'
import { StartTrial } from '../Common/StartTrial'
import '../../Styling/Banner.scss'

export const Banner = () => {
  return (
    <>
        <div className='heading-container'>
            {/* Heading */}
            <div className='written'>
                <div>
                    <div className='heading-1'>
                        <p className='text'>The World's Most Configurable</p>
                    </div>
                    <div className='heading-2'>Travel & Expense Management Software</div>
                </div>
                {/* para */}
                <p className='desc'>
                    Configure <span className='any'><u>any</u></span> rule. Enable a world class mobile experience for your users. Get seamless reporting & integrations. Inbuilt OCR expense scanning. Manage travel & non-travel expenses. Open APIs to connect with external systems.
                </p>
            </div>
            {/* Form */}
            <div className='form'>
                <div className='inner'>
                    <div className='input-container'>
                        <input
                            className='name'
                            type="text"
                            name="name"
                            placeholder="Name" 
                            style={{ padding: '10px', fontSize: '16px' }} 
                        />
                        <input
                            className='email'
                            type="text"
                            name="email"
                            placeholder="Official Email ID" 
                            style={{ padding: '10px', fontSize: '16px' }} 
                        />
                        <StartTrial />
                    </div>
                    
                </div>
                <div className='form-below'>
                    <p className='form-below-text'>30 Days free trial</p>
                    <p className='ellipse'></p>
                    <p className='form-below-text'>Upto 10 users</p>
                </div>
            </div>
        </div>
    </>
  )
}
