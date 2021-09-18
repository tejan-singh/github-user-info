import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Alert from "./Components/Layout/Alert";
import About from "./Components/Pages/About";
import Error from "./Components/Pages/Error";
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import Profile from "./Components/Users/Profile";
import SearchBar from "./Components/Users/SearchBar";
import Users from "./Components/Users/Users";

class App extends React.Component {
  state = {
    loading: false,
    users: [],
    user: {},
    alert: null,
    repos: [],
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios.get(`https://api.github.com/users`);
    this.setState({ loading: false, users: response.data });
  }

  searchUser = async (text) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({ loading: false, users: response.data.items });
  };

  clearSearch = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (alertMsg, alertType) => {
    // set alert state with given properties.
    this.setState({ alert: { msg: alertMsg, type: alertType } });

    //after 3 seconds, set its state to empty to remove alert
    setTimeout(() => {
      this.setState({ alert: null });
    }, 3000);
  };

  getUser = async (username) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    this.setState({ loading: false, user: response.data });
  };

  getUserRepos = async (username) => {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`
    );
    this.setState({ loading: false, repos: response.data });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/">
                <Alert alert={this.state.alert} />
                <SearchBar
                  searchUser={this.searchUser}
                  clearSearch={this.clearSearch}
                  showClear={this.state.users.length > 0 ? true : false}
                  setAlert={this.setAlert}
                />

                <Users
                  userData={this.state.users}
                  loading={this.state.loading}
                />
              </Route>

              <Route exact path="/about">
                <About />
              </Route>

              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <Profile
                    {...props}
                    getUser={this.getUser}
                    user={this.state.user}
                    getUserRepos={this.getUserRepos}
                    repos={this.state.repos}
                    loading={this.state.loading}
                  />
                )}
              ></Route>

              <Route path="*">
                <Error />
              </Route>
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
