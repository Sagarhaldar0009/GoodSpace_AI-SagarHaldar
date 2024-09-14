import React from 'react';
import './FeatureCard.scss';

const FeatureCard = ({image, title, desc}) => {
  return (
    <div className='feature-card-container'>
      <div className='inner'>
        <div className='pic-name'>
            <img src={image} className="image-container"/>
            <div className='name'>{title}</div>
        </div>
        <div className='feature-desc'>
            {desc}
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
