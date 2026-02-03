import { motion } from 'framer-motion';
import { Clock, Award, Globe2, Wallet } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: '15+ Years of Experience',
    description: 'With over 15 years of expertise, we consistently deliver outstanding results by adapting to evolving design trends and technologies.',
  },
  {
    icon: Award,
    title: '1,000+ Projects Delivered',
    description: 'Our extensive portfolio demonstrates our commitment and proficiency, having successfully transformed over 1000 brands worldwide.',
  },
  {
    icon: Globe2,
    title: 'Modern Global Standards',
    description: 'We design with the future in mind, staying current with the latest global trends, tools, and methodologies for premium results.',
  },
  {
    icon: Wallet,
    title: 'Affordable Excellence',
    description: 'We believe exceptional branding should be accessible. Our pricing delivers professional, high-quality designs within your budget.',
  },
];

export const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Us?
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center group"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-20 bg-card rounded-3xl p-10 border border-border"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
            Why are we a successful Design Agency?
          </h3>
          <ul className="grid md:grid-cols-2 gap-6">
            {[
              'Our team combines creative designers, strategic thinkers, and branding experts with years of industry experience.',
              'We understand local market dynamics and craft brands that connect deeply with your audience.',
              'We work until the final result exceeds your expectations—our success stories prove our reliability.',
              'We are dedicated to making your business the top brand in its field.',
              'We pride ourselves on delivering top-class designs within committed timelines.',
            ].map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center mt-1">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                </span>
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};
