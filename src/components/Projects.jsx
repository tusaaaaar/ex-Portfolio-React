// Project.jsx
import React, { useEffect, useState } from 'react';
import '../resources/css/Project.css';
import { PROJECTS_DETAILS } from '../Utils/Constants';

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Set project data from constants
    setProjects(PROJECTS_DETAILS);
  }, []);

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectPage;

// export default Project;

// import React from 'react';
// import { Grid,Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

// import { PROJECTS_DETAILS } from '../Utils/Constants';

// const ProjectPage = () => {
//     return (
//         <div style={{ padding: '20px' }}>
//             <Typography variant="h4" component="h1" align="center" gutterBottom>
//                 My Projects
//             </Typography>
//             <Grid container spacing={4}>
//                 {PROJECTS_DETAILS.map((project, index) => (
//                     <Grid item xs={12} sm={6} md={4} key={index}>
//                         <ProjectCard project={project} />
//                     </Grid>
//                 ))}
//             </Grid>
//         </div>
//     );
// };

// // ProjectCard component defined within ProjectPage
// const ProjectCard = ({ project }) => {
//     const { title, description, image, link } = project;

//     return (
//         <Card sx={{ maxWidth: 345 }}>
//             <CardMedia
//                 component="img"
//                 height="140"
//                 image={image}
//                 alt={title}
//             />
//             <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                     {title}
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                     {description}
//                 </Typography>
//             </CardContent>
//             <Button size="small" color="primary" href={link} target="_blank">
//                 View Project
//             </Button>
//         </Card>
//     );
// };

// export default ProjectPage;
