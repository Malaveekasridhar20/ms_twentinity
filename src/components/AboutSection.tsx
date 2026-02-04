import { motion } from 'framer-motion';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import aboutTeam from '@/assets/about-team.jpg';

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
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
              crafting impactful brand identities with fresh perspectives and innovative approaches. 
              Our strategy focuses on understanding your business essence and transforming it into 
              designs that effectively communicate your message.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              We bring energy, creativity, and modern solutions to help 
              businesses of all sizes establish their digital presence. We're committed to grow 
              alongside our clients and deliver exceptional results.
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
  );
};
