"use client";

import { useCallback, useEffect, useState, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useInView } from "framer-motion";
import { AnimatedContainer } from "./ui/animated-container";
// import AnimatedContainer from "@/components/ui/animated-container";
import { Section, SectionHeader } from "@/components/ui/section";

export default function ProjectsCarouselSection({
  locale,
  featuredProjects,
  t,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
    containScroll: "trimSnaps",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <Section>
      <SectionHeader
        title={t("home.projects.title")}
        subtitle={t("home.projects.subtitle")}
        description={t("home.projects.description")}
        className="mb-16"
      />

      {/* Carousel */}
      <div className="relative" ref={ref}>
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {featuredProjects.map((project, index) => (
              <div
                key={project.name}
                className={cn(
                  "flex-[0_0_85%] md:flex-[0_0_70%] lg:flex-[0_0_60%] min-w-0 px-4 transition-all duration-500",
                  selectedIndex !== index && "blur-sm opacity-60 scale-95"
                )}
              >
                <div className="group relative overflow-hidden rounded-2xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 cursor-pointer shadow-lg">
                  <div className="relative aspect-[16/10]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white group-hover:text-yellow-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-gray-300">{project.location}</p>
                  </div>
                </div>
                <div className="h-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90"
          onClick={scrollPrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90"
          onClick={scrollNext}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === selectedIndex
                  ? "bg-yellow-400 w-8"
                  : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
              )}
              onClick={() => emblaApi?.scrollTo(index)}
            />
          ))}
        </div>
      </div>

      {/* View More Button */}
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
  );
}
