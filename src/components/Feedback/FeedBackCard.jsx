import React from 'react'
import './FeedBackCard.scss'

const FeedBackCard = ({text, image, name, position}) => {
  return (
    <div className='card-box'>
        <p className='feed'>{text}</p>
        <div className='id'>
            <img src={image} className='image'/>
            <div className='name-pos'>
                <p className='name'>{name}</p>
                <p className='pos'>{position}</p>
            </div>
        </div>
    </div>
  )
}

export default FeedBackCard