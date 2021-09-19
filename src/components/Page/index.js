import React from "react";
import AboutMe from "../AboutMe";
import PageContent from "../PageContent";
import Portfolio from '../Portfolio';
import Contact from '../Contact';
// import Resume from '../Resume';

function Page({ currentPage }) {
    
    const renderPage = () => {
        switch (currentPage.name) {
            case 'about me':
                return <AboutMe />;
            case 'portfolio':
                return <Portfolio />;
            case 'contact':
                return <Contact />;
            // case 'resume':
            //     return <Resume />;
            default:
                return <AboutMe />
        }
    };

    return (
        <section>
            <PageContent>{renderPage()}</PageContent>
        </section>
    )
}



export default Page;