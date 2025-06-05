import React from "react";
import { Card, CardBody, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { m as motion, useReducedMotion } from "framer-motion";

export const FeaturesSection = () => {
  const shouldReduceMotion = useReducedMotion();
  
  // Define animation variants
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

  const features = [
    {
      icon: "lucide:layout-template",
      title: "Структурированные шаблоны",
      description: "Готовые страницы для записи сделок, анализа и отслеживания результатов"
    },
    {
      icon: "lucide:bar-chart",
      title: "Отслеживание результатов",
      description: "Специальные разделы для отслеживания ваших торговых показателей и роста"
    },
    {
      icon: "lucide:book-open",
      title: "Обучение трейдингу",
      description: "Встроенные справочные руководства и принципы торговли"
    },
    {
      icon: "lucide:calendar",
      title: "Ежедневное планирование",
      description: "Расписание рынков и разделы для постановки ежедневных целей"
    },
    {
      icon: "lucide:check-square",
      title: "Чек-листы для сделок",
      description: "Контрольные списки до и после совершения сделок"
    },
    {
      icon: "lucide:notebook-pen",
      title: "Премиальные материалы",
      description: "Высококачественная бумага, идеально подходящая для записей и рисования графиков"
    }
  ];

  return (
    <section id="features" className="py-16 md:py-24 bg-content1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Разработан для серьезных трейдеров
          </motion.h2>
          <motion.p 
            className="text-foreground-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Наш Дневник Трейдера включает все необходимое для документирования, анализа и улучшения ваших торговых результатов.
          </motion.p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="h-full"
            >
              <Card className="border border-default-200 h-full">
                <CardBody className="flex flex-col gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center">
                    <Icon icon={feature.icon} className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-foreground-600">{feature.description}</p>
                  </div>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 bg-default-50 rounded-xl p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h3 
                className="text-2xl font-bold mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                Что внутри дневника
              </motion.h3>
              <motion.ul 
                className="space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <li className="flex items-start">
                  <Icon icon="lucide:check" className="text-success mt-1 mr-2" />
                  <span>200 страниц премиальной бумаги 100 г/м²</span>
                </li>
                <li className="flex items-start">
                  <Icon icon="lucide:check" className="text-success mt-1 mr-2" />
                  <span>Страницы для записи сделок с расчетами риска/прибыли</span>
                </li>
                <li className="flex items-start">
                  <Icon icon="lucide:check" className="text-success mt-1 mr-2" />
                  <span>Шаблоны для ежемесячного и еженедельного анализа результатов</span>
                </li>
                <li className="flex items-start">
                  <Icon icon="lucide:check" className="text-success mt-1 mr-2" />
                  <span>Области для рисования графиков с сеткой</span>
                </li>
                <li className="flex items-start">
                  <Icon icon="lucide:check" className="text-success mt-1 mr-2" />
                  <span>Разделы для документирования торговых стратегий</span>
                </li>
                <li className="flex items-start">
                  <Icon icon="lucide:check" className="text-success mt-1 mr-2" />
                  <span>Подсказки для психологической рефлексии</span>
                </li>
              </motion.ul>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Image
                alt="Inside the Trader's Journal"
                className="object-cover rounded-lg shadow-md"
                src="https://img.heroui.chat/image/book?w=600&h=400&u=journal3"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary/10 w-full h-full rounded-lg -z-10"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};