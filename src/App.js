import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Loading from "./components/Loading";
import Home from "./components/Home";
import PrivateRoute from "./components/PrivateRoute";
import Profile from "./components/Profile";
import { useAuth0 } from "./react-auth0-spa";
import history from "./utils/history";

const App = () => {
	const { loading } = useAuth0;
	if (loading) {
		return <Loading />;
	}
	return (
		<Router history={history}>
			<div className="App">
				<Switch>
					<Route path="/" exact component={Home} />
					<PrivateRoute path="/profile" component={Profile} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
