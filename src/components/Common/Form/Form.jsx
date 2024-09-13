import React from 'react'
import { StartTrial } from '../StartTrial/StartTrial'
import './Form.scss'
const Form = () => {
  return (
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
                <StartTrial/>
            </div>
                    
        </div>
        <div className='form-below'>
            <p className='form-below-text'>30 Days free trial</p>
            <p className='ellipse'></p>
            <p className='form-below-text'>Upto 10 users</p>
        </div>
    </div>
  )
}

export default Form