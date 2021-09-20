import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Page from "./components/Page"
// import Project from "./components/Project";
import { BrowserRouter as Router } from 'react-router-dom'


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
    <Router>
      <div>
        <Header>
          <Navigation
            pages = {pages}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            ></Navigation>
        </Header>
        <main>
          <Page/>
        </main>
        <Footer />
      </div>
    </Router>
  )
  
    
  
}

export default App;
