import React from 'react'
import './Feedback.scss'
import FeedBackCard from './FeedBackCard'
import Image1 from '../../assets/Image1.png'

const Feedback = () => {
  return (
    <div className='feedback-container'>
        <div className='heading'>
            <p className='heading-text'>Our customers love us</p>
        </div>
        <div className='feedbacks'>
            <FeedBackCard 
                text="ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding."
                image={Image1}
                name="Rohit Mehra"
                position="CFO XYZ"
            />
            <FeedBackCard/>
            <FeedBackCard/>
        </div>
    </div>
  )
}

export default Feedback