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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const { t, locale } = useTranslation();

  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(timeout);
  }, []);

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
      name: "Banan Hotel Suites",
      location: "Tabuk",
      image: "/luxury-hotel-suite.png",
    },
    {
      name: "Majmaah University",
      location: "Riyadh",
      image: "/university-modern-interior-design.png",
    },
    {
      name: "Anan Hotel",
      location: "Riyadh",
      image: "/hotel-restaurant-luxury-interior.png",
    },
    {
      name: "Fituri Palace Hotel",
      location: "Riyadh",
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

  // return (
  //   <div className="min-h-screen">
  //     {/* Hero Section */}
  //     <Section className="relative min-h-screen flex items-center justify-center  bg-[url('/images/hero.png')] bg-cover">
  //       <div className="absolute inset-0  bg-cover bg-center opacity-30" />
  //       <div className="relative z-10 text-center max-w-4xl mx-auto">
  //         <AnimatedContainer animation="fade-in" delay={200}>
  //           <Heading level={1} className="mb-0 font-serif font-medium">
  //             {t("home.hero.title")}
  //           </Heading>
  //           <Heading level={1} gradient className="mb-0 font-serif font-medium">
  //             {t("home.hero.subtitle")}
  //           </Heading>
  //         </AnimatedContainer>
  //         <AnimatedContainer animation="slide-up" delay={400}>
  //           <Text size="lg" className="mb-12 max-w-2xl mx-auto font-light  ">
  //             {t("home.hero.description")}
  //           </Text>
  //         </AnimatedContainer>
  //         <AnimatedContainer animation="scale-in" delay={600}>
  //           <Button
  //             size="lg"
  //             className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 tfont-normal font-serif"
  //           >
  //             {t("home.hero.cta")}
  //             <ArrowRight className="ml-2 h-5 w-5" />
  //           </Button>
  //         </AnimatedContainer>
  //       </div>
  //     </Section>

  //     {/* Lifestyle Section */}
  //     {/* <Section className="">
  //       <div className="grid lg:grid-cols-2 gap-12 items-center">
  //         <AnimatedContainer animation="slide-up">
  //           <div>
  //             <Heading level={2} className="mb-0 font-serif font-medium">
  //               {t("home.lifestyle.title")}
  //             </Heading>
  //             <Heading
  //               level={2}
  //               gradient
  //               className="mb-0 font-serif font-medium"
  //             >
  //               {t("home.lifestyle.subtitle")}
  //             </Heading>
  //             <Text className="text-gray-300 leading-relaxed  ">
  //               {t("home.lifestyle.description")}
  //             </Text>
  //           </div>
  //         </AnimatedContainer>
  //         <AnimatedContainer animation="fade-in" delay={200}>
  //           <div className="relative flex justify-end ">
  //             <Image
  //               src="/images/hero2.png"
  //               alt="Luxury living room"
  //               width={800}
  //               height={800}
  //               className="  shadow-2xl"
  //             />
  //           </div>
  //         </AnimatedContainer>
  //       </div>
  //     </Section> */}

  //     <Section className="!px-0 !m-0 min-h-screen">
  //       {" "}
  //       <div className="flex flex-col lg:flex-row justify-end items-stretch w-full">
  //         <AnimatedContainer
  //           animation="slide-up"
  //           className="flex-1 flex items-center"
  //         >
  //           <div className="w-full px-6">
  //             <Heading level={2} className="mb-0 font-serif font-medium">
  //               {t("home.lifestyle.title")}
  //             </Heading>
  //             <Heading
  //               level={2}
  //               gradient
  //               className="mb-0 font-serif font-medium"
  //             >
  //               {t("home.lifestyle.subtitle")}
  //             </Heading>
  //             <Text className="text-gray-300 leading-relaxed">
  //               {t("home.lifestyle.description")}
  //             </Text>
  //           </div>
  //         </AnimatedContainer>

  //         <AnimatedContainer
  //           animation="fade-in"
  //           delay={200}
  //           className="flex-1 relative"
  //         >
  //           <div className="h-full w-full flex justify-end">
  //             <img
  //               src="/images/hero2.png"
  //               alt="Luxury living room"
  //               className="h-full w-auto object-cover shadow-2xl"
  //             />
  //           </div>
  //         </AnimatedContainer>
  //       </div>
  //     </Section>

  //     {/* Room Categories Section */}
  //     <div className="bg-[url('/bg.svg')] bg-no-repeat bg-center bg-cover">
  //       <Section>
  //         <SectionHeader
  //           title={t("home.rooms.title")}
  //           subtitle={t("home.rooms.subtitle")}
  //           description={t("home.rooms.description")}
  //           className="mb-16 "
  //         />
  //         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 font-serif font-medium ">
  //           {roomCategories.map((category, index) => (
  //             <AnimatedContainer
  //               key={category.name}
  //               animation="scale-in"
  //               delay={index * 100}
  //             >
  //               <div className="group relative overflow-hidden   bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer">
  //                 <div className="aspect-[4/3] relative">
  //                   <Image
  //                     src={category.image || "/placeholder.svg"}
  //                     alt={category.name}
  //                     fill
  //                     className="object-cover group-hover:scale-105 transition-transform duration-300"
  //                   />
  //                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
  //                 </div>
  //                 <div className="absolute bottom-0 left-0 right-0 p-6">
  //                   <h3 className="text-xl font-normal text-white group-hover:text-yellow-400 transition-colors">
  //                     {category.name}
  //                   </h3>
  //                 </div>
  //               </div>
  //             </AnimatedContainer>
  //           ))}
  //         </div>
  //       </Section>
  //     </div>

  //     <SectionHeader
  //       title={"Shopping "}
  //       subtitle={"reimagined"}
  //       description={
  //         "Buying furniture with Riyash is designed as an experience, not just a purchase. Our showrooms are curated like galleries, giving you the chance to walk through complete concepts. With guided tours, you’ll see how designs come to life, helping you choose with confidence and joy."
  //       }
  //       className="mb-16"
  //     />

  //     {/* Featured Projects Section */}
  //     {/* <Section>
  //       <SectionHeader
  //         title={t("home.projects.title")}
  //         subtitle={t("home.projects.subtitle")}
  //         description={t("home.projects.description")}
  //         className="mb-16"
  //       />
  //       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  //         {featuredProjects.map((project, index) => (
  //           <AnimatedContainer
  //             key={project.name}
  //             animation="scale-in"
  //             delay={index * 100}
  //           >
  //             <div className="group relative overflow-hidden rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer">
  //               <div className="aspect-square relative">
  //                 <Image
  //                   src={project.image || "/placeholder.svg"}
  //                   alt={project.name}
  //                   fill
  //                   className="object-cover group-hover:scale-105 transition-transform duration-300"
  //                 />
  //                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
  //               </div>
  //               <div className="absolute bottom-0 left-0 right-0 p-4">
  //                 <h3 className="tfont-normal text-white group-hover:text-yellow-400 transition-colors">
  //                   {project.name}
  //                 </h3>
  //                 <p className="text-sm text-gray-300">{project.location}</p>
  //               </div>
  //             </div>
  //           </AnimatedContainer>
  //         ))}
  //       </div>
  //       <AnimatedContainer animation="fade-in" delay={600}>
  //         <div className="text-center mt-12">
  //           <Link href={locale === "ar" ? "/ar/projects" : "/projects"}>
  //             <Button
  //               variant="outline"
  //               size="lg"
  //               className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
  //             >
  //               {t("projects.hero.title")}
  //               <ArrowRight className="ml-2 h-5 w-5" />
  //             </Button>
  //           </Link>
  //         </div>
  //       </AnimatedContainer>
  //     </Section> */}

  //     <ProjectsCarouselSection featuredProjects={featuredProjects} t={t} />

  //     <Section>
  //       <SectionHeader
  //         title={t("home.projects.title")}
  //         subtitle={t("home.projects.subtitle")}
  //         description={t("home.projects.description")}
  //         className="mb-8"
  //       />
  //       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  //         {featuredProjects.map((project, index) => (
  //           <AnimatedContainer
  //             key={project.name}
  //             animation="scale-in"
  //             delay={index * 100}
  //           >
  //             <div className="group relative overflow-hidden  bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer">
  //               <div className="aspect-square relative">
  //                 <Image
  //                   src={project.image || "/placeholder.svg"}
  //                   alt={project.name}
  //                   fill
  //                   className="object-cover group-hover:scale-105 transition-transform duration-300"
  //                 />
  //                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
  //               </div>
  //               <div className="absolute bottom-0 left-0 right-0 p-4">
  //                 <h3 className="tfont-normal text-white group-hover:text-yellow-400 transition-colors">
  //                   {project.name}
  //                 </h3>
  //                 <p className="text-sm text-gray-300">{project.location}</p>
  //               </div>
  //             </div>
  //           </AnimatedContainer>
  //         ))}
  //       </div>
  //       <AnimatedContainer animation="fade-in" delay={600}>
  //         <div className="text-center mt-12">
  //           <Link href={locale === "ar" ? "/ar/projects" : "/projects"}>
  //             <Button
  //               variant="outline"
  //               size="lg"
  //               className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black bg-transparent"
  //             >
  //               {t("projects.hero.title")}
  //               <ArrowRight className="ml-2 h-5 w-5" />
  //             </Button>
  //           </Link>
  //         </div>
  //       </AnimatedContainer>
  //     </Section>

  //     {/* Shopping Experience Section */}
  //     {/* <Section className="bg-black">
  //       <div className="grid lg:grid-cols-2 gap-12 items-center">
  //         <AnimatedContainer animation="fade-in">
  //           <div className="relative">
  //             <Image
  //               src="/luxury-furniture-showroom-gallery-style-interior.png"
  //               alt="Shopping experience"
  //               width={800}
  //               height={600}
  //               className=" shadow-2xl"
  //             />
  //           </div>
  //         </AnimatedContainer>
  //         <AnimatedContainer animation="slide-up" delay={200}>
  //           <div>
  //             <Heading level={2} className="mb-0 font-serif">
  //               {t("home.shopping.title")}
  //             </Heading>
  //             <Heading level={2} gradient className="mb-0 font-serif">
  //               {t("home.shopping.subtitle")}
  //             </Heading>
  //             <Text className="text-gray-300 mb-12 leading-relaxed">
  //               {t("home.shopping.description")}
  //             </Text>
  //             <div className="space-y-8">
  //               {features.map((feature, index) => (
  //                 <AnimatedContainer
  //                   key={feature.title}
  //                   animation="fade-in"
  //                   delay={300 + index * 100}
  //                 >
  //                   <div className="flex items-start space-x-4">
  //                     <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center">
  //                       <feature.icon className="h-6 w-6 text-yellow-400" />
  //                     </div>
  //                     <div>
  //                       <h4 className="tfont-normal text-white mb-2">
  //                         {feature.title}
  //                       </h4>
  //                       <p className="text-gray-400 leading-relaxed">
  //                         {feature.description}
  //                       </p>
  //                     </div>
  //                   </div>
  //                 </AnimatedContainer>
  //               ))}
  //             </div>
  //           </div>
  //         </AnimatedContainer>
  //       </div>
  //     </Section> */}
  //     {/* Final CTA Section */}
  //     <Section className=" bg-[url('/bg.svg')] bg-cover text-center">
  //       <AnimatedContainer animation="slide-up">
  //         <Heading level={1} gradient className="mb-0 font-serif">
  //           {t("home.cta.title")}
  //         </Heading>
  //         <Heading level={1} className="mb-0 font-serif">
  //           {t("home.cta.subtitle")}
  //         </Heading>
  //         <Text size="lg" className="mb-12 max-w-2xl mx-auto">
  //           {t("home.cta.description")}
  //         </Text>
  //         <Link href={locale === "ar" ? "/ar/contact" : "/contact"}>
  //           <Button
  //             size="lg"
  //             className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 tfont-normal"
  //           >
  //             <ArrowRight className="mr-2 h-5 w-5" />
  //             {t("home.cta.button")}
  //           </Button>
  //         </Link>
  //       </AnimatedContainer>
  //     </Section>
  //   </div>
  // );
  const router = useRouter();
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero.png"
            alt="Hero background"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div
          className={`relative z-20 text-center max-w-4xl mx-auto transform transition-opacity transition-transform duration-700 ${
            heroVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          } [backface-visibility:hidden] [transform:translateZ(0.1px)]`}
        >
          <Heading level={1} className="mb-0 font-serif font-medium">
            {t("home.hero.title")}
          </Heading>
          <Heading level={1} gradient className="mb-0 font-serif font-medium">
            {t("home.hero.subtitle")}
          </Heading>
          <Text size="lg" className="mb-12 max-w-2xl mx-auto font-light">
            {t("home.hero.description")}
          </Text>
          <Link href={locale === "ar" ? "/ar/contact" : "/contact"}>
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 font-normal font-serif"
              // onClick={() => router.push("/projects")}
            >
              {t("home.hero.cta")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* Lifestyle Section */}
      <Section className="!px-0 !m-0 min-h-screen">
        <div className="flex flex-col lg:flex-row justify-end items-stretch w-full">
          <AnimatedContainer
            animation="slide-up"
            className="flex-1 flex items-center"
          >
            <div className="w-full px-6">
              <Heading level={2} className="mb-0 font-serif font-medium">
                {t("home.lifestyle.title")}
              </Heading>
              <Heading
                level={2}
                gradient
                className="mb-0 font-serif font-medium"
              >
                {t("home.lifestyle.subtitle")}
              </Heading>
              <Text className="text-gray-300 leading-relaxed">
                {t("home.lifestyle.description")}
              </Text>
            </div>
          </AnimatedContainer>
          <AnimatedContainer
            animation="fade-in"
            delay={200}
            className="flex-1 relative"
          >
            <div className="h-full w-full flex justify-end">
              <Image
                src="/images/hero2.png"
                alt="Luxury living room"
                width={800}
                height={800}
                className="object-cover shadow-2xl"
              />
            </div>
          </AnimatedContainer>
        </div>
      </Section>

      {/* Room Categories */}
      <div className="bg-[url('/bg.svg')] bg-no-repeat bg-center bg-cover">
        <Section>
          <SectionHeader
            title={t("home.rooms.title")}
            subtitle={t("home.rooms.subtitle")}
            description={t("home.rooms.description")}
            className="mb-16"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 font-serif font-medium">
            {roomCategories.map((category, index) => (
              <AnimatedContainer
                key={category.name}
                animation="scale-in"
                delay={index * 100}
              >
                <div className="group relative overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-normal text-white group-hover:text-yellow-400 transition-colors">
                      {category.name}
                    </h3>
                  </div>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </Section>
      </div>

      {/* Shopping Experience Header */}
      <SectionHeader
        title="Shopping"
        subtitle="reimagined"
        description="Buying furniture with Riyash is designed as an experience..."
        className="mb-16"
      />

      {/* Featured Projects */}
      <ProjectsCarouselSection featuredProjects={featuredProjects} t={t} />

      <Section>
        <SectionHeader
          title={t("home.projects.title")}
          subtitle={t("home.projects.subtitle")}
          description={t("home.projects.description")}
          className="mb-8"
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProjects.map((project, index) => (
            <AnimatedContainer
              key={project.name}
              animation="scale-in"
              delay={index * 100}
            >
              <div className="group relative overflow-hidden bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer">
                <div className="aspect-square relative">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white group-hover:text-yellow-400 transition-colors">
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
                className="border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                {t("projects.hero.title")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </AnimatedContainer>
      </Section>

      {/* Final CTA */}
      <Section className="bg-[url('/bg.svg')] bg-cover text-center">
        <AnimatedContainer animation="slide-up">
          <Heading level={1} gradient className="mb-0 font-serif">
            {t("home.cta.title")}
          </Heading>
          <Heading level={1} className="mb-0 font-serif">
            {t("home.cta.subtitle")}
          </Heading>
          <Text size="lg" className="mb-12 mx-auto max-w-2xl">
            {t("home.cta.description")}
          </Text>
          <Link href={locale === "ar" ? "/ar/contact" : "/contact"}>
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 font-normal"
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
