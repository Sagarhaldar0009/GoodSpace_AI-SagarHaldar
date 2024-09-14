import React from 'react'
import './Integration.scss';
import flowchart from '../../assets/Integration/Divider.png';
import hrms from '../../assets/Integration/HRMS.png';
import sso from '../../assets/Integration/Single.png';
import finance from '../../assets/Integration/Finance.png';
import IntegrationCard from './IntegrationCard';

const Integration = () => {
  return (
    <div className='integration-div'>
        <div className='heading'>
            <div className='text'>Integrations</div>
        </div>
        <div className='divider'>
            <img src={flowchart} />
        </div>
        <div className='grid-box'>
            <div className='grid-item'>
                <IntegrationCard
                    image={hrms}
                    title="HRMS Systems"
                    desc="We can integrate with any HRMS as long as the employee master can be made available to us over SFTP/API.

                        We are already deeply integrated with PeopleStrong and others are coming up."
                />
            </div>
            <div className='grid-item'>
                <IntegrationCard
                    image={sso}
                    title="Finance Systems"
                    desc="Connect us with your finance systems to get all cost centers mapped, and all data reconciled on a periodic/regular basis.

                        Open APIs available to connect."
                />
            </div>
            <div className='grid-item'>
                <IntegrationCard
                    image={finance}
                    title="Single Sign-on Systems"
                    desc="We can integrate to ensure that your users don’t have to log in multiple times into different logins. SSO is possible with any system that offers it."
                />
            </div>
        </div>
    </div>
  )
}

export default Integration