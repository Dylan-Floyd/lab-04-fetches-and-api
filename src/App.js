import React from 'react';
import './App.css';
import Home from './Home/Home.js';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import PokeBrowser from './PokeBrowser/PokeBrowser.js';
import PokeDetail from './PokeDetail/PokeDetail.js';

export default class App extends React.Component {

    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <h2>PokeDex</h2>
                        <ul>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/browse">Browse</NavLink>
                            </li>
                        </ul>
                        {/* I hate this but it gets the links centered */}
                        <h2 className="hidden">PokeDex</h2>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/browse">
                            <PokeBrowser />
                        </Route>
                        <Route
                            path="/pokemon/:id"
                            exact
                            render={(routerProps) => <PokeDetail {...routerProps} />}
                            />
                        <Route path="/" exact>
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
