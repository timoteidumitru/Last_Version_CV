import React, { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import TopNav from "../about/TopNav";
import Footer from "../about/Footer";
import "./contact.scss";

const Index = () => {
  const form = useRef();
  const [buttonDisable, setButtonDisable] = useState(false);

  const formik = useFormik({
    initialValues: {
      userName: "",
      userEmail: "",
      userMessage: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .min(3, "Name too short!")
        .max(50, "Name too long!")
        .required("Name Required!"),
      userEmail: Yup.string()
        .email("Invalid email adress")
        .required("Email Required!"),
      userMessage: Yup.string()
        .min(10, "Message too short!")
        .max(500, "Message too long!")
        .required("Message Required.."),
    }),
    onSubmit: () => {
      emailjs
        .sendForm(
          "service_ihmdmlv",
          "template_9vlhenn",
          form.current,
          "user_uwMmcZbrnRIFC5HlYWFLp"
        )
        .then(
          (result) => {
            console.log("Message send status: " + result.text);
          },
          (error) => {
            console.log("Message send status: " + error.text);
          }
        );
      setButtonDisable(true);
      form.current.userName.value = "";
      form.current.userEmail.value = "";
      form.current.userMessage.value = "";
    },
  });

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
          <form
            ref={form}
            onSubmit={formik.handleSubmit}
            className="contact-message"
          >
            {buttonDisable ? (
              <p
                style={{
                  textAlign: "center",
                  color: "#16d216",
                  fontSize: "1.5em",
                  fontWeight: "600",
                  marginTop: "0",
                }}
              >
                Message sent successfully!
              </p>
            ) : (
              ""
            )}
            {formik.errors.userName && formik.touched.userName ? (
              <div className="unsuccess-msg">{formik.errors.userName}</div>
            ) : null}
            <input
              name="userName"
              id="userName"
              type="text"
              autoComplete="off"
              className="contact-form-name"
              placeholder="Enter a name.."
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userName}
            />
            {formik.errors.userEmail && formik.touched.userEmail ? (
              <div className="unsuccess-msg">{formik.errors.userEmail}</div>
            ) : null}
            <input
              name="userEmail"
              id="userEmail"
              type="email"
              autoComplete="off"
              placeholder="Enter email address.."
              className="contact-form-email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userEmail}
            />
            {formik.errors.userMessage && formik.touched.userMessage ? (
              <div className="unsuccess-msg">{formik.errors.userMessage}</div>
            ) : null}
            <textarea
              name="userMessage"
              id="userMessage"
              type="text"
              autoComplete="off"
              className="contact-form-textarea"
              placeholder="Write your message here..."
              rows="6"
              cols="35"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.userMessage}
            />
            <button
              type="submit"
              disabled={
                buttonDisable ||
                (formik.errors.userName &&
                  formik.errors.userEmail &&
                  formik.errors.userMessage)
              }
              className="contact-form-button"
            >
              Submit
            </button>
          </form>
          <div className="contact-map">
            <iframe
              title="my location"
              width="500px"
              height="350px"
              id="mapcanvas"
              src="https://maps.google.com/maps?q=London,%20United%20Kingdom&Roadmap&z=10&ie=UTF8&iwloc=&output=embed"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
