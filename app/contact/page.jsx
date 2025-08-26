"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Section } from "../../components/ui/section";
import { Heading, Text } from "../../components/ui/typography";
import { AnimatedContainer } from "../../components/ui/animated-container";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Showrooms",
    description:
      "Experience our furniture collections in person across multiple locations in the region.",
    details: "Riyadh • Jeddah • Tabuk • Najran",
  },
  {
    icon: Phone,
    title: "Call Us",
    description:
      "Speak directly with our design consultants for personalized assistance.",
    details: "+966 11 234 5678",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us your inquiries and we'll respond within 24 hours.",
    details: "hello@riyash.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "We're here to help you create your perfect space.",
    details: "Sun-Thu: 9AM-9PM • Fri-Sat: 2PM-10PM",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    contact: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      location: "",
      contact: "",
      message: "",
    });

    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative min-h-screen flex items-center justify-center  bg-[url('/images/contact-us.png')] bg-cover">
        <div className="absolute inset-0 bg-[url('/elegant-black-leather-chairs-luxury-meeting.png')] bg-cover bg-center opacity-40" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <AnimatedContainer animation="fade-in" delay={200}>
            <p className="text-yellow-400 font-semibold text-lg mb-4">
              Contact us
            </p>
          </AnimatedContainer>
          <AnimatedContainer animation="slide-up" delay={400}>
            <Heading level={1} className="mb-6">
              Let's create your
            </Heading>
            <Heading level={1} gradient className="mb-8">
              space together
            </Heading>
          </AnimatedContainer>
          <AnimatedContainer animation="fade-in" delay={600}>
            <Text size="lg" className="max-w-3xl mx-auto">
              Whether you're furnishing a single room, a new home, or an entire
              project, our team is here to guide you.
            </Text>
          </AnimatedContainer>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section className="bg-gray-900">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <AnimatedContainer animation="slide-up">
            <div>
              <Heading level={2} className="mb-8">
                Get in touch
              </Heading>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <AnimatedContainer
                    key={info.title}
                    animation="fade-in"
                    delay={index * 100}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {info.title}
                        </h4>
                        <p className="text-gray-400 mb-2">{info.description}</p>
                        <p className="text-yellow-400 font-medium">
                          {info.details}
                        </p>
                      </div>
                    </div>
                  </AnimatedContainer>
                ))}
              </div>
            </div>
          </AnimatedContainer>

          {/* Contact Form */}
          <AnimatedContainer animation="slide-up" delay={200}>
            <div className="bg-black/50 border border-gray-700 rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Email address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Location
                  </label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Enter your location"
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Contact
                  </label>
                  <Input
                    id="contact"
                    name="contact"
                    type="tel"
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="Enter your contact number"
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-yellow-400"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter your message"
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400 focus:border-yellow-400 focus:ring-yellow-400 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-black hover:bg-yellow-500 py-3 text-lg font-semibold disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>

                <p className="text-sm text-gray-400 leading-relaxed">
                  By pressing the submit button, I agree to Riyash contacting me
                  by email. I also understand that any information I've shared
                  in this form is subject to Riyash privacy policy.
                </p>
              </form>
            </div>
          </AnimatedContainer>
        </div>
      </Section>

      {/* Map Section */}
      <Section>
        <AnimatedContainer animation="fade-in">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-4">
              Visit our
            </Heading>
            <Heading level={2} gradient className="mb-8">
              showrooms
            </Heading>
            <Text className="text-gray-300 max-w-2xl mx-auto">
              Experience our furniture collections in person at our showrooms
              across the region. Each location offers the full Riyash gallery
              experience.
            </Text>
          </div>
          <div className="bg-gray-800 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-yellow-400 mx-auto mb-4" />
              <Text className="text-gray-400">Interactive map coming soon</Text>
              <Text className="text-sm text-gray-500 mt-2">
                Visit our showrooms in Riyadh, Jeddah, Tabuk, and Najran
              </Text>
            </div>
          </div>
        </AnimatedContainer>
      </Section>

      {/* Final CTA Section */}
      <Section className="  text-center  bg-[url('/bg.svg')] bg-cover">
        <AnimatedContainer animation="slide-up">
          <Heading level={1} gradient className="mb-4">
            LET'S DESIGN YOUR
          </Heading>
          <Heading level={1} className="mb-8">
            NEXT SPACE TOGETHER
          </Heading>
          <Text size="lg" className="mb-12 max-w-2xl mx-auto">
            Whether you're furnishing a single room or a full-scale project,
            Riyash is here to guide, create, and deliver.
          </Text>
          <Button
            size="lg"
            className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 text-lg font-semibold"
          >
            <ArrowRight className="mr-2 h-5 w-5" />
            Request a Consultation
          </Button>
        </AnimatedContainer>
      </Section>
    </div>
  );
}
