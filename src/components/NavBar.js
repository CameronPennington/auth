import React from "react";

const NavBar = () => {
	const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
	return <div>NavBar</div>;
};
