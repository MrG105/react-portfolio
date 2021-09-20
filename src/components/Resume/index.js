import React, { useState } from "react";

// https://docs.google.com/document/d/1UBSH_92XyrwN3N9fJzqJfp_Jtjh3smQ-QKCSTnWBp0k/edit?usp=sharing

function Resume() {
    const [pages] = useState([
        {
            name: "Resume"
        }
    ])

    const currentPage = useState(pages[0]);

    return(
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 mx-auto mb-4">
                        <h1 className="text-center">{currentPage.name}</h1>
                        <h3>Current Understandings In:</h3>
                        <h4>Front-End</h4>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>Bootstrap</li>
                            <li>Handlebars</li>
                            <li>React</li>

                        </ul>
                        <h4>Back-End</h4>
                        <ul>
                            <li>REST APIs</li>
                            <li>Node</li>
                            <li>Express</li>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>IndexedDB</li>
                        </ul>

                        <h4>And an overwhelming desire to learn more</h4>

                        <p className="text-center">
                            For a link to my Resume, <a href = "https://docs.google.com/document/d/1UBSH_92XyrwN3N9fJzqJfp_Jtjh3smQ-QKCSTnWBp0k/edit?usp=sharing">Click Here</a>
"
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Resume;