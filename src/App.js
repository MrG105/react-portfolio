import React, { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";

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
        <Nav
          pages = {pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          ></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  )
  
    
  
}

export default App;
