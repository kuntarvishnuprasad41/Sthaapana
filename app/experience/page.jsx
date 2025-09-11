"use client";

import Image from "next/image";

import { Button } from "../../components/ui/button";
import { Section } from "../../components/ui/section";
import { Heading, Text } from "../../components/ui/typography";
import { AnimatedContainer } from "../../components/ui/animated-container";
import {
  ArrowRight,
  MapPin,
  Clock,
  Users,
  Palette,
  Eye,
  Heart,
} from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import Link from "next/link";

const experienceFeatures = (t) => [
  {
    icon: Eye,
    title: t("experience.features.immersive.title"),
    description: t("experience.features.immersive.description"),
  },
  {
    icon: Users,
    title: t("experience.features.consultation.title"),
    description: t("experience.features.consultation.description"),
  },
  {
    icon: Palette,
    title: t("experience.features.custom.title"),
    description: t("experience.features.custom.description"),
  },
  {
    icon: Heart,
    title: t("experience.features.confidence.title"),
    description: t("experience.features.confidence.description"),
  },
];

const visitInfo = (t) => [
  {
    icon: MapPin,
    title: t("experience.visit.locations.title"),
    description: t("experience.visit.locations.description"),
  },
  {
    icon: Clock,
    title: t("experience.visit.scheduling.title"),
    description: t("experience.visit.scheduling.description"),
  },
  {
    icon: Users,
    title: t("experience.visit.guidance.title"),
    description: t("experience.visit.guidance.description"),
  },
];

export default function ExperiencePage() {
  const { t, locale } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/images/experience.png')] bg-cover bg-center opacity-40" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <AnimatedContainer animation="fade-in" delay={200}>
            {/* <p className="text-yellow-400 font-normal text-lg mb-4">
              {t("experience.hero.subtitle")}
            </p> */}
          </AnimatedContainer>
          <AnimatedContainer animation="slide-up" delay={400}>
            <Heading level={1} className="mb-0 font-normal">
              {t("experience.hero.title1")}
            </Heading>
            <Heading level={1} gradient className="mb-0 font-normal">
              {t("experience.hero.title2")}
            </Heading>
          </AnimatedContainer>
          <AnimatedContainer animation="fade-in" delay={600}>
            <Text size="lg" className="max-w-3xl mx-auto">
              {t("experience.hero.description")}
            </Text>
          </AnimatedContainer>
        </div>
      </Section>

      {/* Gallery Not Store Section */}
      <Section className="bg-black bg-[url('/images/exp-2.png')] h-[600px]">
        <div className="flex text-center items-center">
          <AnimatedContainer animation="slide-up">
            <div>
              <Heading level={2} className="mb-0">
                {t("experience.gallery.title1")}
              </Heading>
              <Heading level={2} gradient className="mb-0">
                {t("experience.gallery.title2")}
              </Heading>
              <Text className="text-gray-300 leading-relaxed mb-8">
                {t("experience.gallery.description")}
              </Text>
            </div>
          </AnimatedContainer>
        </div>
      </Section>

      {/* Experience Features Section (commented, enable if needed) */}
      {/* <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experienceFeatures(t).map((feature, index) => (
            <AnimatedContainer
              key={feature.title}
              animation="scale-in"
              delay={index * 100}
            >
              <div className="text-center group">
                <div className="w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400/20 transition-colors">
                  <feature.icon className="h-8 w-8 text-yellow-400" />
                </div>
                <Heading
                  level={4}
                  className="mb-4 group-hover:text-yellow-400 transition-colors"
                >
                  {feature.title}
                </Heading>
                <Text className="text-gray-300 leading-relaxed">
                  {feature.description}
                </Text>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </Section> */}

      {/* Final CTA Section */}
      <Section className="bg-[url('/bg.svg')] bg-cover text-center">
        <AnimatedContainer animation="slide-up">
          <Heading level={1} gradient className="mb-0">
            {t("experience.cta.title1")}
          </Heading>
          <Heading level={1} className="mb-0">
            {t("experience.cta.title2")}
          </Heading>
          <Text size="lg" className="mb-12 max-w-2xl mx-auto">
            {t("experience.cta.description")}
          </Text>
          <Link href={locale === "ar" ? "/ar/contact" : "/contact"}>
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 text-lg font-normal"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              {t("experience.cta.button")}
            </Button>
          </Link>
        </AnimatedContainer>
      </Section>
    </div>
  );
}
