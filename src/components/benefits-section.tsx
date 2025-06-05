import React from "react";
import { Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { m as motion, useReducedMotion } from "framer-motion";

export const BenefitsSection = () => {
  const shouldReduceMotion = useReducedMotion();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: shouldReduceMotion ? 0 : 0.05,
        delayChildren: 0.1
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 15 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1],
        willChange: "opacity, transform"
      }
    }
  };

  const benefits = [
    {
      icon: "lucide:trending-up",
      title: "Улучшение торговых результатов",
      description: "Отслеживайте закономерности в своей торговле, чтобы выявить сильные стороны и области для улучшения."
    },
    {
      icon: "lucide:brain",
      title: "Развитие торговой дисциплины",
      description: "Регулярное ведение дневника формирует последовательность и ответственность в вашей торговой практике."
    },
    {
      icon: "lucide:lightbulb",
      title: "Получение торговых инсайтов",
      description: "Обнаружение скрытых закономерностей в вашем торговом поведении и реакциях рынка."
    },
    {
      icon: "lucide:heart",
      title: "Снижение эмоциональной торговли",
      description: "Документируйте эмоции во время сделок для улучшения психологического контроля."
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Зачем использовать торговый дневник?
          </motion.h2>
          <motion.p 
            className="text-foreground-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Исследования показывают, что трейдеры, ведущие подробные дневники, стабильно превосходят тех, кто этого не делает.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <Card className="border border-default-200 h-full">
                <CardBody>
                  <div className="flex gap-4">
                    <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center shrink-0">
                      <Icon icon={benefit.icon} className="text-primary text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-foreground-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-primary-50 rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-4">Наука за торговыми дневниками</h3>
          <p className="mb-6 max-w-3xl mx-auto">
            Исследования показывают, что трейдеры, которые документируют свои сделки и регулярно их анализируют, видят улучшение своих результатов до 25% со временем. Наш дневник разработан на основе проверенных принципов торговой психологии.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">89%</div>
              <p className="text-sm text-foreground-600">профессиональных трейдеров ведут подробные дневники</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">25%</div>
              <p className="text-sm text-foreground-600">среднее улучшение результатов при регулярном ведении дневника</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary mb-2">3x</div>
              <p className="text-sm text-foreground-600">быстрее выявление ошибок в торговых паттернах</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};