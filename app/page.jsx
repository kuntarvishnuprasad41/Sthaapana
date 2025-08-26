"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../components/ui/button";
import { Section, SectionHeader } from "../components/ui/section";
import { Heading, Text } from "../components/ui/typography";
import { AnimatedContainer } from "../components/ui/animated-container";
import { ArrowRight, Eye, Users, Palette } from "lucide-react";
import { useTranslation } from "../lib/i18n";
import ProjectsCarouselSection from "@/components/FeaturedProjects";

export default function HomePage() {
  const { t, locale } = useTranslation();

  const roomCategories = [
    {
      name: t("home.rooms.categories.livingRoom"),
      image: "/luxury-living-room-with-modern-furniture.png",
    },
    {
      name: t("home.rooms.categories.bedroom"),
      image: "/elegant-bedroom-with-luxury-furniture.png",
    },
    {
      name: t("home.rooms.categories.dining"),
      image: "/sophisticated-dining-room-setup.png",
    },
    {
      name: t("home.rooms.categories.office"),
      image: "/modern-office-workspace-furniture.png",
    },
    {
      name: t("home.rooms.categories.kitchen"),
      image: "/luxury-kitchen-with-modern-design.png",
    },
    {
      name: t("home.rooms.categories.hospitality"),
      image: "/hotel-lobby-luxury-furniture.png",
    },
  ];

  const featuredProjects = [
    {
      name: t("projects.items.bananHotelSuites"),
      location: t("projects.locations.tabuk"),
      image: "/luxury-hotel-suite.png",
    },
    {
      name: t("projects.items.majmaahUniversity"),
      location: t("projects.locations.riyadh"),
      image: "/university-modern-interior-design.png",
    },
    {
      name: t("projects.items.ananHotel"),
      location: t("projects.locations.riyadh"),
      image: "/hotel-restaurant-luxury-interior.png",
    },
    {
      name: t("projects.items.fituriPalaceHotel"),
      location: t("projects.locations.riyadh"),
      image: "/palace-hotel-luxury-bedroom.png",
    },
  ];

  const features = [
    {
      icon: Eye,
      title: t("home.features.visualize.title"),
      description: t("home.features.visualize.description"),
    },
    {
      icon: Users,
      title: t("home.features.guided.title"),
      description: t("home.features.guided.description"),
    },
    {
      icon: Palette,
      title: t("home.features.custom.title"),
      description: t("home.features.custom.description"),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/luxury-furniture-showroom-dark-elegant.png')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <AnimatedContainer animation="fade-in" delay={200}>
            <Heading level={1} className="mb-6 font-serif font-medium">
              {t("home.hero.title")}
            </Heading>
            <Heading level={1} gradient className="mb-8 font-serif font-medium">
              {t("home.hero.subtitle")}
            </Heading>
          </AnimatedContainer>
          <AnimatedContainer animation="slide-up" delay={400}>
            <Text size="lg" className="mb-12 max-w-2xl mx-auto font-light  ">
              {t("home.hero.description")}
            </Text>
          </AnimatedContainer>
          <AnimatedContainer animation="scale-in" delay={600}>
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 text-lg font-semibold font-serif"
            >
              {t("home.hero.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </AnimatedContainer>
        </div>
      </Section>

      {/* Lifestyle Section */}
      <Section className="">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedContainer animation="slide-up">
            <div>
              <Heading level={2} className="mb-4 font-serif font-medium">
                {t("home.lifestyle.title")}
              </Heading>
              <Heading
                level={2}
                gradient
                className="mb-8 font-serif font-medium"
              >
                {t("home.lifestyle.subtitle")}
              </Heading>
              <Text className="text-gray-300 leading-relaxed  ">
                {t("home.lifestyle.description")}
              </Text>
            </div>
          </AnimatedContainer>
          <AnimatedContainer animation="fade-in" delay={200}>
            <div className="relative">
              <Image
                src="/luxury-living-room-with-teal-sofa-and-elegant-deco.png"
                alt="Luxury living room"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </AnimatedContainer>
        </div>
      </Section>

      {/* Room Categories Section */}
      <div className="bg-[url('/bg.svg')] bg-no-repeat bg-center bg-cover">
        <Section>
          <SectionHeader
            title={t("home.rooms.title")}
            subtitle={t("home.rooms.subtitle")}
            description={t("home.rooms.description")}
            className="mb-16 "
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 font-serif font-medium ">
            {roomCategories.map((category, index) => (
              <AnimatedContainer
                key={category.name}
                animation="scale-in"
                delay={index * 100}
              >
                <div className="group relative overflow-hidden rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </Section>
      </div>

      {/* Shopping Experience Section */}
      <Section className="bg-black">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedContainer animation="fade-in">
            <div className="relative">
              <Image
                src="/luxury-furniture-showroom-gallery-style-interior.png"
                alt="Shopping experience"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </AnimatedContainer>
          <AnimatedContainer animation="slide-up" delay={200}>
            <div>
              <Heading level={2} className="mb-4 font-serif">
                {t("home.shopping.title")}
              </Heading>
              <Heading level={2} gradient className="mb-8 font-serif">
                {t("home.shopping.subtitle")}
              </Heading>
              <Text className="text-gray-300 mb-12 leading-relaxed">
                {t("home.shopping.description")}
              </Text>
              <div className="space-y-8">
                {features.map((feature, index) => (
                  <AnimatedContainer
                    key={feature.title}
                    animation="fade-in"
                    delay={300 + index * 100}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </AnimatedContainer>
                ))}
              </div>
            </div>
          </AnimatedContainer>
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section>
        <SectionHeader
          title={t("home.projects.title")}
          subtitle={t("home.projects.subtitle")}
          description={t("home.projects.description")}
          className="mb-16"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, index) => (
            <AnimatedContainer
              key={project.name}
              animation="scale-in"
              delay={index * 100}
            >
              <div className="group relative overflow-hidden rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer">
                <div className="aspect-square relative">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-yellow-400 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-300">{project.location}</p>
                </div>
              </div>
            </AnimatedContainer>
          ))}
        </div>
        <AnimatedContainer animation="fade-in" delay={600}>
          <div className="text-center mt-12">
            <Link href={locale === "ar" ? "/ar/projects" : "/projects"}>
              <Button
                variant="outline"
                size="lg"
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
              >
                {t("projects.hero.title")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </AnimatedContainer>
      </Section>

      <ProjectsCarouselSection featuredProjects={featuredProjects} t={t} />

      {/* Final CTA Section */}
      <Section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-center">
        <AnimatedContainer animation="slide-up">
          <Heading level={1} gradient className="mb-4 font-serif">
            {t("home.cta.title")}
          </Heading>
          <Heading level={1} className="mb-8 font-serif">
            {t("home.cta.subtitle")}
          </Heading>
          <Text size="lg" className="mb-12 max-w-2xl mx-auto">
            {t("home.cta.description")}
          </Text>
          <Link href={locale === "ar" ? "/ar/contact" : "/contact"}>
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 text-lg font-semibold"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              {t("home.cta.button")}
            </Button>
          </Link>
        </AnimatedContainer>
      </Section>
    </div>
  );
}
