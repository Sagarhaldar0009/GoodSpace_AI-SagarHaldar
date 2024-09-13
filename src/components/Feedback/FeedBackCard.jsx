import React from 'react'
import './FeedBackCard.scss'

const FeedBackCard = ({text, image, name, position, bgColor}) => {
  return (
    <div className='card-box' style={{backgroundColor:bgColor}}>
        <p className='feed'>{text}</p>
        <div className='id'>
            <img src={image} className='image'/>
            <div className='name-pos'>
                <div className='name'>{name}</div>
                <div className='pos'>{position}</div>
            </div>
        </div>
    </div>
  )
}

export default FeedBackCard