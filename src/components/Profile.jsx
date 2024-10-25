
import React from 'react';
import { SOCIAL_PROFILES } from '../Utils/Constants';
import { Primary } from '../Utils/Constants';
import '../resources/css/profile.css';
import { Link } from 'react-router-dom';

import "../resources/css/shared.css"
function Profile() {
    return (
        <div className="contact-container">
        <h1 className="contact-heading"><strong>Get in  <span style={{ color: '#f05811' }}>Touch..</span></strong></h1>
                

        <div className="primary-contacts">
                <h3>Primary:</h3>
                <div className="primary-icons">
                    {Primary.map((contact, index) => (
                        <Link className='primary-links' target='_blank' to={contact.link} key={index}>
                            <div className="primary-profile">
                                <div className="primary-icon">{contact.icon}</div>
                                {/* <div className="title">{contact.title}</div> */}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        <div className="social-heading">
            <h3 >Social:</h3>
            <div className="social-icons">
                {SOCIAL_PROFILES.map((data, index) => (
                    <Link className='social-links' target='_blank' to={data.link} key={index}>
                        <div className="profile">
                            <div className="social-icon">{data.icon}</div>
                            {/* <div className="title">{data.title}</div> */}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
        </div>
    );
}

export default Profile;
