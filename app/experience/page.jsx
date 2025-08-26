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

const experienceFeatures = [
  {
    icon: Eye,
    title: "Immersive Showrooms",
    description:
      "Walk through complete room concepts designed to inspire and help you visualize your perfect space.",
  },
  {
    icon: Users,
    title: "Personal Design Consultation",
    description:
      "Our expert designers guide you through curated spaces, offering personalized insights and recommendations.",
  },
  {
    icon: Palette,
    title: "Custom Solutions",
    description:
      "From ready-made collections to bespoke pieces, we create solutions tailored to your unique style.",
  },
  {
    icon: Heart,
    title: "Confidence in Choice",
    description:
      "Experience furniture in context, making decisions with complete confidence and joy.",
  },
];

const visitInfo = [
  {
    icon: MapPin,
    title: "Multiple Locations",
    description:
      "Visit our showrooms across the region to experience the Riyash difference firsthand.",
  },
  {
    icon: Clock,
    title: "Flexible Scheduling",
    description:
      "Book personalized tours at your convenience with our dedicated design team.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description:
      "Our design consultants are here to help you create spaces that truly reflect your lifestyle.",
  },
];

export default function ExperiencePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/images/experience.png')] bg-cover bg-center opacity-40" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <AnimatedContainer animation="fade-in" delay={200}>
            <p className="text-yellow-400 font-normal text-lg mb-4">
              Riyash Experience
            </p>
          </AnimatedContainer>
          <AnimatedContainer animation="slide-up" delay={400}>
            <Heading level={1} className="mb-6 font-normal">
              Shopping reimagined
            </Heading>
            <Heading level={1} gradient className="mb-8 font-normal">
              The Riyash experience
            </Heading>
          </AnimatedContainer>
          <AnimatedContainer animation="fade-in" delay={600}>
            <Text size="lg" className="max-w-3xl mx-auto">
              Discover how furniture shopping transforms into an inspiring
              journey of creativity, confidence, and personalized design.
            </Text>
          </AnimatedContainer>
        </div>
      </Section>

      {/* Gallery Not Store Section */}
      <Section className="bg-black   bg-[url('/images/exp-2.png')] h-[600px]">
        <div className="flex text-center  items-center">
          <AnimatedContainer animation="slide-up">
            <div>
              <Heading level={2} className="mb-4">
                A gallery,
              </Heading>
              <Heading level={2} gradient className="mb-8">
                not a store
              </Heading>
              <Text className="text-gray-300 leading-relaxed mb-8">
                Riyash showrooms are curated like galleries, not stores. Each
                room is styled as a complete concept, allowing you to see
                furniture in its natural setting—living, dining, bedroom,
                office, or hospitality. Instead of imagining pieces in
                isolation, you experience how they come together in harmony.
              </Text>
              {/* <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                  <Text className="text-gray-300">
                    Complete room concepts that showcase furniture in realistic,
                    lived-in environments
                  </Text>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                  <Text className="text-gray-300">
                    Curated spaces that demonstrate how different pieces work
                    together harmoniously
                  </Text>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-2 h-2 bg-yellow-400 rounded-full mt-3"></div>
                  <Text className="text-gray-300">
                    Inspiration-driven layouts that help you envision your own
                    perfect space
                  </Text>
                </div>
              </div> */}
            </div>
          </AnimatedContainer>
          {/* <AnimatedContainer animation="fade-in" delay={200}>
            <div className="relative">
              <Image
                src="/images/modern.png"
                alt="Gallery-style showroom"
                width={800}
                height={600}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </AnimatedContainer> */}
        </div>
      </Section>

      {/* Experience Features Section */}
      {/* <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experienceFeatures.map((feature, index) => (
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

      {/* Process Section */}
      {/* <Section className="bg-black">
        <div className="text-center mb-16">
          <AnimatedContainer animation="slide-up">
            <Heading level={2} className="mb-4">
              Your journey with
            </Heading>
            <Heading level={2} gradient className="mb-8">
              Riyash
            </Heading>
            <Text className="text-gray-300 max-w-2xl mx-auto">
              From the moment you step into our showroom to the final delivery,
              every step is designed to exceed your expectations.
            </Text>
          </AnimatedContainer>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedContainer animation="fade-in" delay={100}>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <Heading level={4} className="mb-4">
                Discover & Explore
              </Heading>
              <Text className="text-gray-300">
                Walk through our gallery-style showrooms and discover furniture
                in beautifully curated room settings.
              </Text>
            </div>
          </AnimatedContainer>

          <AnimatedContainer animation="fade-in" delay={200}>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <Heading level={4} className="mb-4">
                Consult & Customize
              </Heading>
              <Text className="text-gray-300">
                Work with our design experts to select pieces that perfectly
                match your space, style, and lifestyle.
              </Text>
            </div>
          </AnimatedContainer>

          <AnimatedContainer animation="fade-in" delay={300}>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 text-black rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <Heading level={4} className="mb-4">
                Create & Deliver
              </Heading>
              <Text className="text-gray-300">
                Watch your vision come to life as we craft and deliver furniture
                that transforms your space.
              </Text>
            </div>
          </AnimatedContainer>
        </div>
      </Section> */}

      {/* Visit Us Section */}
      <Section>
        <div className="text-center mb-16">
          <AnimatedContainer animation="slide-up">
            <Heading level={1} gradient className="mb-4 font-sans font-normal">
              EXPERIENCE RIYASH
            </Heading>
            <Heading level={1} className="mb-8">
              FOR YOURSELF
            </Heading>
            <Text size="lg" className="mb-12 max-w-2xl mx-auto">
              Visit our showroom to see, feel, and experience the difference.
              Book a personalized tour with our team today.
            </Text>
          </AnimatedContainer>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {visitInfo.map((info, index) => (
            <AnimatedContainer
              key={info.title}
              animation="scale-in"
              delay={index * 100}
            >
              <div className="bg-black/50 border border-gray-700 rounded-lg p-8 text-center hover:border-yellow-400/50 transition-all duration-300 group">
                <div className="w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-400/20 transition-colors">
                  <info.icon className="h-6 w-6 text-yellow-400" />
                </div>
                <Heading
                  level={4}
                  className="mb-4 group-hover:text-yellow-400 transition-colors"
                >
                  {info.title}
                </Heading>
                <Text className="text-gray-300">{info.description}</Text>
              </div>
            </AnimatedContainer>
          ))}
        </div>

        <AnimatedContainer animation="fade-in" delay={600}>
          <div className="text-center">
            <Button
              size="lg"
              className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 text-lg font-normal"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Visit Our Stores
            </Button>
          </div>
        </AnimatedContainer>
      </Section>

      {/* Final CTA Section */}
      <Section className="  bg-[url('/bg.svg')] bg-cover text-center">
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
            className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-4 text-lg font-normal"
          >
            <ArrowRight className="mr-2 h-5 w-5" />
            Request a Consultation
          </Button>
        </AnimatedContainer>
      </Section>
    </div>
  );
}
