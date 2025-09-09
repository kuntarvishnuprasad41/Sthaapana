"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    contact: "",
    message: "",
    website: "", // honeypot
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.bot) {
        setStatus("⚠️ Bot submission blocked.");
      } else if (result.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          location: "",
          contact: "",
          message: "",
          website: "",
        });
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Submission failed.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Honeypot (hidden) */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        style={{ display: "none" }}
        tabIndex="-1"
        autoComplete="off"
      />

      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="location"
        placeholder="Location"
        value={formData.location}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="contact"
        placeholder="Contact Number"
        value={formData.contact}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        rows="4"
      ></textarea>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {status && <p className="mt-2">{status}</p>}
    </form>
  );
}
