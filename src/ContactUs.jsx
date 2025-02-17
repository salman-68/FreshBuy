import { useState } from "react";
import axios from "axios";

const ContactUs = () => {
  const API_BASE_URL = "https://1c06-2409-40f0-155-e8c2-d9a2-2b2b-2e65-f002.ngrok-free.app"; // Ensure this URL is correct

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

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
    setError(null);
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/contact/save`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      if (response.status === 200) {
        setSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" }); // Reset form
      }
    } catch (err) {
      console.error("❌ Error submitting form:", err);

      if (err.response) {
        console.error("Server Response:", err.response.data);
        setError(err.response.data.message || "Failed to send message. Please try again.");
      } else if (err.request) {
        console.error("❗ No response received from server");
        setError("Could not connect to the server. Please try again later.");
      } else {
        setError("An unexpected error occurred.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-us-page container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card shadow-lg border-0">
            <div className="card-header bg-primary text-white text-center py-3">
              <h2 className="mb-0">Contact Us</h2>
              <p className="lead mb-0">We are here to assist you</p>
            </div>

            <div className="card-body p-4">
              <p className="mb-4 text-center">
                At FreshMart, your satisfaction is our top priority. Please fill out the form below, and we will get in touch with you shortly.
              </p>

              {submitted && (
                <div className="alert alert-success" role="alert">
                  ✅ Your message has been sent successfully!
                </div>
              )}

              {error && (
                <div className="alert alert-danger" role="alert">
                  ❌ {error}
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
                  <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </form>
            </div>

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
