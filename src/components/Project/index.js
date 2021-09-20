import React from "react";
import Image from 'react-bootstrap/Image'


function Project({ project }) {
    const { name, repo, link, description } = project;

    return (
        <div className= "col-lg-3 col-sm-5">
            <div className="portfolio-container" key={name}>
                <Image
                    src={require(`../../assets/img/portfolio/${name}.PNG`).default}
                    alt={name}
                   fluid
                />
                <div className="portfolio-caption">
                    <div className="portfolio-caption-content">
                        <a href={repo} className="project-category text-faded" target="_blank" rel="noreferrer">
                            <i className="fab fa-github">Repo</i>
                        </a>
                        <hr />
                        
                        <a href={link} className="project-category text-faded" target="_blank" rel="noreferrer">{name}</a>{' '}
                        <p className="project-name">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;