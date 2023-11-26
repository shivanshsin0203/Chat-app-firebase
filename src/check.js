import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Button, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    padding: theme.spacing(2),
  },
  title: {
    marginBottom: theme.spacing(4),
  },
  list: {
    marginBottom: theme.spacing(4),
  },
  loginButton: {
    marginBottom: theme.spacing(2),
  },
}));

function LoginPage() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        Chat with Fellow Second-Year Students
      </Typography>
      
      <List className={classes.list}>
        <ListItem><ListItemText primary="Login to Chat: Click on the 'Login' button to get started. Make sure you use your college-provided email account." /></ListItem>
        <ListItem><ListItemText primary="Access the Chatroom: Once logged in, you'll be directed to the main chatroom where fellow second-year students are chatting." /></ListItem>
        <ListItem><ListItemText primary="Start Chatting: Type your message in the message box and hit 'Send'. Engage, collaborate, and get to know your batchmates better!" /></ListItem>
        <ListItem><ListItemText primary="Respect & Courtesy: Always maintain a respectful tone. Any inappropriate behavior may result in being banned from the chatroom." /></ListItem>
        <ListItem><ListItemText primary="Log Out: Remember to log out once you're done chatting, especially if you're on a shared device." /></ListItem>
      </List>
      
      <Button variant="contained" color="primary" className={classes.loginButton}>
        Login
      </Button>

      <Typography variant="h6">Happy Chatting!</Typography>
    </Container>
  );
}

export default LoginPage;
