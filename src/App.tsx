import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Image, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { HeroSection } from "./components/hero-section";
import { FeaturesSection } from "./components/features-section";
import { BenefitsSection } from "./components/benefits-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { PricingSection } from "./components/pricing-section";
import { FAQSection } from "./components/faq-section";
import { Footer } from "./components/footer";
import { LazyMotion, domAnimation } from "framer-motion";

export default function App() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="min-h-screen bg-background">
        <Navbar maxWidth="xl" className="bg-background/80 backdrop-blur-md">
          <NavbarBrand>
            <Icon icon="lucide:bar-chart-2" className="text-primary text-2xl" />
            <p className="font-bold text-inherit ml-2">ДневникТрейдера</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#features">
                Особенности
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#benefits">
                Преимущества
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#testimonials">
                Отзывы
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#pricing">
                Цены
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#faq">
                Вопросы
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem>
              <Button as={Link} color="primary" href="#pricing" variant="flat">
                Заказать
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>

        <main>
          <HeroSection />
          <FeaturesSection />
          <BenefitsSection />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
        </main>

        <Footer />
      </div>
    </LazyMotion>
  );
}