import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pricingPlans = [
  {
    name: 'Starter',
    price: 'Contact Us',
    period: 'for pricing',
    description: 'Perfect for small businesses just getting started',
    features: [
      'Logo Design + 2 Revisions',
      'Business Card Design',
      'Basic Brand Guidelines',
      'Social Media Kit',
      '7-day delivery',
      'Email Support'
    ],
    popular: false,
    cta: 'Get Started'
  },
  {
    name: 'Professional',
    price: 'Contact Us',
    period: 'for pricing',
    description: 'Complete web presence for growing businesses',
    features: [
      'Custom Website (5 pages)',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      'Google Analytics Setup',
      '30-day support',
      'Free SSL Certificate',
      'Logo + Branding Package'
    ],
    popular: true,
    cta: 'Most Popular'
  },
  {
    name: 'Growth',
    price: 'Contact Us',
    period: 'for pricing',
    description: 'Ongoing marketing to scale your business',
    features: [
      'Monthly SEO Optimization',
      'Content Creation (4 posts)',
      'Social Media Management',
      'Google Ads Management',
      'Monthly Analytics Report',
      'Priority Support',
      'Conversion Optimization'
    ],
    popular: false,
    cta: 'Start Growing'
  }
];

export const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
            Flexible <span className="text-primary">packages</span> for every business
          </h2>
          <p className="text-lg text-muted-foreground">
            As a newly opening startup, we offer customized solutions that fit your budget. 
            Contact us to discuss pricing tailored to your specific needs and requirements.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular 
                  ? 'bg-primary text-primary-foreground shadow-2xl scale-105' 
                  : 'bg-card border border-border'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-lg opacity-80">/{plan.period}</span>
                </div>
                <p className={plan.popular ? 'opacity-90' : 'text-muted-foreground'}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                      plan.popular ? 'text-primary-foreground' : 'text-primary'
                    }`} />
                    <span className={plan.popular ? 'opacity-90' : 'text-foreground'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-semibold ${
                  plan.popular
                    ? 'bg-background text-foreground hover:bg-background/90'
                    : 'bg-primary text-primary-foreground hover:bg-primary/90'
                }`}
                size="lg"
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};