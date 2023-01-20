import "./App.css";
import {
  Container,
  createTheme,
  Grid,
  ThemeProvider,
} from '@mui/material';
import FeaturedPost from "./components/FeaturedPost/FeaturedPost";
 import PostCard from "./components/PostCard/PostCard";
import Header from "./components/Header/Header";
import { featuredPosts, sidebar } from "./Data/Data";
 import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
 import Footer from "./components/Footer/Footer";



function App() {
  const darkTheme = createTheme({
    palette: {
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Container>
        <Header />
        <FeaturedPost />
        <br />
        <Grid container spacing={4}>
          {featuredPosts.map((post) => (
            <PostCard key={post.title} post={post} />
          ))}
        </Grid>
        <Grid container spacing={5} style={{marginTop:10}}>
          <Main title="Arts And Culture"  /> 
          <Sidebar
            title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}
          />
        </Grid>
      </Container>
      <Footer
         title="Stay In Touch"
        description="give me feedback on something you watched or read 🌞"
      /> 
    </ThemeProvider>
  );
}

export default App;