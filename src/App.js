import React, {useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import User from './components/users/User';
import GithubState from './context/github/GithubState';

const App = () =>  {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);


  // Get Users Repos
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:acc&
    client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&
    client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    setRepos(res.data);
    setLoading(false);
  }


  // Set Alert
  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3000);
  }


    return (
      <GithubState>
      <Router>
        <div className='App'>
          <Navbar />
          <div className="container">
            <Alert 
              alert = {alert} 
            />
            <Switch>
              <Route exact path = '/' render = { props => (
                <Fragment>
                  <Search 
                    setAlert = {showAlert}
                  />
                  <Users />
                </Fragment>
              )} 
              />
              <Route 
                exact path = '/about' 
                component = { About } 
                />
              <Route 
                exact path = '/user/:login' 
                render = {props => (
                  <User 
                    { ...props } 
                    getUserRepos = { getUserRepos } 
                    repos = {repos}
                  />
              )} />
            </Switch>
          </div>
        </div>
      </Router>
      </GithubState>
    );
  }

export default App;
