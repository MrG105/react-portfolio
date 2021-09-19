import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Page from "./components/Page"
// import Project from "./components/Project";


import './App.css';

function App() {
  const [pages] = useState([
    { name: "about me" },
    { name: "portfolio" },
    { name: "contact" },
    { name: "resume" }    
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Header>
        {/* <Navigation
          pages = {pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          ></Navigation> */}
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  )
  
    
  
}

export default App;
