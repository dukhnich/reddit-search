import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch, useHistory, useParams} from "react-router-dom"
import './App.css';
import SearchReddit from "./SearchReddit";
import Feed from "./Feed";

function HomeButton() {
  let history = useHistory();
  function handleClick() {
    history.push("/home");
  }
  return (
      <button type="button" onClick={handleClick}>
        Go home
      </button>
  );
}
const NotFound = () => {
  return <div>Page not found</div>
}

function App() {
  return (
  <Router>
    <div>
<Link to="/">Home</Link>

      <Switch>
        <Route exact path="/">
          <SearchReddit />
        </Route>
        <Route path='/r/:subreddit/comments/:id/:name'>
          <Feed />
        </Route>
        <Redirect from="/home" to="/" />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

