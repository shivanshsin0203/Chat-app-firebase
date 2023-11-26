import { useEffect, useRef, useState } from "react";
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
    import GitHubIcon from '@mui/icons-material/GitHub';
    import LinkedInIcon from '@mui/icons-material/LinkedIn';
    import CodeIcon from '@mui/icons-material/Code';
    import "./signin.css"
function Copyright(props) {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const baseStyle = {
    fontSize: 40,
    transition: 'transform 0.4s ease-in-out, box-shadow 0.4s ease-in-out',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
};

const hoverStyle = {
    transform: 'scale(1.2) rotate(15deg)',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.4)',
};
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      
       <a href="https://github.com/shivanshsin0203" target="_blank" rel="noopener noreferrer">
            <GitHubIcon  onMouseEnter={() => setHoveredIcon('github')} 
                    onMouseLeave={() => setHoveredIcon(null)}
                    style={{ 
                        ...baseStyle, 
                        color: 'purple',
                        ...(hoveredIcon === 'github' ? hoverStyle : {})
                    }} />
        </a>
        <a href="https://www.instagram.com/shivanshsingh4378/" target="_blank" rel="noopener noreferrer">
            <InstagramIcon onMouseEnter={() => setHoveredIcon('instagram')} 
                    onMouseLeave={() => setHoveredIcon(null)}
                    style={{ 
                        ...baseStyle, 
                        color: '#E1306C',
                        ...(hoveredIcon === 'instagram' ? hoverStyle : {})
                    }} />
        </a>
        <a href="https://www.linkedin.com/in/shivansh-singh-736521289/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon    onMouseEnter={() => setHoveredIcon('linkedin')} 
                    onMouseLeave={() => setHoveredIcon(null)}
                    style={{ 
                        ...baseStyle, 
                        color: 'lightblue',
                        ...(hoveredIcon === 'linkedin' ? hoverStyle : {})
                    }} />
        </a>
        <a href="https://leetcode.com/singhshivansh12may/" target="_blank" rel="noopener noreferrer">
            <CodeIcon  onMouseEnter={() => setHoveredIcon('leetcode')} 
                    onMouseLeave={() => setHoveredIcon(null)}
                    style={{ 
                        ...baseStyle, 
                        color: '#FFD700',
                        ...(hoveredIcon === 'leetcode' ? hoverStyle : {})
                    }} />
        </a><br/>
        Build By Shivansh Singh
    </Typography>
   
  );
}

// TODO remove, this demo shouldn't need to reset the theme.


const defaultTheme= createTheme({
    palette: {
        mode: 'dark' ,
    },
});
export default function SignIn(props) {
   function sub(){
     props.SignIn();
   }
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
    const val="Sign Up with   "
  return (
    <ThemeProvider theme={defaultTheme}>
       <Container maxWidth="sm">
                <Typography
                component="h2"
                variant="h3"
                align="center"
                color="text.primary"
                gutterBottom
                >
                 Welcome to Exclusive Chat App
                </Typography>
            </Container>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
         <ul>
              

<li><strong>Login to Chat:</strong> Click on the "Login" button to get started. Make sure you use your college-provided email account.</li>
<li><strong>Access the Chatroom:</strong> Once logged in, you'll be directed to the main chatroom where fellow second-year students are chatting.</li>
<li><strong>Start Chatting: </strong>Type your message in the message box and hit 'Send'. Engage, collaborate, and get to know your batchmates better!</li>
<li><strong>Respect & Courtesy:</strong> Always maintain a respectful tone. Any inappropriate behavior may result in being banned from the chatroom.</li>
<li><strong>Log Out: Remember</strong> to log out once you're done chatting, especially if you're on a shared device.</li>

              </ul>
              Happy Chatting!
          
           
            <Button
              onClick={props.SignIn}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {val} <GoogleIcon style={{ fontSize: '30px', color: 'red' }}></GoogleIcon>
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                 
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}