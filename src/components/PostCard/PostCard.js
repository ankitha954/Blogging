import React from "react";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Hidden from '@mui/material/Hidden';


export default function FeaturedPost({ post }) {
  return (
    <Grid item xs={12} md={6}>
    <CardActionArea component="a" href="#">
      <Card style={{display:"flex"}}>
        <div style={{flex:1}}>
          <CardContent>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {post.date}
            </Typography>
            <Typography variant="subtitle1" paragraph>
              {post.description}
            </Typography>
            <Typography variant="subtitle1" style={{ color: "skyblue" }}>
              Continue reading...
            </Typography>
          </CardContent>
        </div>
        <Hidden xsDown>
          <CardMedia
            style={{width:160}}
            image={post.image}
            title={post.imageTitle}
          />
        </Hidden>
      </Card>
    </CardActionArea>
  </Grid>
);
}