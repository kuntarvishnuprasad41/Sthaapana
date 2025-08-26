"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Section } from "../../components/ui/section";
import { Heading, Text } from "../../components/ui/typography";
import { AnimatedContainer } from "../../components/ui/animated-container";
import { ArrowRight, MapPin } from "lucide-react";

const projects = [
  {
    name: "Banan Hotel Suites",
    location: "Tabuk",
    image: "/banan-hotel-suites-luxury-interior.png",
    category: "Hospitality",
  },
  {
    name: "Fituri Palace Hotel",
    location: "Riyadh",
    image: "/fituri-palace-hotel-elegant-lobby.png",
    category: "Hospitality",
  },
  {
    name: "Anan Hotel",
    location: "Riyadh",
    image: "/anan-hotel-modern-restaurant-design.png",
    category: "Hospitality",
  },
  {
    name: "Majmaah University",
    location: "Riyadh",
    image: "/majmaah-university-modern-corridor.png",
    category: "Educational",
  },
  {
    name: "Gulf Health Council",
    location: "Riyadh",
    image: "/gulf-health-council-office-interior.png",
    category: "Corporate",
  },
  {
    name: "Gloria Inn Hotel",
    location: "Riyadh",
    image: "/luxury-hotel-interior.png",
    category: "Hospitality",
  },
  {
    name: "Alakhdud Hotel",
    location: "Najran",
    image: "/modern-hotel-lobby.png",
    category: "Hospitality",
  },
  {
    name: "Ashad Hotel Suites",
    location: "Riyadh",
    image: "/hotel-suite-bedroom.png",
    category: "Hospitality",
  },
  {
    name: "Azhar Alnakhil",
    location: "Jeddah",
    image: "/residential-complex-interior.png",
    category: "Residential",
  },
  {
    name: "Najran Municipality",
    location: "Najran",
    image: "/government-office-interior.png",
    category: "Government",
  },
  {
    name: "Hudul Alatfal",
    location: "Riyadh",
    image: "/children-center-interior.png",
    category: "Healthcare",
  },
  {
    name: "Al Hayah Tower",
    location: "Riyadh",
    image: "/office-tower-interior.png",
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
            <p className="text-yellow-400 font-semibold text-lg mb-4">
              Projects
            </p>
          </AnimatedContainer>
          <AnimatedContainer animation="slide-up" delay={400}>
            <Heading level={1} className="mb-6">
              Trusted to transform
            </Heading>
            <Heading level={1} gradient className="mb-8">
              spaces across the region
            </Heading>
          </AnimatedContainer>
          <AnimatedContainer animation="fade-in" delay={600}>
            <Text size="lg" className="max-w-3xl mx-auto">
              From luxury hotels to universities, hospitals, and iconic
              developments, Riyash delivers furniture solutions that combine
              elegance, durability, and design excellence.
            </Text>
          </AnimatedContainer>
        </div>
      </Section>

      {/* Projects Grid Section */}
      <Section className="bg-black">
        {/* Category Filter */}
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
                {category}
              </Button>
            ))}
          </div>
        </AnimatedContainer>

        {/* Projects Grid */}
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
                <div className="group relative overflow-hidden rounded-lg bg-black border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 cursor-pointer transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-yellow-400/10">
                  <div className="aspect-[4/3] relative">
                    {/* <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    /> */}
                    <img
                      src={project.image}
                      alt={project.name}
                      onError={(e) =>
                        (e.currentTarget.src = "/placeholder.svg")
                      }
                      className=" group-hover:scale-105 transition-transform duration-500 w-full h-full object-"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-400/90 text-black text-xs font-semibold px-2 py-1 rounded transform group-hover:scale-110 transition-transform duration-200">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors mb-2">
                      {project.name}
                    </h3>
                    <div className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors">
                      <MapPin className="h-4 w-4 mr-2 group-hover:text-yellow-400 transition-colors" />
                      <span className="text-sm">{project.location}</span>
                    </div>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>

        {/* Project Count Display */}
        <AnimatedContainer animation="fade-in" delay={200}>
          <div className="text-center mt-8 mb-8">
            <Text className="text-gray-400">
              Showing {filteredProjects.length} of {projects.length} projects
              {activeFilter !== "All" && ` in ${activeFilter}`}
            </Text>
          </div>
        </AnimatedContainer>

        {/* Load More Button */}
        <AnimatedContainer animation="fade-in" delay={800}>
          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent px-8 transform hover:scale-105 transition-all duration-200"
            >
              Load More Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </AnimatedContainer>
      </Section>

      {/* Stats Section */}
      <Section>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <AnimatedContainer animation="slide-up" delay={100}>
            <div>
              <Heading level={2} gradient className="mb-2">
                150+
              </Heading>
              <Text className="text-gray-400">Projects Completed</Text>
            </div>
          </AnimatedContainer>
          <AnimatedContainer animation="slide-up" delay={200}>
            <div>
              <Heading level={2} gradient className="mb-2">
                50+
              </Heading>
              <Text className="text-gray-400">Happy Clients</Text>
            </div>
          </AnimatedContainer>
          <AnimatedContainer animation="slide-up" delay={300}>
            <div>
              <Heading level={2} gradient className="mb-2">
                12
              </Heading>
              <Text className="text-gray-400">Cities Served</Text>
            </div>
          </AnimatedContainer>
          <AnimatedContainer animation="slide-up" delay={400}>
            <div>
              <Heading level={2} gradient className="mb-2">
                8+
              </Heading>
              <Text className="text-gray-400">Years Experience</Text>
            </div>
          </AnimatedContainer>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section className=" bg-[url('/bg.svg')] bg-cover text-center">
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
