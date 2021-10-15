import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Authentication
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

// Pages
import Home from './components/pages/Home';
import Writeup from './components/pages/Writeup';
import DisplayWriteups from './components/pages/DisplayWriteups';

// Navigation components
import Navbar from './components/navbar/Navbar';
import Footer from './components/navbar/Footer';

// Backend pages
import Dashboard from './components/dashboard/Dashboard';
import Chart from './components/dashboard/Chart';
import Sidebar from './components/dashboard/Sidebar';
import ManageMedias from './components/dashboard/medias/ManageMedias';
import ManageProjects from './components/dashboard/projects/ManageProjects';
import ManageArticles from './components/dashboard/articles/ManageArticles';
import ManageWriteups from './components/dashboard/writeups/ManageWriteups';

import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/styles';

import { loadUser } from './store/actions/authActions';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
              <Route path={match.url + "/manage-medias"} component={ManageMedias} />
              <Route path={match.url + "/manage-projects"} component={ManageProjects} />
              <Route path={match.url + "/manage-articles"} component={ManageArticles} />
              <Route path={match.url + "/manage-writeups"} component={ManageWriteups} />
            </Switch>
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
          <Route exact path="/writeups" component={DisplayWriteups} />
          <Route exact path="/writeups/:id" component={Writeup} />
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
        <Route exact path={["/", "/signin", "/writeups", "/writeups/:id"]} component={DefaultContainer}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
