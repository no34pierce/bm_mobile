import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RootRouter from './router/RootRouter';
import { CssBaseline, Container, Box } from '@material-ui/core';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Navigator from './components/Navigator';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(0),
      paddingBottom: theme.spacing(7),
      minHeight: '100vh',
    },
  })
);

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Router>
        <Container maxWidth="xl" className={classes.mainContainer}>
          <RootRouter />
        </Container>
        <Navigator />
      </Router>
    </React.Fragment>
  );
}

export default App;
