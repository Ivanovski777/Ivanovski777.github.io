import React from "react";
import { Card, CardBody, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";
import { m as motion, useReducedMotion } from "framer-motion";

export const TestimonialsSection = () => {
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

  const testimonials = [
    {
      name: "Алексей Морозов",
      role: "Форекс трейдер",
      image: "https://img.heroui.chat/image/avatar?w=150&h=150&u=trader1",
      content: "Этот дневник полностью преобразил мою торговлю. Возможность документировать сделки структурированным способом помогла мне выявить закономерности, которые я раньше упускал. Мой процент успешных сделок вырос на 15% всего за два месяца.",
      rating: 5
    },
    {
      name: "Светлана Чен",
      role: "Дневной трейдер акций",
      image: "https://img.heroui.chat/image/avatar?w=150&h=150&u=trader2",
      content: "Я пробовала цифровые дневники, но ничто не сравнится с физическим блокнотом, посвященным трейдингу. Шаблоны идеально подходят для быстрых записей во время торговых часов, а разделы для анализа сделали мой еженедельный анализ намного продуктивнее.",
      rating: 5
    },
    {
      name: "Михаил Иванов",
      role: "Крипто трейдер",
      image: "https://img.heroui.chat/image/avatar?w=150&h=150&u=trader3",
      content: "Как человек, торгующий на волатильных крипторынках, эмоциональный контроль - это всё. Психологические разделы этого дневника помогли мне распознать мои триггеры и развить лучшую дисциплину. Стоит каждой копейки.",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-content1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Что говорят трейдеры
          </motion.h2>
          <motion.p 
            className="text-foreground-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Отзывы трейдеров, которые улучшили свои результаты с нашим дневником.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <Card className="border border-default-200 h-full">
                <CardBody className="flex flex-col gap-4">
                  <div className="flex gap-2 text-warning">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} icon="lucide:star" />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Icon key={i + testimonial.rating} icon="lucide:star" className="text-default-300" />
                    ))}
                  </div>
                  <p className="text-foreground-600 flex-grow">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4 mt-4">
                    <Avatar src={testimonial.image} className="w-12 h-12" />
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-foreground-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-1 text-warning mb-4">
            <Icon icon="lucide:star" />
            <Icon icon="lucide:star" />
            <Icon icon="lucide:star" />
            <Icon icon="lucide:star" />
            <Icon icon="lucide:star" />
            <span className="ml-2 font-semibold">4.9/5</span>
          </div>
          <p className="text-center text-foreground-600 max-w-md">
            На основе более 200 проверенных отзывов клиентов. Наши трейдеры ценят качество и внимание к деталям.
          </p>
        </motion.div>
      </div>
    </section>
  );
};