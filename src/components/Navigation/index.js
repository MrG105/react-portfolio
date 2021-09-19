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
                <a className = "navbar-brand js-scroll-trigger" >GUTIERREZ</a>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className ="navbar-nav ml-auto">
                        {pages.map((Page) => (
                            <li
                                className={`nav-item nav-link js-scroll-trigger ${currentPage.name === Page.name && 'active'}`}
                                key={Page.name}>
                            <span
                                onClick={() => setCurrentPage(Page)}
                                >

                            </span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

        </nav>
    )
}

export default Navigation;