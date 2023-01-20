import React from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { posts } from "../../Data/Data";
import Markdown from "markdown-to-jsx";

export default function Main({ title }) {
  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom style={{fontSize:40,color:"#90caf9"}}>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown key={post.body}>{post.body}</Markdown>
      ))}
    </Grid>
  );
}