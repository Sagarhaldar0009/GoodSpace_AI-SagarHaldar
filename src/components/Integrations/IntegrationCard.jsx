import React from 'react'
import './IntegrationCard.scss'

const IntegrationCard = ({image, title, desc}) => {
  return (
    <div className='card-container'>
        <div className='img-title'>
            <img className='icon' src={image}/>
            <div className='title'>{title}</div>
        </div>
        <div className='card-desc'>{desc}</div>
    </div>
  )
}

export default IntegrationCard