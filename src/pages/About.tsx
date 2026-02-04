import { motion } from 'framer-motion';
import { ArrowLeft, Users, Award, Clock, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ScrollToTop } from '@/components/ScrollToTop';
import { WhatsAppButton } from '@/components/WhatsAppButton';

import { AnimatedCounter } from '@/components/AnimatedCounter';
import aboutTeam from '@/assets/about-team.jpg';
import bannerBg from '@/assets/black-smooth-textured-paper-background.jpg';

const About = () => {
  return (
    <>
      <SEO 
        title="About MS TWENTINITY | Professional Digital Agency Team | Trichy, Tamil Nadu"
        description="Meet MS TWENTINITY - a professional digital agency in Trichy, Tamil Nadu with 5+ years experience and 30+ successful projects. Learn about our team, mission, and commitment to delivering innovative web design, branding, SEO, and digital marketing solutions for businesses across Tamil Nadu."
        keywords="MS TWENTINITY about, digital agency team Trichy, Tamil Nadu web design company, about us, company profile, digital agency experience, professional web designers Trichy, Tamil Nadu digital marketing team, web development company about, Trichy IT services, digital agency history, team expertise, company mission, business values"
        canonical="/about"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "About MS TWENTINITY Digital Agency",
          "description": "Learn about MS TWENTINITY, a professional digital agency in Trichy, Tamil Nadu with 5+ years experience in web design and digital marketing.",
          "url": "https://mstwentinity.com/about",
          "mainEntity": {
            "@type": "AboutPage",
            "name": "About MS TWENTINITY",
            "description": "Professional digital agency team with expertise in web design, branding, SEO, and digital marketing services."
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
                "name": "About",
                "item": "https://mstwentinity.com/about"
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
              src={bannerBg}
              alt="About Banner"
              className="w-full h-full object-cover opacity-60"
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
                About <span className="text-primary">MS TWENTINITY</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                We are a dynamic digital agency based in Trichy, Tamil Nadu, dedicated to 
                delivering innovative digital solutions that help businesses thrive in the digital world.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Main About Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src={aboutTeam}
                    alt="Our creative team at work"
                    className="w-full h-[500px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent" />
                </div>
                {/* Floating Stats Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="absolute -bottom-8 -right-8 bg-card p-6 rounded-2xl shadow-elevated border border-border"
                >
                  <div className="text-center">
                    <span className="block text-5xl font-display font-bold text-primary">
                      <AnimatedCounter end={5} suffix="+" />
                    </span>
                    <span className="text-muted-foreground text-sm">Years Experience</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                  Digital Agency in Trichy, Tamil Nadu
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  MS TWENTINITY is a premier design agency based in Trichy, Tamil Nadu, 
                  crafting impactful brand identities that align with your vision and meet 
                  global standards. Our strategy focuses on understanding your business essence 
                  and transforming it into designs that effectively communicate your message.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Whether you're a startup, small business, or enterprise, we create custom 
                  solutions tailored to your needs. Our designs don't just look great—they 
                  authentically represent what your brand stands for.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
                  <div className="stat-item pr-8">
                    <span className="block text-4xl font-display font-bold text-foreground">
                      <AnimatedCounter end={30} suffix="+" />
                    </span>
                    <span className="text-muted-foreground text-sm">Projects Delivered</span>
                  </div>
                  <div className="stat-item pr-8">
                    <span className="block text-4xl font-display font-bold text-foreground">
                      <AnimatedCounter end={5} suffix="+" />
                    </span>
                    <span className="text-muted-foreground text-sm">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="block text-4xl font-display font-bold text-foreground">
                      <AnimatedCounter end={100} suffix="%" />
                    </span>
                    <span className="text-muted-foreground text-sm">Dedication</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-secondary">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our <span className="text-primary">Values</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We believe in delivering excellence through innovation, creativity, and dedication 
                to our clients' success.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Target,
                  title: 'Innovation',
                  description: 'We stay ahead of trends and use cutting-edge technologies to deliver modern solutions.'
                },
                {
                  icon: Users,
                  title: 'Collaboration',
                  description: 'We work closely with our clients to understand their vision and bring it to life.'
                },
                {
                  icon: Award,
                  title: 'Quality',
                  description: 'We maintain the highest standards in every project we undertake.'
                },
                {
                  icon: Clock,
                  title: 'Reliability',
                  description: 'We deliver projects on time and provide ongoing support to our clients.'
                }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="bg-card p-6 rounded-2xl border border-border text-center"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Ready to Work <span className="text-primary">Together</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss your project and see how we can help you achieve your digital goals.
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
                  Get In Touch
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

export default About;