import React from "react";
import AboutMe from "../AboutMe";
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Resume from '../Resume';
import { Switch, Route } from 'react-router-dom'

function Page() {
    
    return (
        <section>
            <Switch>
            <Route path="/about">
                <AboutMe/>
            </Route>
            <Route path="/portfolio">
                <Portfolio/>
            </Route>
            <Route path="/contact">
                <Contact/>
            </Route>
            <Route path="/resume">
                <Resume/>
            </Route>
            <Route path="/">
                <AboutMe/>
            </Route>                
        </Switch>
        </section>
        
    )
}



export default Page;