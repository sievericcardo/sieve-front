import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Home from './components/pages/Home';
import Navbar from './components/navbar/Navbar';

import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/styles';

import { loadUser } from './store/actions/authActions';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import clsx from 'clsx';

import Dashboard from './components/dashboard/Dashboard';
import Chart from './components/dashboard/Chart';
import Sidebar from './components/dashboard/Sidebar';
import Footer from './components/navbar/Footer';
import ManageProjects from './components/dashboard/projects/ManageProjects';
import ManageArticles from './components/dashboard/articles/ManageArticles';

import './App.css';

const useStyles = makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    width: '80vw',
    marginTop: '2vw',
    marginLeft: '15vw',
    marginRight: '5vw',
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  contentPage: {
    width: '100vw!important',
    maxWidth: '100vw!important',
    margin: '0!important',
    padding: '0!impotant',
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch]);

  // const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const DashboardContainer = ({ match }) => (
    <div className="container">
      <Dashboard />
      <div>
        <Sidebar />
        <main className={ classes.content }>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={ classes.container }>
            <Switch>
              <Route exact path={match.url} component={Chart} />
              <Route path={match.url + "/manage-projects"} component={ManageProjects} />
              <Route path={match.url + "/manage-articles"} component={ManageArticles} />
            </Switch>
            {/* <Grid container spacing={3}>
              {/* chart */}
              {/* <Grid item xs={12} md={8} lg={9}>
                <Paper className={ fixedHeightPaper }>
                  <Chart />
                </Paper>
              </Grid> */}

              {/* recent deposits */}
              {/* <Grid item xs={12} md={4} lg={3}>
                <Paper className={ fixedHeightPaper }>
                  <Deposits />
                </Paper>
              </Grid> */}

              {/* recent orders */}
              {/* <Grid item xs={12}>
                <Paper className={ fixedHeightPaper }>
                  <Orders />
                {/* </Paper> */}
              {/* </Grid> */}
            {/* </Grid> */}
          </Container>
        </main>
      </div>
    </div>
  )

  const DefaultContainer = () => (
    <div className="container">
      <Navbar />
      <Container className={ classes.pageContent } maxWidth="false">
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Home} />
          {/* <Route path="/" exact component={Articles} /> */}
        </Switch>
      </Container>
      <Footer />
    </div>
  )

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Route path="/cms-dashboard" component={DashboardContainer}/>
        <Route component={DefaultContainer}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
