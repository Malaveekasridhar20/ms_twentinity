import { motion } from 'framer-motion';
import { Palette, Globe, Search, Layers, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Professional Branding & Logo Design',
    description: 'As a newly opening startup, we create memorable logos and complete brand packages that help small businesses compete with industry leaders. Fresh perspectives for modern brands.',
    link: '#',
    price: 'Contact for Quote'
  },
  {
    icon: Layers,
    title: 'Creative Graphic Design',
    description: 'High-quality graphic design services with innovative approaches. From business cards to marketing materials, we deliver professional designs with startup energy and creativity.',
    link: '#',
    price: 'Contact for Quote'
  },
  {
    icon: Globe,
    title: 'Modern Web Design & Development',
    description: 'Custom, responsive websites built with the latest technologies. Mobile-optimized, SEO-ready websites that convert visitors into customers, designed by our emerging startup team.',
    link: '#',
    price: 'Contact for Quote'
  },
  {
    icon: Search,
    title: 'Strategic SEO & Marketing',
    description: 'Proven SEO strategies with fresh, innovative approaches. Increase your online visibility and attract more customers with our startup-driven digital marketing solutions.',
    link: '#',
    price: 'Contact for Quote'
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium <span className="text-primary">digital services</span> from a fresh startup
          </h2>
          <p className="text-lg text-muted-foreground">
            Get professional results with innovative approaches from our newly opening startup in Trichy, Tamil Nadu. 
            We bring fresh energy and modern solutions to help your business grow online.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="card-glow rounded-2xl p-8 group cursor-pointer"
            >
              <div className="service-icon w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <div className="text-primary font-bold text-lg mb-3">
                {service.price}
              </div>
              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>
              <a
                href={service.link}
                className="inline-flex items-center text-primary font-medium group/link"
              >
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
