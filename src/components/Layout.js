import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink,
} from "react-router-dom";
import Login from "./Login";
import News from  "./News";
import HomeContent from "./HomeContent";


function Layout() { 
    return(
        <Router>
            <NavLink to="/HomeContent" exact> Home</NavLink>
            <NavLink to="/news" > News </NavLink>
            <NavLink to="/login"> Contact</NavLink>

            <Switch>             
                <Route path="/HomeContent" exact component={HomeContent} />
                <Route path="/news" exact component={News} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </Router>        
        
    ); 

}
export default Layout;