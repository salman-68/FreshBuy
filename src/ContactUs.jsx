import { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setError(false);

    try {
      const response = await axios.post("http://localhost:8989/api/contact/save", formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setError(true);
    }
  };

  return (
    <div className="contact-us-page container my-5">
      {/* Responsive row and column for adaptive sizing */}
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-lg border-0">
            {/* Card Header */}
            <div className="card-header bg-primary text-white text-center py-3">
              <h2 className="mb-0">Contact Us</h2>
              <p className="lead mb-0">We are here to assist you</p>
            </div>

            {/* Card Body */}
            <div className="card-body p-4">
              <p className="mb-4 text-center">
                At FreshMart, your satisfaction is our top priority. Please fill out the form below and one of our representatives will get in touch with you shortly.
              </p>

              {submitted && (
                <div className="alert alert-success" role="alert">
                  Your message has been sent successfully!
                </div>
              )}

              {error && (
                <div className="alert alert-danger" role="alert">
                  Failed to send message. Please try again later.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email<span className="text-danger">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject<span className="text-danger">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject of your message"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message<span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Write your message here"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Card Footer */}
            <div className="card-footer text-muted text-center py-3">
              FreshMart E-commerce | Committed to excellence
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
