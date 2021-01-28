import React from 'react';

import "./css/default.css"
import "./css/fonts.css"
import "./css/layout.css"
import "./css/magnific-popup.css"
import "./css/media-queries.css"

import Header from './Header';
import Footer from './Footer';
import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Portfolio from './Portfolio';

import resumeData from './data/resumeData.json'
import SEO from '../../components/seo';

const PortfolioContainer = () => {
  return (
    <div>
      <SEO title={"Home"}/>
      <Header data={resumeData.main}/>
      <About data={resumeData.main}/>
      <Resume data={resumeData.resume}/>
      <Portfolio data={resumeData.portfolio}/>
      {/* <Testimonials data={resumeData.testimonials}/> */}
      <Contact data={resumeData.main}/>
      <Footer data={resumeData.main}/>
    </div>
  )
}

export default PortfolioContainer;
