import React from 'react'
import './Features.scss'
import FeatureCard from './FeatureCard'
import img1 from '../../assets/Features/1.png'
import img2 from '../../assets/Features/2.png'
import img3 from '../../assets/Features/3.png'
import img4 from '../../assets/Features/4.png'
import img5 from '../../assets/Features/5.png'
import img6 from '../../assets/Features/6.png'
import img7 from '../../assets/Features/7.png'
import img8 from '../../assets/Features/8.png'
import img9 from '../../assets/Features/9.png'

const Features = () => {
  return (
    <div className='feature-container'>
        <div className='inner-div'>
            <div className='heading'>
                <p className='heading-text'>
                    Features that suit your needs
                </p>
            </div>
            <div className='all-features'>
                <div className="grid-container">
                    <div className="grid-item">
                        <FeatureCard 
                            image={img1} 
                            title="Setup Employee Group" 
                            desc="Use any parameter to setup distinct employee groups to implement policies"
                        />
                    </div>
                    <div className="grid-item">
                        <FeatureCard 
                            image={img2} 
                            title="The Definitive Rule Engine" 
                            desc="Configure ANY policy - and if you can’t configure it, we promise to work on it for free"
                        />
                    </div>
                    <div className="grid-item">
                        <FeatureCard 
                            image={img3} 
                            title="Customized Reports" 
                            desc="Setup the reports that you want using our seamless reporting engine."
                        />
                    </div>
                    <div className="grid-item">
                        <FeatureCard 
                            image={img4} 
                            title="Superior Employee Experience" 
                            desc="Manage all expenses and travel requests easily. Empower your employees with personalized reports."
                        />
                    </div>
                    <div className="grid-item">
                        <FeatureCard 
                            image={img5} 
                            title="Easy Integrations" 
                            desc="Integrate with your upstream, HRMS or your downstream finance system to seamlessly deliver value through our Open APIs."
                        />
                    </div> 
                    <div className="grid-item">
                        <FeatureCard 
                            image={img6} 
                            title="Configurable Workflows" 
                            desc="Configure approvals or rejections. Escalations and reports. At will. Setup new groups."
                        />
                    </div>
                    <div className="grid-item">
                        <FeatureCard 
                            image={img7} 
                            title="Scan any Bill" 
                            desc="The world’s best OCR system backs up this product. All data goes in. 99% success."
                        />
                    </div>
                    <div className="grid-item">
                        <FeatureCard 
                            image={img8} 
                            title="AI-Based Concierge" 
                            desc="Ask the concierge to change things during your travel - and it will trigger relevant actions 24x7."
                        />
                    </div>
                    <div className="grid-item">
                        <FeatureCard 
                            image={img9} 
                            title="AI-Assisted Trip Planning" 
                            desc="Just tell us what you want to do in normal language and we will try and put together the best itinerary for you."
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className='line-div'>
        </div>
    </div>
  )
}

export default Features