import { motion } from 'framer-motion';
import { ArrowLeft, Palette, Globe, Search, Layers, ArrowRight, Check, Lightbulb, Target, Code, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ScrollToTop } from '@/components/ScrollToTop';
import { WhatsAppButton } from '@/components/WhatsAppButton';

import heroGeometric from '@/assets/hero-geometric.jpg';

const services = [
  {
    icon: Palette,
    title: 'Professional Branding & Logo Design',
    description: 'We create memorable logos and complete brand packages that help businesses compete with industry leaders. Fresh perspectives for modern brands.',
    features: [
      'Logo Design + Multiple Revisions',
      'Brand Guidelines & Style Guide',
      'Business Card Design',
      'Social Media Kit',
      'Brand Identity Package'
    ]
  },
  {
    icon: Layers,
    title: 'Creative Graphic Design',
    description: 'High-quality graphic design services with innovative approaches. From business cards to marketing materials, we deliver professional designs.',
    features: [
      'Marketing Materials Design',
      'Brochure & Flyer Design',
      'Social Media Graphics',
      'Print Design Solutions',
      'Digital Asset Creation'
    ]
  },
  {
    icon: Globe,
    title: 'Modern Web Design & Development',
    description: 'Custom, responsive websites built with the latest technologies. Mobile-optimized, SEO-ready websites that convert visitors into customers.',
    features: [
      'Responsive Web Design',
      'E-commerce Development',
      'CMS Integration',
      'Mobile Optimization',
      'Performance Optimization'
    ]
  },
  {
    icon: Search,
    title: 'Strategic SEO & Marketing',
    description: 'Proven SEO strategies with fresh, innovative approaches. Increase your online visibility and attract more customers with our digital marketing solutions.',
    features: [
      'Search Engine Optimization',
      'Content Marketing Strategy',
      'Social Media Management',
      'Google Ads Management',
      'Analytics & Reporting'
    ]
  },
];

const Services = () => {
  return (
    <>
      <SEO 
        title="Services - MS TWENTINITY | Web Design, SEO & Digital Marketing Services | Trichy, Tamil Nadu"
        description="Professional digital services by MS TWENTINITY in Trichy, Tamil Nadu. Expert web design, branding, SEO, digital marketing, graphic design, and e-commerce development. Transform your business with our comprehensive digital solutions. Get free consultation today!"
        keywords="web design services Trichy, SEO services Tamil Nadu, digital marketing Trichy, branding services Tamil Nadu, graphic design Trichy, logo design services, website development Trichy, e-commerce development Tamil Nadu, social media marketing Trichy, Google Ads services, Facebook marketing Tamil Nadu, responsive web design, professional branding, business website design, local SEO Trichy, online marketing services, digital agency services, web development company Trichy"
        canonical="/services"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Services - MS TWENTINITY Digital Agency",
          "description": "Comprehensive digital services including web design, SEO, digital marketing, branding, and graphic design in Trichy, Tamil Nadu.",
          "url": "https://mstwentinity.com/services",
          "mainEntity": {
            "@type": "Service",
            "name": "Digital Marketing Services",
            "provider": {
              "@type": "Organization",
              "name": "MS TWENTINITY"
            },
            "areaServed": {
              "@type": "Place",
              "name": "Trichy, Tamil Nadu, India"
            }
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://mstwentinity.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": "https://mstwentinity.com/services"
              }
            ]
          }
        }}
      />
      
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroGeometric}
              alt="Services Banner"
              className="w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/90" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mb-6"
              >
                <Button
                  variant="ghost"
                  onClick={() => window.history.back()}
                  className="text-muted-foreground hover:text-primary"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6"
              >
                Our <span className="text-primary">Services</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Comprehensive digital solutions to help your business grow and succeed in the digital landscape.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Premium <span className="text-primary">digital services</span> for your business
              </h2>
              <p className="text-lg text-muted-foreground">
                Get professional results with innovative approaches from our team in Trichy, Tamil Nadu. 
                We bring fresh energy and modern solutions to help your business grow online.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-card rounded-2xl p-8 border border-border hover:shadow-2xl transition-all duration-500 group"
                >
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  <h3 className="font-display text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      if (window.location.pathname !== '/') {
                        window.location.href = '/#contact';
                      } else {
                        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="inline-flex items-center text-primary font-medium group/link"
                  >
                    Get Quote
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Process</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We follow a structured approach to ensure every project delivers exceptional results.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: 'Discovery',
                  description: 'We understand your business goals, target audience, and project requirements.'
                },
                {
                  icon: Target,
                  title: 'Strategy',
                  description: 'We develop a comprehensive strategy tailored to your specific needs and objectives.'
                },
                {
                  icon: Code,
                  title: 'Design & Development',
                  description: 'Our team creates and develops your project with attention to detail and quality.'
                },
                {
                  icon: Rocket,
                  title: 'Launch & Support',
                  description: 'We launch your project and provide ongoing support to ensure continued success.'
                }
              ].map((process, index) => (
                <motion.div
                  key={process.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4">
                    <process.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {process.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-secondary">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Start Your <span className="text-primary">Project</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your requirements and create something amazing together.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg"
                  onClick={() => {
                    if (window.location.pathname !== '/') {
                      window.location.href = '/#contact';
                    } else {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Quote Now
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
      </div>
    </>
  );
};

export default Services;