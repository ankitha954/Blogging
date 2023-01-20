import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';


export default function Sidebar(props) {

  const { archives, description, social, title,} = props;

  return (
    <Grid item xs={12} md={4}>
      <Card style={{paddind:100,marginTop:30,spacing:2}}>
        <Typography variant="h5" component="h2" 
        style={{paddingLeft:30 ,color:"White",backgroundColor:" #1b1b1b" , fontSize:30}} >
          {title}
        </Typography>
        <Typography style={{paddingLeft:10,marginTop:30,paddingRight:15}}>{description} </Typography>
        <Typography style={{paddingLeft:80}}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/IIT_Kharagpur_Old_Building_1951.jpg/220px-IIT_Kharagpur_Old_Building_1951.jpg" alt="building" />
      
        </Typography>
        <p style={{fontSize:13,marginTop:10,paddingLeft:85}}>The office of the Hijli Detention Camp (photographed September 1951)</p>
        <Typography style={{paddingLeft:80}} > 
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Mars_Orbiter_Mission_-_India_-_ArtistsConcept.jpg/200px-Mars_Orbiter_Mission_-_India_-_ArtistsConcept.jpg" alt="satellite"/>
        </Typography>
        <p style={{fontSize:14,marginTop:10,paddingLeft:85}}>Artist's rendering of the Mars Orbiter Mission 
        spacecraft.</p>
        <p style={{fontSize:18,marginTop:10,paddingLeft:15,paddingRight:15}}><b>Gaganyaan:</b><br></br>
      Gaganyaan is a future planned, "in-development-process" space module to send the Indian 
      astronauts into space, who are being trained in Russia. The plan is to establish a 
      new "space-station" other than the ISS. India has kept itself from being part of the program,
      to show its "self reliance". The program was, too, delayed due to the pandemic of COVID-19.</p>
      <p style={{fontSize:18,marginTop:10,paddingLeft:15,paddingRight:15}}><b>Thirty Meter Telescope:</b><br></br>The Thirty Meter Telescope (TMT) is a planned, eighteen story, astronomical observatory and extremely large telescope to be built on the summit of Mauna Kea in the state of Hawaii. The TMT is designed for near-ultraviolet to mid-infrared (0.31 to 28 μm wavelengths) observations, featuring adaptive optics to assist in correcting image blur. The TMT will be at the highest altitude of all the proposed ELTs. 
      The telescope has government-level support from several R&D spending nations: China,
       Japan, Canada and India</p>
      </Card>

      <Typography variant="h6" gutterBottom style={{marginTop:30,spacing:3,marginLeft:50}}>
        Archives
      </Typography>
      <Typography style={{spacing:3,marginLeft:50}} >
      {archives.map((archive) => (
       <Link
          display="block"
          variant="body1"
          href={archive.url}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}

      </Typography>
      

      <Typography variant="h6" gutterBottom className="sidebarSection" style={{marginTop:10,marginLeft:50}}>
        Social
      </Typography>
      <Typography style={{marginLeft:50}}>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network.name}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
  
      ))}
      </Typography>
      
    </Grid>
  );
}