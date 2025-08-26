import Image from "next/image";
import { Button } from "../../components/ui/button";
import { Section, SectionHeader } from "../../components/ui/section";
import { Heading, Text } from "../../components/ui/typography";
import { AnimatedContainer } from "../../components/ui/animated-container";
import { ArrowRight, Award, Users, Lightbulb, Shield } from "lucide-react";

const companyInfo = [
  {
    title: "Our story",
    description:
      "Blending craftsmanship and creativity to craft timeless, meaningful furniture.",
  },
  {
    title: "Our mission",
    description:
      "Making luxury design accessible through quality, innovation, and personalized service.",
  },
  {
    title: "Our vision",
    description:
      "Shaping future lifestyles by setting trends, not simply following them.",
  },
];

const values = [
  {
    icon: Award,
    title: "Quality first",
    description:
      "Every Riyash piece is crafted with uncompromising standards of excellence, ensuring timeless beauty, refined details, and exceptional performance across every collection we create.",
  },
  {
    icon: Users,
    title: "Customer first",
    description:
      "We place people at the heart of every decision, designing solutions that reflect unique lifestyles, individual needs, and personalized experiences our customers truly deserve.",
  },
  {
    icon: Lightbulb,
    title: "Creativity",
    description:
      "Innovation drives us forward embracing evolving trends, and artistic craftsmanship to consistently deliver fresh, inspiring furniture that transforms spaces into meaningful living experiences.",
  },
  {
    icon: Shield,
    title: "Trust",
    description:
      "Our foundation is built on integrity, transparency, and reliability, fostering long-term partnerships with clients and communities who value our consistency, honesty, and commitment.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/luxury-furniture-craftsmanship-workshop.png')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <AnimatedContainer animation="fade-in" delay={200}>
            <p className="text-yellow-400 font-semibold text-lg mb-4">
              About Us
            </p>
          </AnimatedContainer>
          <AnimatedContainer animation="slide-up" delay={400}>
            <Heading level={1} className="mb-6">
              Crafting furniture that
            </Heading>
            <Heading level={1} gradient className="mb-8">
              inspires everyday living
            </Heading>
          </AnimatedContainer>
          <AnimatedContainer animation="fade-in" delay={600}>
            <Text size="lg" className="max-w-3xl mx-auto">
              Riyash creates furniture that blends timeless craftsmanship and
              modern design, elevating every space with pieces that offer
              elegance, comfort, and style that defines every lifestyle.
            </Text>
          </AnimatedContainer>
        </div>
      </Section>

      {/* Company Info Section */}

      <div className="flex w-screen  flex-row justify-between  text-black bg-[url('/bg.svg')] bg-cover bg-center">
        <div>
          {" "}
          <Section className="">
            <div className="">
              {companyInfo.map((info, index) => (
                <AnimatedContainer
                  key={info.title}
                  animation="slide-up"
                  delay={index * 100}
                >
                  <div className="text-center">
                    <Heading level={5} className="mb-4">
                      {info.title}
                    </Heading>
                    <Text
                      className="text-gray-300 mb-10 w-60 text-sm"
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
        <div>
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
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </AnimatedContainer>
              <AnimatedContainer animation="slide-up" delay={200}>
                <div>
                  <Heading level={2} className="mb-4">
                    The beginning
                  </Heading>
                  <Heading level={2} gradient className="mb-8">
                    of Riyash
                  </Heading>
                  <Text className="text-gray-300 leading-relaxed">
                    Furniture should inspire design, not just occupy space.
                    Riyash was founded to merge craftsmanship and creativity,
                    creating timeless designs that feel personal and
                    trend-forward across homes and projects.
                  </Text>
                </div>
              </AnimatedContainer>
            </div>
          </Section>

          {/* What Drives Us Section */}
          <Section className="">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <AnimatedContainer animation="slide-up">
                <div>
                  <Heading level={2} className="mb-4">
                    What drives us
                  </Heading>
                  <Heading level={2} gradient className="mb-8">
                    forward
                  </Heading>
                  <Text className="text-gray-300 leading-relaxed">
                    We believe luxury should be within reach. Every Riyash
                    piece—ready-made or custom—is built to the highest
                    standards, delivering elegance, comfort, and an inspiring
                    shopping journey.
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
                    className="rounded-lg shadow-2xl"
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
                    className="rounded-lg shadow-2xl"
                  />
                </div>
              </AnimatedContainer>
              <AnimatedContainer animation="slide-up" delay={200}>
                <div>
                  <Heading level={2} className="mb-4">
                    Where we're
                  </Heading>
                  <Heading level={2} gradient className="mb-8">
                    headed
                  </Heading>
                  <Text className="text-gray-300 leading-relaxed">
                    Our goal is bold: to be among the top five furniture brands
                    in the region by building design trends and shaping
                    extraordinary living experiences.
                  </Text>
                </div>
              </AnimatedContainer>
            </div>
          </Section>
        </div>
      </div>

      {/* Values Section */}
      <Section className="bg-gray-900">
        <SectionHeader title="Our" subtitle="values" className="mb-16" />
        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <AnimatedContainer
              key={value.title}
              animation="scale-in"
              delay={index * 100}
            >
              <div className="bg-black/50 border border-gray-700 rounded-lg p-8 hover:border-yellow-400/50 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-yellow-400/10 rounded-lg flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                    <value.icon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <Heading
                      level={4}
                      className="mb-4 group-hover:text-yellow-400 transition-colors"
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
    </div>
  );
}
