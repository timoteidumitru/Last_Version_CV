import React from 'react'
import TopNav from "../about/TopNav";
import Footer from "../about/Footer";
import './contact.scss'

const Index = () => {
  return (
    <div className="contact-main">
      <div className="contact-wrapper">
        <TopNav />
        <div className="contact-header">
          <h2 className="contact-title">Contact</h2>
          <p className="contact-subtitle">
            Have a question or want to work together?
          </p>
        </div>
        <div className="contact-from">
          <div className="contact-message">
            <input 
              type="text" 
              className="contact-form-name"
              placeholder="Name"
              />
            <input 
              type="text" 
              className="contact-form-email"
              placeholder="Your email"
              />
            <textarea 
              className="contact-form-textarea"
              placeholder="Write your message here..."
              rows="6"
              cols="35"
              >
            </textarea>
            <button className="contact-form-button">
              Submit
            </button>
          </div>
          <div className="contact-map">
            <iframe title="my location" width='500px' height='350px' id='mapcanvas' src='https://maps.google.com/maps?q=London,%20United%20Kingdom&Roadmap&z=10&ie=UTF8&iwloc=&output=embed' frameBorder='0' scrolling='no' marginHeight='0' marginWidth='0' />
          </div> 
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Index