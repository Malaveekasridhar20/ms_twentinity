import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'How quickly can you deliver results?',
    answer: 'Logo designs: 3-5 days, Basic websites: 1-2 weeks, Complete branding: 1-2 weeks, SEO results: 2-3 months. We prioritize quick turnaround times without compromising quality, helping you launch faster and start seeing ROI sooner.',
  },
  {
    question: 'Do you guarantee your work?',
    answer: 'Absolutely! We are committed to delivering exceptional results. We provide unlimited revisions until you\'re 100% happy with the results and maintain open communication throughout the project.',
  },
  {
    question: 'Can you help small businesses compete with larger companies?',
    answer: 'Yes! Our SEO and digital marketing strategies are specifically designed to help small businesses compete effectively. We focus on local SEO, targeted advertising, and marketing tactics that deliver big results.',
  },
  {
    question: 'What\'s included in your SEO packages?',
    answer: 'Our SEO packages include keyword research, on-page optimization, content creation, local SEO setup, Google My Business optimization, monthly reporting, and ongoing technical improvements.',
  },
  {
    question: 'Do you work with startups and small businesses?',
    answer: 'Absolutely! We specialize in helping startups and small businesses establish their online presence. We understand business needs and offer scalable solutions that grow with your business.',
  },
  {
    question: 'What technologies do you use for web development?',
    answer: 'We use modern technologies including React, Next.js, Node.js, and other cutting-edge frameworks to build fast, secure, and scalable websites that perform excellently across all devices.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes! We provide ongoing support and maintenance services to ensure your website and digital assets continue to perform optimally. We\'re here to help you succeed long-term.',
  },
  {
    question: 'How do you ensure the quality of your work?',
    answer: 'We follow industry best practices, conduct thorough testing, and maintain high standards throughout our development process. Our experienced team ensures every project meets professional quality standards.',
  },
];

export const FAQSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Get answers to the most frequently asked questions about our 
            services and how we help businesses grow online.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-display text-lg font-semibold text-foreground hover:text-primary py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
