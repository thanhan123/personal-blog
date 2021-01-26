import React, { Component } from 'react';

import "../css/default.css"
import "../css/fonts.css"
import "../css/layout.css"
import "../css/magnific-popup.css"
import "../css/media-queries.css"

import Header from '../pages/portfolio/Header';
import Footer from '../pages/portfolio/Footer';
import About from '../pages/portfolio/About';
import Resume from '../pages/portfolio/Resume';
import Contact from '../pages/portfolio/Contact';
import Testimonials from '../pages/portfolio/Testimonials';
import Portfolio from '../pages/portfolio/Portfolio';
import resumeData from '../data/resumeData.json'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      resumeData: resumeData
    };
  }

  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
