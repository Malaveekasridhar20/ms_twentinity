import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    role: 'Director, Livercure Clinic',
    content: 'MS TWENTINITY created an outstanding website for our clinic. The design is professional, user-friendly, and has significantly improved our online presence. Our patients love the easy appointment booking system.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Rtn. Suresh Babu',
    role: 'President, Rotary Club of Diamond City',
    content: 'The team delivered an exceptional website that perfectly represents our club\'s values and activities. The event management features and member portal have streamlined our operations significantly.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Owner, Photo Studio Pro',
    content: 'The billing software developed by MS TWENTINITY has revolutionized our studio operations. It\'s intuitive, efficient, and has saved us countless hours. The design work was equally impressive.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Venkatesh Raman',
    role: 'Managing Director, Trichy Motors',
    content: 'MS TWENTINITY understood our automotive business needs perfectly. They created a comprehensive digital solution that has enhanced our customer experience and boosted our sales.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Meera Devi',
    role: 'CEO, Cauvery Textiles',
    content: 'Working with MS TWENTINITY was a pleasure. Their team is professional, creative, and delivered exactly what we envisioned for our textile business. The e-commerce platform works flawlessly.',
    rating: 5,
  },
  {
    id: 6,
    name: 'Prof. Anand Kumar',
    role: 'Dean, NIT Trichy',
    content: 'The digital solutions provided by MS TWENTINITY for our alumni network have been exceptional. Their understanding of educational institutions and technical expertise is commendable.',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

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
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client Reviews
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="font-semibold">4.9</span>
            <span>• 50+ reviews</span>
          </div>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="testimonial-card rounded-3xl p-10 text-center"
            >
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 font-display italic">
                "{testimonials[currentIndex].content}"
              </p>
              <div>
                <h4 className="text-lg font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'bg-primary w-8' : 'bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={goToNext}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
