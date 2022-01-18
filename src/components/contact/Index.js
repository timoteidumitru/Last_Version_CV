import React, { useRef } from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";
import TopNav from "../about/TopNav";
import Footer from "../about/Footer";
import "./contact.scss";

const Index = () => {
  const form = useRef();
  // const [confirmMsg, setConfirmMsg] = useState("");

  const SignupSchema = Yup.object().shape({
    user_name: Yup.string()
      .min(3, "Too Short name!")
      .max(50, "Too Long name!")
      .required("Name Required"),
    user_email: Yup.string()
      .email("Invalid email adress")
      .required("Email Required"),
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ihmdmlv",
        "template_9vlhenn",
        e.target,
        "user_uwMmcZbrnRIFC5HlYWFLp"
      )
      .then(
        (result) => {
          console.log(result.text);
          // if (result.text === "OK") {
          //   setConfirmMsg("Message was sent successfully!");
          // } else {
          //   setConfirmMsg(
          //     "Message was not sent successfully, please try again."
          //   );
          // }
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

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
          <Formik
            initialValues={{ user_name: "", user_email: "" }}
            validationSchema={SignupSchema}
          >
            {({ isSubmitting, errors, touched }) => (
              <form ref={form} onSubmit={sendEmail} className="contact-message">
                {/* {confirmMsg && (
                  <p
                    className={
                      confirmMsg.includes("successfuly")
                        ? "unsuccess-msg"
                        : "success-msg"
                    }
                  >
                    {confirmMsg}
                  </p>
                )} */}
                {errors.user_name && touched.user_name ? (
                  <div className="unsuccess-msg">{errors.user_name}</div>
                ) : null}
                <Field
                  name="user_name"
                  className="contact-form-name"
                  placeholder="Enter a name.."
                />
                {/* <input
                  type="text"
                  className="contact-form-name"
                  placeholder="Enter a name.."
                  name="user_name"
                /> */}
                {/* <ErrorMessage
                  name="user_email"
                  component="div"
                  className={
                    confirmMsg.includes("successfuly")
                      ? "unsuccess-msg"
                      : "success-msg"
                  }
                /> */}
                {errors.user_email && touched.user_email ? (
                  <div className="unsuccess-msg">{errors.user_email}</div>
                ) : null}
                <Field
                  name="user_email"
                  placeholder="Enter email address.."
                  className="contact-form-email"
                  type="email"
                />
                {/* <input
                  type="text"
                  className="contact-form-email"
                  placeholder="Your email"
                  name="user_email"
                /> */}
                <textarea
                  name="message"
                  className="contact-form-textarea"
                  placeholder="Write your message here..."
                  rows="6"
                  cols="35"
                ></textarea>
                <button className="contact-form-button">Submit</button>
              </form>
            )}
          </Formik>
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
