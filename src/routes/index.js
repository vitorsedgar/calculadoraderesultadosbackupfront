import React from "react";
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
    useLocation,
} from "react-router-dom";

import { makeStyles, useMediaQuery } from "@material-ui/core";
import PropTypes from "prop-types";

import Home from "../pages/HomeUserPage";
import theme from "../styles/customMuiTheme";
import { isAuthenticated } from "../utils/authentication.js";

const useStyles = makeStyles({
    root: {
        display: "flex",
    },
    content: {
        flexGrow: 1,
    },
    background: {
        background: `url(${require("../assets/Background.svg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
    },
    backgroundMobile: {
        background: `url(${require("../assets/BackgroundMobile.svg")})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
    },
});

const PrivateRoute = ({ children, ...rest }) => {
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    // console.log(isMobile)
    const location = useLocation();
    const classes = useStyles(isMobile);

    if (/*isAuthenticated()*/ true) {
        return (
            <div
                className={
                    isMobile ? classes.backgroundMobile : classes.background
                }
            >
                <Route {...rest}>{children}</Route>
            </div>
        );
    }
    return (
        <Redirect
            to={{
                pathname: "/login",
                state: { from: location.pathname + location.search },
            }}
        />
    );
};
PrivateRoute.propTypes = {
    children: PropTypes.element.isRequired,
};

export const Routes = () => {
    const classes = useStyles();

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Router>
            <div className={classes.root}>
                <main className={classes.content}>
                    <Switch>
                        <PrivateRoute path="/">
                            <Home />
                        </PrivateRoute>
                    </Switch>
                </main>
            </div>
        </Router>
    );
};
