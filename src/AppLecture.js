import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link, Redirect, useRouteMatch, useHistory, useParams} from "react-router-dom"
import logo from './logo.svg';
import './App.css';

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


const Home = () => {
    return <div>Home</div>
}
const About = () => {
    return <div>About</div>
}
const Users = () => {
    let history = useHistory();

    const createUsers = async () => {
        const userId = await Promise.resolve(2);
        history.push(`/users/${userId}`)
    }
    return <div>
        <h1>Users</h1>
        <button onClick={createUsers}>Create users</button>
    </div>
}
const NotFound = () => {
    return <div>Page not found</div>
}

const Profile = () => {
    const {id} = useParams();
    return <div>{`${id} : My profile`}</div>
}



const User = () => {
    const {id} = useParams();
    let { path, url } = useRouteMatch();
    //React.useEffect(() => {
    //  fetch(`api/.../${id}`)
    // })
    return <>
        <h2>{"User with id " + id}</h2>
        <Link to={`${url}/profile`}>Profile</Link>
        <Switch>
            <Route path={`${path}/profile`}>
                <Profile />
            </Route>
        </Switch>
    </>
}

function AppLecture() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                    </ul>
                </nav>
                {/* A <Switch> looks through its children <Route>s and
renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                        <HomeButton />
                    </Route>
                    <Route exact path="/users">
                        <Users />
                    </Route>
                    <Route path="/users/:id">
                        <User />
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

export default AppLecture;

