import React from "react";

function Navigation(props) {
    const {
        pages = [],
        setCurrentPage,
        currentPage,        
    } = props;

    return (
        <nav className = "navbar navbar-expand-lg navbar-light fixed-top" id="navBar">
            <div className = "container">
                <a className = "navbar-brand js-scroll-trigger">GUTIERREZ</a>
            </div>
        </nav>
    )
}

export default Navigation;