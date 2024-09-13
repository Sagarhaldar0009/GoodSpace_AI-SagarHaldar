import React from 'react'
import './Feedback.scss'
import FeedBackCard from './FeedBackCard'
import Image1 from '../../assets/Image1.png'
import Image2 from '../../assets/Image2.png'
import Image3 from '../../assets/Image3.png'

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
                bgColor="#365EEE1A"
            />
            <FeedBackCard
              text="ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding."
              image={Image2}
              name="Alan Turing"
              position="CFO XYZ"
              bgColor="#E3F2FA"
            />
            <FeedBackCard
              text="ExpenseBook has truly streamlined our travel setup. No more emails and delays in booking. No mor unknown overruns in expense. Everything is trackable, and the configurability they offer is outstanding."
              image={Image3}
              name="Mark Jacob"
              position="CEO XYZ"
              bgColor="#E4EEFA"
            />
        </div>
    </div>
  )
}

export default Feedback