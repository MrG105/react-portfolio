import React, { useState } from "react";

function AboutMe() {
    const [pages] = useState([
        {
            name: "About Me"
        }
    ]);
    const [currentPage] = useState(pages[0]);

    return (
        <div className="masthead text-center d-flex">
            <div className="container my-auto">
                <div className="row">
                    <div className="col-lg-10 mx-auto">
                        <h1>{currentPage.name}</h1>
                        <p className="text-faded mb-5">My name is Gabriel Gutierrez and I am slowly understanding the world of Full Stack Web Development.  I have spent the last few years of my life as an educator, working primarlity with early childhood development.  This portfolio is a good way to keep track of the progress made throughout the journey, Beginning with simple code refactors and working my way up to more and more complex projects. I plan to keep updating this portfolio as my journey continues.  This is the third version of my portfolio, starting with a simple page with html and css and evolving into a react webpage currently.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AboutMe;