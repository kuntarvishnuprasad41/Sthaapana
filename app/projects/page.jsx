"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Section } from "../../components/ui/section";
import { Heading, Text } from "../../components/ui/typography";
import { AnimatedContainer } from "../../components/ui/animated-container";
import { ArrowRight, MapPin } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import Link from "next/link";
import OnErrorImage from "@/components/OnErrorImage";

const projects = [
  {
    name: "Banan Hotel Suits",
    location: "Tabuk",
    image: "/p1.png",
    category: "Hospitality",
  },
  {
    name: "Fituri Palace Hotel",
    location: "Riyadh",
    image: "/p2.png",
    category: "Hospitality",
  },
  {
    name: "Anan Hotel",
    location: "Riyadh",
    image: "/p3.png",
    category: "Hospitality",
  },
  {
    name: "Majmaah University",
    location: "Riyadh",
    image: "/p4.png",
    category: "Educational",
  },
  {
    name: "Gulf Health Council",
    location: "Riyadh",
    image: "/p5.png",
    category: "Government",
  },
  {
    name: "Gloria Inn Hotel",
    location: "Riyadh",
    image: "/p6.png",
    category: "Hospitality",
  },
  {
    name: "Alakhdud Hotel",
    location: "Narjan",
    image: "/p7.png",
    category: "Hospitality",
  },
  {
    name: "Ashad Hotel Suites",
    location: "Riyadh",
    image: "/p8.png",
    category: "Hospitality",
  },
  {
    name: "Azhar Alnakhil",
    location: "Jeddah",
    image: "/p9.png",
    category: "Hospitality",
  },
  {
    name: "Anan Hotel",
    location: "Riyadh",
    image: "/p10.png",
    category: "Hospitality",
  },
  {
    name: "Narjan Municipality",
    location: "Narjan",
    image: "/p11.png",
    category: "Government",
  },
  {
    name: "Hudu' Alatlal",
    location: "Riyadh",
    image: "/p12.png",
    category: "Corporate",
  },
  {
    name: "Al Hayah Tower",
    location: "Riyadh",
    image: "/p12.png",
    category: "Corporate",
  },
];

const categories = [
  "All",
  "Hospitality",
  "Educational",
  "Corporate",
  "Residential",
  "Government",
  "Healthcare",
];

export default function ProjectsPage() {
  const { t, locale } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative min-h-screen flex items-center justify-center  bg-[url('/images/projects.png')] bg-cover">
        <div className="absolute inset-0 bg-[url('/images/project.png')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <AnimatedContainer animation="fade-in" delay={200}>
            {/* <p className="text-yellow-400 font-semibold text-lg mb-4">
              {t("projects.hero.tagline")}
            </p> */}
          </AnimatedContainer>
          <AnimatedContainer animation="slide-up" delay={400}>
            <Heading level={1} className="mb-0">
              {t("projects.hero.heading1")}
            </Heading>
            <Heading level={1} gradient className="mb-0">
              {t("projects.hero.heading2")}
            </Heading>
          </AnimatedContainer>
          <AnimatedContainer animation="fade-in" delay={600}>
            <Text size="lg" className="max-w-3xl mx-auto">
              {t("projects.hero.description")}
            </Text>
          </AnimatedContainer>
        </div>
      </Section>

      {/* Projects Grid Section */}
      <Section className="bg-black">
        <AnimatedContainer animation="fade-in">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveFilter(category)}
                variant={activeFilter === category ? "default" : "outline"}
                className={
                  activeFilter === category
                    ? "bg-yellow-400 text-black hover:bg-yellow-500 transform hover:scale-105 transition-all duration-200"
                    : "border-gray-600 text-gray-300 hover:border-yellow-400 hover:text-yellow-400 bg-transparent transform hover:scale-105 transition-all duration-200"
                }
              >
                {t(`projects.categories.${category}`)}
              </Button>
            ))}
          </div>
        </AnimatedContainer>

        <div className="transition-all duration-500 ease-in-out">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProjects.map((project, index) => (
              <AnimatedContainer
                key={`${project.name}-${activeFilter}`}
                animation="scale-in"
                delay={index * 50}
                className="animate-in fade-in slide-in-from-bottom-4 duration-500"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="group relative overflow-hidden bg-black border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-400/10">
                  <div className="aspect-[4/3] relative">
                    {/* <img
                      src={project.image}
                      alt={project.name}
                      onError={(e) =>
                        (e.currentTarget.src = "/placeholder.svg")
                      }
                      className="group-hover:scale-105 transition-transform duration-500 w-full h-full object-cover"
                    /> */}
                    <OnErrorImage project={project} />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-400/90 text-black font-sans text-xs font-semibold px-2 py-1 rounded transform group-hover:scale-110 transition-transform duration-200">
                        {t(`projects.categories.${project.category}`)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-sans text-white group-hover:text-yellow-400 transition-colors mb-2">
                      {project.name}
                    </h2>
                    <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                      <MapPin className="h-4 w-4 mr-2 group-hover:text-yellow-400 transition-colors" />
                      <h2 className="text-sm font-sans">{project.location}</h2>
                    </div>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </Section>

      <Section className=" bg-[url('/bg.svg')] bg-cover text-center">
        <AnimatedContainer animation="slide-up">
          <Heading level={1} gradient className="mb-0">
            {t("projects.cta.heading1")}
          </Heading>
          <Heading level={1} className="mb-0">
            {t("projects.cta.heading2")}
          </Heading>
          <Text size="lg" className="mb-12 max-w-2xl mx-auto">
            {t("projects.cta.description")}
          </Text>
          <Link href={locale === "ar" ? "/ar/contact" : "/contact"}>
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 text-lg font-semibold"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              {t("projects.cta.button")}
            </Button>
          </Link>
        </AnimatedContainer>
      </Section>
    </div>
  );
}
