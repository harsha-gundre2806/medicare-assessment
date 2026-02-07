import React, { useState } from "react";
import emailjs from "emailjs-com";
import Loading from "../components/Loading";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // success or error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_jvc4g15",
        "template_1fefqkc",
        formData,
        "v9RuzKVtsco0RWUFH"
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setLoading(false);

        setTimeout(() => setStatus(""), 4000);
      })
      .catch(() => {
        setStatus("error");
        setLoading(false);

        setTimeout(() => setStatus(""), 4000);
      });
  };

  return (
    <section className="py-20">
      <div className="max-w-lg mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        {/* Success / Error Messages */}
        {status === "success" && (
          <div className="bg-green-100 text-green-700 p-3 rounded mb-4 text-center">
            Message sent successfully!
          </div>
        )}

        {status === "error" && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-center">
            Failed to send message. Try again.
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-3 rounded"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded w-full flex justify-center items-center gap-2"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {loading && <Loading />}
        </form>
      </div>
    </section>
  );
}
