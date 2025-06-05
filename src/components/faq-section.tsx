import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";
import { m as motion } from "framer-motion";

export const FAQSection = () => {
  const faqs = [
    {
      question: "Чем это отличается от обычного блокнота?",
      answer: "Наш Дневник Трейдера специально разработан с предварительно отформатированными страницами для документирования сделок, отслеживания результатов и торговой психологии. Он включает специализированные разделы, такие как калькуляторы риска/прибыли, шаблоны для записи сделок и страницы для анализа результатов, которых нет в обычных блокнотах."
    },
    {
      question: "Как долго прослужит один дневник?",
      answer: "Стандартное издание содержит 200 страниц, которых обычно хватает на 3-6 месяцев для активных трейдеров. Профессиональное издание с 300 страницами может прослужить 6-9 месяцев в зависимости от частоты торговли. Многие трейдеры приобретают наш комплект, чтобы покрыть полный год торговли."
    },
    {
      question: "Осуществляете ли вы международную доставку?",
      answer: "Да, мы доставляем по всему миру! Стандартная доставка бесплатна для всех заказов. Международная доставка обычно занимает 7-14 рабочих дней, а внутренние заказы прибывают в течение 3-5 рабочих дней. Варианты экспресс-доставки доступны при оформлении заказа."
    },
    {
      question: "Могу ли я получить возврат средств, если я не удовлетворен?",
      answer: "Абсолютно! Мы предлагаем 30-дневную гарантию удовлетворенности. Если вы не полностью удовлетворены своим дневником, вы можете вернуть его для полного возмещения (за исключением стоимости доставки). Дневник должен быть в неиспользованном состоянии."
    },
    {
      question: "Подходит ли это для всех типов торговли?",
      answer: "Да, наш дневник разработан для работы на всех торговых рынках, включая акции, опционы, форекс, фьючерсы и криптовалюты. Шаблоны достаточно гибкие, чтобы приспособиться к различным торговым стилям и временным рамкам."
    },
    {
      question: "Предлагаете ли вы цифровые версии?",
      answer: "Наш фокус на физических дневниках, так как исследования показывают, что рукописный ввод улучшает запоминание и обучение. Однако Профессиональный комплект включает PDF-шаблоны, которые вы можете использовать в цифровом виде или распечатать при необходимости для резервного копирования."
    }
  ];

  return (
    <section id="faq" className="py-16 md:py-24 bg-content1">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            Часто задаваемые вопросы
          </motion.h2>
          <motion.p 
            className="text-foreground-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Всё, что вам нужно знать о Дневнике Трейдера.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
        >
          <Accordion variant="bordered" selectionMode="multiple">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} title={faq.question}>
                <p className="text-foreground-600">{faq.answer}</p>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-foreground-600">
            Остались вопросы? Свяжитесь с нашей службой поддержки по адресу <span className="text-primary">support@dnevniktreidera.ru</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};