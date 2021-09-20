import React from 'react';

function Footer() {
    const icons = [
        {
            name: "fab fa-github",
            link: "https://github.com/MrG105"
        },
        {
            name: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/gabriel-gutierrez-65526bb8/"
        }
    ]

    return (
        
            <footer >
                    <div className="col-lg-8 mx-auto text-center">
                        {icons.map(icon =>
                            (<a href={icon.link} key={icon.name} target="_blank" rel="noopener noreferrer"><i className={icon.name}></i></a>)
                            )}
                    </div>
            </footer>
        
    )
}

export default Footer;