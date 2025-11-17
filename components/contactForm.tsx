"use client";

import { useState } from "react";
import { useTranslation } from "@/lib/i18n"; // your translation hook

export default function ContactForm() {
  const { t, locale } = useTranslation();

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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
        setStatus("⚠️ " + t("form.botBlocked"));
      } else if (result.success) {
        setStatus("✅ " + t("form.success"));
        setFormData({
          name: "",
          email: "",
          location: "",
          contact: "",
          message: "",
          website: "",
        });
      } else {
        setStatus("❌ " + t("form.error"));
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ " + t("form.failed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4"
      dir={locale === "kan" ? "rtl" : "ltr"} // auto direction
    >
      {/* Honeypot (hidden) */}
      <input
        type="text"
        name="website"
        value={formData.website}
        onChange={handleChange}
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      <input
        type="text"
        name="name"
        placeholder={t("form.name")}
        value={formData.name}
        onChange={handleChange}
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="email"
        name="email"
        placeholder={t("form.email")}
        value={formData.email}
        onChange={handleChange}
        required
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="location"
        placeholder={t("form.location")}
        value={formData.location}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <input
        type="text"
        name="contact"
        placeholder={t("form.contact")}
        value={formData.contact}
        onChange={handleChange}
        className="border p-2 rounded w-full"
      />
      <textarea
        name="message"
        placeholder={t("form.message")}
        value={formData.message}
        onChange={handleChange}
        className="border p-2 rounded w-full"
        rows={4}
      ></textarea>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#009BDE] text-black px-4 py-2 rounded"
      >
        {isSubmitting ? t("form.sending") : t("form.send")}
      </button>

      {status && <p className="mt-2">{status}</p>}
    </form>
  );
}
