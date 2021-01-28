import { Link } from 'gatsby';
import React, { Component } from 'react';
import { Location } from '@reach/router';
import PropTypes from 'prop-types';

class Header extends Component {

   static propTypes = {
      location: PropTypes.object.isRequired
    }
    
  render() {

   const { location } = this.props;
   const currentHash = location.hash == "" ? "#home" : location.hash
    if(this.props.data){
      var name = this.props.data.name;
      var occupation= this.props.data.occupation;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url} target="_blank" rel="noreferrer"><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">

      <nav id="nav-wrap">

         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className={currentHash === "#home" ? "current" : ""}><a href="#home">Home</a></li>
            <li className={currentHash === "#about" ? "current" : ""}><a href="#about">About</a></li>
	         <li className={currentHash === "#resume" ? "current" : ""}><a href="#resume">Resume</a></li>
            <li className={currentHash === "#portfolio" ? "current" : ""}><a href="#portfolio">Works</a></li>
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
            <li className={currentHash === "#contact" ? "current" : ""}><a href="#contact">Contact</a></li>
            <li><Link to="/blog">Blog</Link></li>
         </ul>

      </nav>

      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline">I'm {name}.</h1>
            <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
            <hr />
            <ul className="social">
               {networks}
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default props => (
   <Location>
     {locationProps => <Header {...locationProps} {...props} />}
   </Location>
 );
