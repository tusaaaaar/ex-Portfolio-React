import React, { useState } from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import '../resources/css/Academics.css';
import { skills } from '../Utils/Constants';
import { Avatar, Tabs, Tab, Box, Typography } from '@mui/material';
import { certificates, educationData } from '../Utils/Constants';
import SchoolIcon from '@mui/icons-material/School';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import userImage from "../resources/images/userImage2.png";

const Academics = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 0:
        return (
          <div className="Education">
            <h3>
              <SchoolIcon style={{ marginRight: '8px' }} />
              Education
            </h3>
            <Timeline position="alternate-reverse">
              {educationData.map((item, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot style={{ backgroundColor: '#e34400' }} />
                    {index < educationData.length - 1 && (
                      <TimelineConnector style={{ backgroundColor: '#e34400', height: '2px' }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <div className="timeline__content">
                      <h4 style={{ marginBottom: '5px' }}>{item.title}</h4>
                      <p style={{ marginTop: '0' }}>{item.institution}</p>
                      <span className="education__duration">{item.duration}</span>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </div>
        );

      case 1: 
        return (
          <div className="Skills">
            <h3>Technical Skills</h3>
            <div className="experience__content">
              {skills.map((skill, index) => (
                <article className="experience__details" key={index}>
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4>{skill.name}</h4>
                </article>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="Certificates">
            <h3>Certifications</h3>
            <ul className="Certificates_list">
              {certificates.map((cert, index) => (
                <li className="education__item" key={index}>
                  <h4>
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      {cert.title}
                    </a>
                  </h4>
                  <p>{cert.provider}</p>
                  <hr />
                </li>
              ))}
            </ul>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="About">
      <div className="about__me">
        <div className="imgcont">
          <div className="img">
            <Avatar
              alt="Tushar"
              src={userImage}
              sx={{
                border: '3px solid #f05811',
                height: '30vh',
                width: '30vh',
              }}
            />
          </div>
          <div className="cont">
            <h1>
              I'm <strong>Tushar Sharma</strong>
            </h1>
            <Typography variant="body1" gutterBottom>
              As a third-year BSc Computer Science student at Sri Sathya Sai Institute of Higher Learning, I have a strong passion for coding, problem-solving, and web application development. My career goal is to excel as a data scientist, leveraging my expertise in front-end development, data analysis, and machine learning.
            </Typography>
            <Typography variant="body1">
              In addition to academics, I actively participate in sports like basketball and handball. As a campus vice-captain, I take pride in leadership and community service.
            </Typography>
          </div>
        </div>
      </div>
      <Box>
        <Tabs value={activeTab} onChange={handleTabChange} aria-label="Academic and Skills Tabs" role="navigation">
          <Tab label="Education" />
          <Tab label="Skills" />
          <Tab label="Certifications" />
        </Tabs>
      </Box>
      <div className="container experience__container">
        {renderTabContent()}
      </div>
    </section>
  );
};

export default Academics;
