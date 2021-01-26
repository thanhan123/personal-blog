import React, { Component } from 'react';
import emailjs from "emailjs-com";

class Contact extends Component {
   constructor() {
      super();
      this.state = {
         currentUIState: 0, // 0: initial, 1: loading, 2: success finish, 3: failed finish
         name: "",
         email: "",
         subject: "",
         message: ""
      }
   }

   sendMail = (e) => {
      e.preventDefault();
      const serviceId = 'service_397g8zk';
      const templateId = 'template_0y0i7pp';
      const userId = 'user_lYFSCfmtfU5SdqvBYHN8w';
      this.setState({
         currentUIState: 1
      });
      emailjs.sendForm(serviceId, templateId, e.target, userId)
         .then((result) => {
            this.setState({
               currentUIState: 2,
               name: "",
               email: "",
               subject: "",
               message: ""
            });
         }, (error) => {
            this.setState({
               currentUIState: 3
            });
         });
   }

   handleChange = (e) => {
      const target = e.target;
      const value = target.value;
      const name = target.name;
      this.setState({
         [name]: value
      })
   }

  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>

            <div className="ten columns">
               <p className="lead">{message}</p>
            </div>
         </div>

         <div className="row">
            <div className="eight columns">
               <form onSubmit={this.sendMail}>
					   <fieldset>
                     <div>
                        <label>Name <span className="required">*</span></label>
                        <input type="text" size="35" id="contactName" name="name" onChange={this.handleChange} value={this.state.name}/>
                     </div>
                     <div>
                        <label>Email <span className="required">*</span></label>
                        <input type="email" size="35" id="contactEmail" name="email" onChange={this.handleChange} value={this.state.email}/>
                     </div>
                     <div>
                        <label>Subject</label>
                        <input type="text" size="35" id="contactSubject" name="subject" onChange={this.handleChange} value={this.state.subject}/>
                     </div>
                     <div>
                        <label>Message <span className="required">*</span></label>
                        <textarea cols="50" rows="15" id="contactMessage" name="message" onChange={this.handleChange} value={this.state.message}></textarea>
                     </div>
                     <div>
                        <button className="submit"
                        disabled={this.state.sendingEmail || this.state.email === "" || this.state.name === "" || this.state.message === ""}
                        >Submit</button>
                        {
                           this.state.currentUIState === 1 && 
                           <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span>
                        }
                     </div>
                  </fieldset>
				   </form>
               {
                  this.state.currentUIState === 2 &&
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               }
               {
                  this.state.currentUIState === 3 &&
                  <div id="message-warning">
                     <i className="fa fa-check"></i>Your message was not sent, please try again!<br />
                  </div>
               }
            </div>


            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br />
						   {street} <br />
						   {city}, {state} {zip}<br />
                     <span><a href={`mailto:${email}`}>{email}</a></span><br />
						   <span>{phone}</span>
					   </p>
				   </div>

               {/* <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div> */}
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
