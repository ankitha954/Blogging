import {Button,Card, CardActions,CardContent,Typography} from '@mui/material';

  
  const FeaturedPost = () => {
    return (
      <Card style={{backgroundPosition:"center",padding:"35px,25px",color:"white",backgroundImage:`url("https://images.unsplash.com/photo-1615469038804-6b91aef7026f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max")`}}>
        <CardContent style={{color:"white"}}>
          <Typography style={{fontSize:30,fontFamily:"Montserrat"}} gutterBottom>
          What We Do When (Almost) Everyone Gets It Wrong
          </Typography>
          <Typography variant="h6" component="h6">
          There’s that famous Michael Jordan quote about failing over and over and over again, 
          and that’s why he succeeds. 
          Well, I am always wrong about everything, and that’s why my life improves.
          Knowledge is an eternal iterative process.
           We don’t go from “wrong” to “right” once we discover the capital-T Truth.
            Rather, we go from partially wrong to slightly less wrong, to slightly less wrong than that,
             to even less wrong than that, and so on. We approach the capital-T truth, but never reach it.
             Therefore, from a perspective of happiness/purpose,
              we should not seek to find the ultimate “right” answer for ourselves, but rather seek to chip away at the ways which we’re wrong today so that we’re a little less wrong tomorrow.
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="text" style={{ color: "#90caf9", fontWeight: 700 }}>
            Read More..
          </Button>
        </CardActions>
      </Card>
    );
  };
  
  export default FeaturedPost;