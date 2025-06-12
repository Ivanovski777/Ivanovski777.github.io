import React from "react";
import { Button, Image, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { m as motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            ease: [0.22, 1, 0.36, 1],
            willChange: "opacity, transform"
          }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
            Совершенствуйте свою торговлю с <span className="text-primary">Дневником Трейдера</span>
          </h1>
          <p className="text-lg text-foreground-600 mb-8 max-w-md">
            Премиальный бумажный блокнот, специально разработанный для трейдеров, чтобы отслеживать, анализировать и улучшать свои торговые результаты.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              as={Link}
              href="#pricing"
              color="primary" 
              size="lg" 
              className="font-medium"
            >
              Получить дневник
            </Button>
            <Button 
              as={Link}
              href="#features"
              variant="bordered" 
              size="lg" 
              className="font-medium"
            >
              Узнать больше
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-6">
            <div className="flex items-center">
              <Icon icon="lucide:check-circle" className="text-success mr-2" />
              <span className="text-sm">Премиальное качество</span>
            </div>
            <div className="flex items-center">
              <Icon icon="lucide:check-circle" className="text-success mr-2" />
              <span className="text-sm">Дизайн для трейдеров</span>
            </div>
            <div className="flex items-center">
              <Icon icon="lucide:check-circle" className="text-success mr-2" />
              <span className="text-sm">Бесплатная доставка</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2, 
            ease: [0.22, 1, 0.36, 1],
            willChange: "opacity, transform"
          }}
          className="relative"
        >
          <div className="relative z-10">
            <Image
              alt="Trader's Journal"
              className="object-cover rounded-xl"
              src="https://img.heroui.chat/image/book?w=600&h=500&u=journal1"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 z-0">
            <Image
              alt="Trader's Journal Detail"
              className="object-cover rounded-xl shadow-lg w-48 h-48"
              src="https://img.heroui.chat/image/book?w=200&h=200&u=journal2"
            />
          </div>
          <div className="absolute -top-4 -left-4 bg-primary/10 w-full h-full rounded-xl -z-10"></div>
        </motion.div>
      </div>
    </section>
  );
};