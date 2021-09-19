import React, { useState} from "react";
import Project from "../Project";


function Portfolio() {
    const [pages] = useState([
        {
            name: "Portfolio"
        }
    ]);
    const [currentPage] = useState(pages[0]);
    const [projects] = useState([
        {
            name: 'Workout-Tracker',
            description: 'Fitness Tracker utilizing NoSQL, Mongoose, Morgan, Express, and Chart.js.',
            link: 'https://lit-woodland-81190.herokuapp.com/',
            repo: 'https://github.com/MrG105/Workout-Tracker'
        },
        {
            name: 'Old-Portfolio',
            description: 'Past portfolio version using minimal HTML, CSS, JS, and Bootstrap.',
            link: 'https://mrg105.github.io/MrG-Portfolio/',
            repo: 'https://github.com/MrG105/MrG-Portfolio'
        },
        {
            name: 'E-Commerce-Backend',
            description: 'Added backend to an existing E-Commerce App through Express and MySQL database structuring',
            link: 'https://drive.google.com/file/d/1Wj-JFtA8zZfABdmZM3cmzu4ut9kMDdlu/view',
            repo: 'https://github.com/MrG105/ORM-Backend'
        },
        {
            name: 'Employee-Management-System',
            description: 'Creating a basic Employee Tracker through Inquirer, MySQL, and Console.Table',
            link: 'https://drive.google.com/file/d/1QoRYADF2AYRwfnVh-QPRXHZ0p7eoYdPs/view',
            repo: 'https://github.com/MrG105/Employee-tracker'
        },
        {
            name: 'Team-Profile-Generator',
            description: 'Creating an app to add and track team members through Inquirer, with first JEST tests',
            link: 'https://drive.google.com/file/d/1xTj-pJFuLCNqvcY-Geu7X12vWEUBHmtg/view',
            repo: 'https://github.com/MrG105/TeamProfileGenerator'
        },
        {
            name: 'Readme-Generator',
            description: 'A functional Readme Generator. First introduction to Node.js, Inquirer, and template literals.',
            link: 'https://drive.google.com/file/d/1NawKPxK5rVynIfZTPToBiHLrBSHPdgqA/view',
            repo: 'https://github.com/MrG105/Readme-Generator'
        },
        {
            name: 'Project-Stormhouse',
            description: 'Group Project combining local events with weather tracking.  Worked on backend, API calls, and overall functionality.',
            link: 'https://mrg105.github.io/project-stormhouse/',
            repo: 'https://github.com/MrG105/project-stormhouse'
        },
        {
            name: 'Weather-Dashboard',
            description: 'Weather Dashboard that displays weekly forecast based on City.  First introduction to REST API calls.',
            link: 'https://mrg105.github.io/Weather-Dashboard/',
            repo: 'https://github.com/MrG105/Weather-Dashboard'
        },
        {
            name: 'Day-Planner',
            description: 'Work Day Scheduler using Moment.js to color code past and future hours.',
            link: 'https://mrg105.github.io/Day-Planner/',
            repo: 'https://github.com/MrG105/Day-Planner'
        },
        {
            name: 'Code-Quiz',
            description: 'Code Quiz using HTML, CSS, and JS to track a timer, point values, and a basic code quiz.',
            link: 'https://mrg105.github.io/Code-Quiz/',
            repo: 'https://github.com/MrG105/Code-Quiz'
        },
        {
            name: 'Password-Generator',
            description: 'A very basic password generator using alert windows for prompts.',
            link: 'https://mrg105.github.io/Password-Generator/',
            repo: 'https://github.com/MrG105/Password-Generator'
        },
        {
            name: 'Code Refactor',
            description: 'Introduction to HTML, refactoring existing code to clean it up.',
            link: 'https://mrg105.github.io/Code-Refactor-wk1',
            repo: 'https://github.com/MrG105/Code-Refactor-wk1'
        },
    ]);

    return (
        <section className='p-0'>
            <div className="container-fluid p-0">
                <h1 className="margin-top text-center">{currentPage.name}</h1>
                <hr className="my-4" />
                <div className="row no-gutters popup-gallery">

                    {projects.map((project, idx) => (
                        <Project
                            project={project}
                            key={"project" + idx}
                            />
                    ))}
                </div>
            </div>
        </section>
    )
}


export default Portfolio;