"use client";

import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Section } from "../../components/ui/section";
import { Heading, Text } from "../../components/ui/typography";
import { AnimatedContainer } from "../../components/ui/animated-container";
import { ArrowRight, MapPin, Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import ContactForm from "@/components/contactForm";

export default function ContactPage({ locale }) {
  const { t } = useTranslation();

  const contactInfo = [
    {
      icon: MapPin,
      title: t("contact.visit1.title"),
      description: t("contact.visit1.description"),
      details: t("contact.visit1.details"),
    },
    {
      icon: Phone,
      title: t("contact.call.title"),
      description: t("contact.call.description"),
      details: t("contact.call.details"),
    },
    {
      icon: Mail,
      title: t("contact.email.title"),
      description: t("contact.email.description"),
      details: t("contact.email.details"),
    },
    {
      icon: Clock,
      title: t("contact.hours.title"),
      description: t("contact.hours.description"),
      details: t("contact.hours.details"),
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    location: "",
    contact: "",
    message: "",
    website: "", // honeypot field
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null); // success | error | bot

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
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.bot) {
        setStatus("bot");
      } else if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          location: "",
          contact: "",
          message: "",
          website: "",
        });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      {/* Contact Form Section */}
      <Section className="bg-black">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <AnimatedContainer animation="slide-up">
            <div>
              <Heading level={2} className="mb-0">
                {t("contact.info.title")}
              </Heading>
              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <AnimatedContainer
                    key={info.title}
                    animation="fade-in"
                    delay={index * 100}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-[#009BDE]/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-[#009BDE]" />
                      </div>
                      <div>
                        <h4 className="text-lg font-normal text-white mb-2">
                          {info.title}
                        </h4>
                        <p className="text-gray-400 mb-2">{info.description}</p>
                        <p className="text-[#009BDE] font-medium">
                          {info.title == "اتصل xcasdsad" ? (
                            info.details
                          ) : (
                            <span
                              dir="ltr"
                              style={{
                                direction: "ltr",
                                unicodeBidi: "bidi-override",
                              }}
                            >
                              {info.details}
                            </span>
                          )}
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
              <ContactForm />
            </div>
          </AnimatedContainer>
        </div>
      </Section>

      {/* Map Section */}
      {/* <Section>
        <AnimatedContainer animation="fade-in">
          <div className="text-center mb-12">
            <Heading level={2} className="mb-0">
              {t("contact.map.title1")}
            </Heading>
            <Heading level={2} gradient className="mb-0">
              {t("contact.map.title2")}
            </Heading>
            <Text className="text-gray-300 max-w-2xl mx-auto">
              {t("contact.map.description")}
            </Text>
          </div>
          <div className="bg-gray-800 rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-[#009BDE] mx-auto mb-4" />
              <Text className="text-gray-400">
                {t("contact.map.comingSoon")}
              </Text>
              <Text className="text-sm text-gray-500 mt-2">
                {t("contact.map.locations")}
              </Text>
            </div>
          </div>
        </AnimatedContainer>
      </Section> */}

      {/* Final CTA Section */}
      <Section className="text-center bg-[url('/bg.svg')] bg-cover">
        <AnimatedContainer animation="slide-up">
          <Heading level={1} gradient className="mb-0">
            {t("contact.cta.title1")}
          </Heading>
          <Heading level={1} className="mb-0">
            {t("contact.cta.title2")}
          </Heading>
          <Text size="lg" className="mb-12 max-w-2xl mx-auto">
            {t("contact.cta.description")}
          </Text>
          <Button
            size="lg"
            className="bg-[#009BDE] text-black hover:bg-[#009BDE] px-8 py-4 text-lg font-normal"
          >
            <ArrowRight className="mr-2 h-5 w-5" />
            {t("contact.cta.button")}
          </Button>
        </AnimatedContainer>
      </Section>
    </div>
  );
}
