"use client";

import Image from "next/image";

import { Button } from "../../components/ui/button";
import { Section, SectionHeader } from "../../components/ui/section";
import { Heading, Text } from "../../components/ui/typography";
import { AnimatedContainer } from "../../components/ui/animated-container";
import { ArrowRight, Award, Users, Lightbulb, Shield } from "lucide-react";
import { useTranslation } from "@/lib/i18n";
import Link from "next/link";

export default function AboutPage() {
  const { t, locale } = useTranslation();

  const companyInfo = [
    {
      title: t("about.companyInfo.story.title"),
      description: t("about.companyInfo.story.description"),
    },
    {
      title: t("about.companyInfo.mission.title"),
      description: t("about.companyInfo.mission.description"),
    },
    {
      title: t("about.companyInfo.vision.title"),
      description: t("about.companyInfo.vision.description"),
    },
  ];

  const values = [
    {
      icon: Award,
      title: t("about.values.quality.title"),
      description: t("about.values.quality.description"),
    },
    {
      icon: Users,
      title: t("about.values.customer.title"),
      description: t("about.values.customer.description"),
    },
    {
      icon: Lightbulb,
      title: t("about.values.creativity.title"),
      description: t("about.values.creativity.description"),
    },
    {
      icon: Shield,
      title: t("about.values.trust.title"),
      description: t("about.values.trust.description"),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative min-h-screen flex items-center justify-center  bg-[url('/images/about.png')] bg-cover">
        <div className="absolute inset-0 bg-[url('/luxury-furniture-craftsmanship-workshop.png')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <AnimatedContainer animation="fade-in" delay={200}>
            {/* <p className="text-[#009BDE] font-semibold text-lg mb-4">
              {t("about.hero.tagline")}
            </p> */}
          </AnimatedContainer>
          {/* <Heading level={1} className="mb-0">
              {t("about.hero.heading1")}
            </Heading>
            <Heading level={1} gradient className="mb-0">
              {t("about.hero.heading2")}
            </Heading> */}
          {/* <Text size="lg" className="mb-12 max-w-2xl mx-auto font-light">
            {t("home.hero.description")}
          </Text> */}
          {/* <Text size="lg" className="max-w-3xl mx-auto">
              {t("about.hero.description")}
            </Text> */}
          <AnimatedContainer animation="slide-up" delay={400}>
            <Heading level={1} className="mb-0 font-serif font-medium">
              {t("about.hero.heading1")}
            </Heading>
            <Heading level={1} gradient className="mb-0 font-serif font-medium">
              {t("about.hero.heading2")}
            </Heading>
          </AnimatedContainer>
          <AnimatedContainer animation="fade-in" delay={600}>
            <Text
              size="lg"
              style={
                locale === "kan"
                  ? {
                      fontSize: "1.5rem",
                      lineHeight: "2.25rem",
                      marginTop: "1rem",
                    }
                  : {}
              }
              className="mb-12 max-w-2xl mx-auto font-light"
            >
              {t("about.hero.description")}
            </Text>
          </AnimatedContainer>
        </div>
      </Section>

      {/* Founder Message */}
      <Section className="bg-black">
        <div className="flex gap-6">
          <Heading level={2} className="mb-0">
            {t("about.founder.title1")}
          </Heading>
          <Heading level={2} gradient className="mb-0">
            {t("about.founder.title2")}
          </Heading>
        </div>
        <br />
        <br />
        <div className="mx-auto">
          <Text>{t("about.founder.message")}</Text>
          {/* <Text>- {t("about.founder.signature")}</Text> */}
        </div>
      </Section>

      {/* Sidebar + Content */}
      <div className="flex w-screen flex-col items-center lg:items-start lg:flex-row lg:justify-between text-black bg-[url('/bg.svg')] bg-cover bg-center">
        {/* Sticky Sidebar */}
        <div className="w-full lg:w-1/5 px-4 py-6 lg:sticky lg:top-20 self-start h-fit">
          <Section>
            <div>
              {companyInfo.map((info, index) => (
                <AnimatedContainer
                  key={info.title}
                  animation="slide-up"
                  delay={index * 100}
                >
                  <div className="text-center">
                    <Heading level={5} className="mb-0">
                      {info.title}
                    </Heading>
                    <Text
                      className="text-gray-300 mb-10 w-60 max-w-full mx-auto text-sm"
                      size="sm"
                    >
                      {info.description}
                    </Text>
                  </div>
                </AnimatedContainer>
              ))}
            </div>
          </Section>
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 px-4 md:px-6 py-12 space-y-24">
          {/* The Beginning Section */}
          <Section>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedContainer animation="fade-in">
                <div className="relative">
                  <Image
                    src="/images/modern.png"
                    alt="Furniture craftsmanship"
                    width={800}
                    height={600}
                    className="shadow-2xl"
                  />
                </div>
              </AnimatedContainer>
              <AnimatedContainer animation="slide-up" delay={200}>
                <div>
                  <Heading level={2} className="mb-0">
                    {t("about.beginning.title1")}
                  </Heading>
                  <Heading level={2} gradient className="mb-0">
                    {t("about.beginning.title2")}
                  </Heading>
                  <Text className="text-gray-300 leading-relaxed">
                    {t("about.beginning.description")}
                  </Text>
                </div>
              </AnimatedContainer>
            </div>
          </Section>

          {/* What Drives Us Section */}
          <Section>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedContainer animation="slide-up">
                <div>
                  <Heading level={2} className="mb-0">
                    {t("about.drives.title1")}
                  </Heading>
                  <Heading level={2} gradient className="mb-0">
                    {t("about.drives.title2")}
                  </Heading>
                  <Text className="text-gray-300 leading-relaxed">
                    {t("about.drives.description")}
                  </Text>
                </div>
              </AnimatedContainer>
              <AnimatedContainer animation="fade-in" delay={200}>
                <div className="relative">
                  <Image
                    src="/images/lifestyle.png"
                    alt="Luxury furniture showroom"
                    width={800}
                    height={600}
                    className="shadow-2xl"
                  />
                </div>
              </AnimatedContainer>
            </div>
          </Section>

          {/* Where We're Headed Section */}
          <Section>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedContainer animation="fade-in">
                <div className="relative">
                  <Image
                    src="/images/headed.png"
                    alt="Future vision"
                    width={800}
                    height={600}
                    className="shadow-2xl"
                  />
                </div>
              </AnimatedContainer>
              <AnimatedContainer animation="slide-up" delay={200}>
                <div>
                  <Heading level={2} className="mb-0">
                    {t("about.future.title1")}
                  </Heading>
                  <Heading level={2} gradient className="mb-0">
                    {t("about.future.title2")}
                  </Heading>
                  <Text className="text-gray-300 leading-relaxed">
                    {t("about.future.description")}
                  </Text>
                </div>
              </AnimatedContainer>
            </div>
          </Section>
        </div>
      </div>

      {/* Values Section */}
      <Section className="bg-black">
        <SectionHeader
          title={t("about.valuesHeader.title")}
          // subtitle={t("about.valuesHeader.subtitle")}
          className="mb-16"
        />
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <AnimatedContainer
              key={value.title}
              animation="scale-in"
              delay={index * 100}
            >
              <div className="bg-black/50 border border-gray-700 rounded-lg p-8 hover:border-[#009BDE]/50 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#009BDE]/10 rounded-lg flex items-center justify-center group-hover:bg-[#009BDE]/20 transition-colors">
                    <value.icon className="h-6 w-6 text-[#009BDE]" />
                  </div>
                  <div>
                    <Heading
                      level={4}
                      className="mb-4 group-hover:text-[#009BDE] transition-colors"
                    >
                      {value.title}
                    </Heading>
                    <Text className="text-gray-300 leading-relaxed">
                      {value.description}
                    </Text>
                  </div>
                </div>
              </div>
            </AnimatedContainer>
          ))}
        </div>
      </Section>

      {/* Final CTA Section */}
      <div className="bg-[url('/bg.svg')] bg-cover bg-center ">
        <Section className="bg-[url('/bg.svg')] bg-cover bg-center text-center">
          <AnimatedContainer animation="slide-up">
            <Heading level={1} gradient className="mb-0">
              {t("about.cta.heading1")}
            </Heading>
            <Heading level={1} className="mb-0">
              {t("about.cta.heading2")}
            </Heading>
            <Text size="lg" className="mb-12 max-w-2xl mx-auto">
              {t("about.cta.description")}
            </Text>
            <Link href={locale === "kan" ? "/kan/contact" : "/contact"}>
              <Button
                size="lg"
                className="bg-[#009BDE] text-black hover:bg-[#009BDE] px-8 py-4 text-lg font-semibold"
              >
                <ArrowRight className="mr-2 h-5 w-5" />
                {t("about.cta.button")}
              </Button>
            </Link>
          </AnimatedContainer>
        </Section>
      </div>
    </div>
  );
}
