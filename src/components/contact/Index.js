import React, { Component } from 'react'
import './contact.scss'

export default class Index extends Component {
  render() {
    return (
      <div className="contact-main">
        <div className="contact-wrapper">
          <div className="contact-header">
            <h2 className="contact-title">Contact</h2>
            <p className="contact-subtitle">
              Have a question for me or want to work together?
            </p>
          </div>
          <div className="contact-from">
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
          </div>
        </div>
      </div>
    )
  }
}
