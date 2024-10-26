import React from "react";
import "../resources/css/home.css";
import { Avatar, Typography, Box } from "@mui/material";
import ProfileImage from "../resources/images/imagehome.png";

function Home() {
  return (
    <Box 
      className="mainContainer" 
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: { xs: 'column', md: 'row' },
        padding: '20px',
      }}
    >
      <Box 
        className="textContainer" 
        sx={{
          textAlign: 'left',
          marginBottom: { xs: '35px', md: '0' },
          maxWidth: '600px',
        }}
      >
        <Typography
          variant="h2"
          sx={{
            marginTop:'10%',
            marginBottom:'0%',
          }}
          >
          Hey!<br />
        </Typography>

        <Typography 
          variant="h2" 
          className="name" 
          sx={{
            //marginTop: '30px',
            marginBottom: '10px',
          }}
        >
          I'am 
          <strong>
            <span style={{ color: '#f05811' }}> Tushar Sharma</span>
          </strong>
        </Typography>

        <Typography 
          variant="h4" 
          className="aspiring" 
          marginbottom
          sx={{
            fontStyle: 'italic',
            // color: '#f05811',
          }}
        >
         Aspiring <span style={{ color: '#f05811' }}>Data Scientist</span>
        </Typography>
      </Box>

      <Box 
        className="image" 
        sx={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Avatar
          src={ProfileImage}
          sx={{
            width: "450px",
            height: "450px",
            borderRadius: "10px",
            boxShadow: 3,
          }}
        />
      </Box>
    </Box>
  );
}

export default Home;
