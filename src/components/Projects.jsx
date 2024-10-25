// import React from 'react';
// import { Grid, Paper, Typography, Button } from '@mui/material';
// import { PROJECTS_DETAILS } from "../Utils/Constants";
// import "../resources/css/Project.css";

// function Projects() {
//   return (
//     <section className="projects-section">
//       <Typography variant="h4" align="center" gutterBottom className="projects-title">
//         My Projects
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         {PROJECTS_DETAILS.map((project, index) => (
//           <Grid item xs={12} sm={6} md={4} key={index}>
//             <Paper elevation={3} className="project-item">
//               <div className="project-image-wrapper">
//                 <img
//                   src={project.media}
//                   alt={project.name}
//                   className="project-image"
//                 />
//               </div>
//               <div className="project-info">
//                 <Typography variant="h5" className="project-name">
//                   {project.name}
//                 </Typography>
//                 <Typography variant="body2" className="project-description">
//                   {project.description}
//                 </Typography>
//                 <Button
//                   variant="contained"
//                   color="primary"
//                   className="project-button"
//                   href={project.url}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   Visit
//                 </Button>
//               </div>
//             </Paper>
//           </Grid>
//         ))}
//       </Grid>
//     </section>
//   );
// }

// export default Projects;



import React from 'react';
import { Grid,Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

import { PROJECTS_DETAILS } from '../Utils/Constants';

const ProjectPage = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
                My Projects
            </Typography>
            <Grid container spacing={4}>
                {PROJECTS_DETAILS.map((project, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <ProjectCard project={project} />
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

// ProjectCard component defined within ProjectPage
const ProjectCard = ({ project }) => {
    const { title, description, image, link } = project;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
            <Button size="small" color="primary" href={link} target="_blank">
                View Project
            </Button>
        </Card>
    );
};

export default ProjectPage;
