import React from 'react'
import './Banner.scss'
import Form from '../Common/Form/Form'

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
            <Form/>
        </div>
    </>
  )
}