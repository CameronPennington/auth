import React from "react";
import { useAuth0 } from "../react-auth0-spa";

const Home = () => {
	const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();

	return (
		<div>
			Home
			<div>
				<button onClick={() => loginWithRedirect({})}>Log In</button>
			</div>
		</div>
	);
};

export default Home;
