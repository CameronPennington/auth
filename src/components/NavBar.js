import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useAuth0 } from "../react-auth0-spa";

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	title: {
		flexGrow: 1
	}
}));

const NavBar = () => {
	const { user, isAuthenticated, loginWithRedirect, logout } = useAuth0();
	const classes = useStyles();

	const logoutWithRedirect = () =>
		logout({
			returnTo: window.location.origin
		});

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						News
					</Typography>

					{!isAuthenticated && (
						<Button
							variant="text"
							color="inherit"
							onClick={() => loginWithRedirect({})}
						>
							Login
						</Button>
					)}
					{isAuthenticated && (
						<Button
							variant="text"
							color="inherit"
							onClick={() => logoutWithRedirect()}
						>
							Log Out
						</Button>
					)}
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
