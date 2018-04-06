import React, { Component } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <HomePage />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
      </div>
    );
  }
}

export default App;
