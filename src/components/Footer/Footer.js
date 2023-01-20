import React from "react";
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from  '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import { red ,pink } from "@mui/material/colors";

export default function Footer({ title,description }) {

  return (
    <footer style={{backgroundColor:" #1b1b1b",marginTop:"1px",padding:"1px"}}>
      <Container maxWidth="lg">
        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
        >
           <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
          style={{fontSize:"40px"}}
        >{title}</Typography>
        <FacebookIcon sx={{ fontSize: 70 }} color="primary" />
        <TwitterIcon sx={{ fontSize: 70 }}  color="primary"/>{" "}
        <YouTubeIcon sx={{ fontSize: 70 ,color:red[500]}}/>{" "}
        <InstagramIcon sx={{ fontSize: 70 , color:pink[500] }}/>
          <hr></hr>
          {description}
        </Typography>
        
        <Typography variant="body2" color="white" align="center">
          Copyright ©{" "}
          <Link color="inherit" href="https://material-ui.com/">
            Mallela Ankitha
          </Link>{"  "}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </footer>
  );
}