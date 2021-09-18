import React from "react";

function Project({ project}) {
    const { name, repo, link, description } = project;

    return (
        <div className= "col-lg-3 col-sm-5">
            <div className="portfolio-container" key={name}>
                <img
                    src={require(`../../assets/img/portfolio/${name}.PNG`)}
                    alt={name}
                    className="img-fluid"
                />
                <div className="portfolio-caption">
                    <div className="portfolio-caption-content">
                        <a href={repo} className="project-category text-faded" target="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href={link} className="project-category text-faded" target="_blank">{name}</a>{' '}
                        <p className="project-name">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project;