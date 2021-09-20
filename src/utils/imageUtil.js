import codeQuiz from '../assets/img/portfolio/Code-Quiz.PNG'
import codeRefactor from '../assets/img/portfolio/Code-Refactor.PNG'
import dayPlanner from '../assets/img/portfolio/Day-Planner.PNG'
import eCommerceBackend from '../assets/img/portfolio/E-Commerce-Backend.PNG'
import employeeTracker from '../assets/img/portfolio/Employee-Tracker.PNG'
import mountains from '../assets/img/portfolio/mountains.jpg'
import oldPortfolio from '../assets/img/portfolio/Old-Portfolio.PNG'
import passwordGenerator from '../assets/img/portfolio/Password-Generator.PNG'
import projectStormhouse from '../assets/img/portfolio/Project-Stormhouse.PNG'
import readmeGenerator from '../assets/img/portfolio/Readme-Generator.PNG'
import teamProfileGenerator from '../assets/img/portfolio/Team-Profile-Generator.PNG'
import weatherDashboard from '../assets/img/portfolio/Weather-Dashboard.PNG'
import workoutTracker from '../assets/img/portfolio/Workout-Tracker.PNG'

const images = {
    codeQuiz,
    codeRefactor,
    dayPlanner,
    eCommerceBackend,
    employeeTracker,
    mountains,
    oldPortfolio,
    passwordGenerator,
    projectStormhouse,
    readmeGenerator,
    teamProfileGenerator,
    weatherDashboard,
    workoutTracker
}

export function getImageByKey(key) {
    console.log(`~!~!key: `, key)
    console.log(`~!~!value: `, images[key])
    return images[key]
}