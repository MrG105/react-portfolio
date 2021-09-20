import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Page from "./components/Page"
import { BrowserRouter as Router } from 'react-router-dom'


import './App.css';

function App() {
  
  return (
    <Router>
      <div>
        <Header>
          <Navigation />            
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
