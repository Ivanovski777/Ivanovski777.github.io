import React from "react";
import { Card, CardBody, CardFooter, Button, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";
import { m as motion, useReducedMotion } from "framer-motion";

export const PricingSection = () => {
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

  const marketplaces = [
    {
      name: "Wildberries",
      logo: "logos:wildberries",
      description: "Заказывайте наш дневник трейдера на популярной площадке Wildberries с быстрой доставкой по всей России",
      features: [
        "Быстрая доставка от 1 дня",
        "Удобная оплата картой или при получении",
        "Возможность примерки перед покупкой",
        "Пункты выдачи в каждом городе",
        "Отслеживание заказа в реальном времени"
      ],
      buttonText: "Заказать на Wildberries",
      color: "primary"
    },
    {
      name: "Ozon",
      logo: "logos:ozon",
      description: "Приобретайте дневник трейдера на маркетплейсе Ozon с доставкой в любую точку России",
      features: [
        "Доставка курьером или в пункт выдачи",
        "Оплата любым удобным способом",
        "Кэшбэк баллами Ozon",
        "Возможность использовать промокоды",
        "Профессиональная служба поддержки"
      ],
      buttonText: "Заказать на Ozon",
      color: "secondary"
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Где купить дневник трейдера
          </motion.h2>
          <motion.p 
            className="text-foreground-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Выберите удобную для вас площадку и сделайте заказ прямо сейчас
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {marketplaces.map((marketplace, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex h-full"
            >
              <Card className="border border-default-200 overflow-visible w-full">
                <CardBody className="pt-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Icon icon={marketplace.logo} className="text-4xl" />
                    <h3 className="text-2xl font-bold">{marketplace.name}</h3>
                  </div>
                  <p className="text-foreground-600 mb-6">{marketplace.description}</p>
                  <Divider className="my-4" />
                  <ul className="space-y-3 mb-6">
                    {marketplace.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Icon icon="lucide:check" className="text-success mt-1 mr-2" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardBody>
                <CardFooter>
                  <Button 
                    color={marketplace.color === "primary" ? "primary" : "secondary"} 
                    variant="solid"
                    className="w-full"
                    size="lg"
                  >
                    {marketplace.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-16 bg-default-50 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h3 className="text-xl font-bold mb-2">Нужны индивидуальные дневники для вашей торговой команды?</h3>
            <p className="text-foreground-600">
              Мы предлагаем оптовые скидки и индивидуальный брендинг для торговых фирм и образовательных учреждений.
            </p>
          </div>
          <Button color="primary" variant="flat" size="lg">
            Связаться для оптовых заказов
          </Button>
        </motion.div>
      </div>
    </section>
  );
};