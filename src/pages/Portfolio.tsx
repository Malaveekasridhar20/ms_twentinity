import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ArrowLeft, ExternalLink, Calendar, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { ScrollToTop } from '@/components/ScrollToTop';
import { WhatsAppButton } from '@/components/WhatsAppButton';

import '../styles/portfolio.css';

// Import all project images
import rotaryClub from '@/assets/rotary-club.png';
import livercureClinic from '@/assets/livercure-clinic.png';
import photoStudioBilling from '@/assets/photo-studio-billing.png';
import portfolio1Real from '@/assets/portfolio-1-real.png';
import portfolio2Real from '@/assets/portfolio-2-real.png';
import daLuxe from '@/assets/da-luxe.png';
import jewelWebsite from '@/assets/jewel-website.png';
import photoStudioDesign from '@/assets/photo-studio-design.png';
import heroGeometric from '@/assets/hero-geometric.jpg';

const allProjects = [
  {
    id: 1,
    image: rotaryClub,
    title: 'Rotary Club of Diamond City',
    category: 'Website Development',
    description: 'A modern, responsive website for Rotary Club featuring event management, member portal, and community engagement features.',
    link: 'https://www.rctdc.org/',
    hasWebsite: true
  },
  {
    id: 2,
    image: livercureClinic,
    title: 'Livercure Clinic',
    category: 'Website Development',
    description: 'Professional medical website with appointment booking system, doctor profiles, and patient management features.',
    link: 'https://livercureclinic.com/',
    hasWebsite: true
  },
  {
    id: 3,
    image: photoStudioBilling,
    title: 'Photo Studio Pro',
    category: 'Billing Software',
    description: 'Complete billing and inventory management system for photography studios with client management and invoice generation.',
    link: '#',
    hasWebsite: false
  },
  {
    id: 4,
    image: portfolio1Real,
    title: 'Creative Portfolio',
    category: 'Portfolio Website',
    description: 'Stunning portfolio website showcasing creative work with smooth animations and interactive galleries.',
    link: 'https://malaveekasridhar.vercel.app/',
    hasWebsite: true
  },
  {
    id: 5,
    image: portfolio2Real,
    title: 'Professional Portfolio',
    category: 'Portfolio Website',
    description: 'Clean and professional portfolio design with focus on user experience and performance optimization.',
    link: 'https://repraveenkumar.vercel.app/',
    hasWebsite: true
  },
  {
    id: 6,
    image: daLuxe,
    title: 'Da Luxe',
    category: 'E-commerce Website',
    description: 'Luxury e-commerce platform with advanced product filtering, secure payment integration, and admin dashboard.',
    link: '#',
    hasWebsite: false
  },
  {
    id: 7,
    image: jewelWebsite,
    title: 'Jewel Website',
    category: 'Design & Development',
    description: 'Elegant jewelry website design with product showcase, custom configurator, and seamless shopping experience.',
    link: '#',
    hasWebsite: false
  },
  {
    id: 8,
    image: photoStudioDesign,
    title: 'Photo Studio Pro Design',
    category: 'UI/UX Design',
    description: 'Modern interface design for photography studio management software with intuitive user experience.',
    link: '#',
    hasWebsite: false
  }
];

const categories = ['All', 'Website Development', 'Software', 'Design', 'E-commerce'];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProjects, setFilteredProjects] = useState(allProjects);
  const [rotatingCards, setRotatingCards] = useState<number[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isFiltering, setIsFiltering] = useState(false);

  const filterProjects = (category: string) => {
    setIsFiltering(true);
    setSelectedCategory(category);
    
    setTimeout(() => {
      if (category === 'All') {
        setFilteredProjects(allProjects);
      } else {
        const filtered = allProjects.filter(project => {
          if (category === 'Software') return project.category.includes('Software') || project.category.includes('Billing');
          if (category === 'Design') return project.category.includes('Design') || project.category.includes('UI/UX');
          if (category === 'E-commerce') return project.category.includes('E-commerce');
          return project.category.includes(category);
        });
        setFilteredProjects(filtered);
      }
      setIsFiltering(false);
    }, 300);
  };

  const handleCardClick = (projectId: number) => {
    setRotatingCards(prev => [...prev, projectId]);
    setTimeout(() => {
      setRotatingCards(prev => prev.filter(id => id !== projectId));
    }, 600);
  };

  const handleImageClick = (image: string, project: any) => {
    setSelectedImage(image);
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setSelectedProject(null);
  };

  return (
    <>
      <SEO 
        title="Portfolio - MS TWENTINITY | Web Design & Development Projects | Trichy Digital Agency"
        description="Explore MS TWENTINITY's portfolio of professional websites, software solutions, and design projects in Trichy, Tamil Nadu. See our work for Rotary Club, Livercure Clinic, Photo Studio Pro, and more. 30+ successful projects delivered with 5+ years experience."
        keywords="MS TWENTINITY portfolio, web design projects Trichy, software development Tamil Nadu, digital agency work, website portfolio India, Trichy web development, Tamil Nadu digital projects, professional website design, software solutions Trichy, graphic design portfolio, UI/UX design Tamil Nadu, e-commerce development Trichy, responsive web design portfolio, business website examples, digital marketing projects"
        canonical="/portfolio"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Portfolio - MS TWENTINITY Digital Agency",
          "description": "Portfolio showcasing web design, software development, and digital marketing projects by MS TWENTINITY in Trichy, Tamil Nadu.",
          "url": "https://mstwentinity.com/portfolio",
          "mainEntity": {
            "@type": "CreativeWork",
            "name": "MS TWENTINITY Portfolio",
            "creator": {
              "@type": "Organization",
              "name": "MS TWENTINITY"
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
                "name": "Portfolio",
                "item": "https://mstwentinity.com/portfolio"
              }
            ]
          }
        }}
      />
      
      <div className="min-h-screen bg-background relative">
        <div className="relative z-10">
          <Navbar />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroGeometric}
              alt="Portfolio Banner"
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
                Our <span className="text-primary">Portfolio</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Discover our latest projects and see how we bring innovative digital solutions to life. 
                From websites to software, each project represents our commitment to excellence.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-8 border-b border-border bg-secondary/30">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => filterProjects(category)}
                  className={`filter-button btn-hover-effect px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-lg bounce-in'
                      : 'bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
                >
                  {category}
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            {isFiltering ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center py-20"
              >
                <motion.div
                  className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            ) : (
              <motion.div
                layout
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: 1, 
                      y: 0,
                      rotateY: rotatingCards.includes(project.id) ? 360 : 0
                    }}
                    exit={{ opacity: 0, y: -30 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      rotateY: { duration: 0.6, ease: "easeInOut" }
                    }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onClick={() => handleCardClick(project.id)}
                    className="portfolio-card group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-2xl transition-all duration-500 cursor-pointer"
                  >
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="portfolio-image w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 cursor-zoom-in"
                        whileHover={{ scale: 1.05 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleImageClick(project.image, project);
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Overlay Content */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileHover={{ opacity: 1, y: 0 }}
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500"
                      >
                        <div className="flex gap-3">
                          {project.hasWebsite && (
                            <motion.a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="bg-primary/90 text-primary-foreground hover:bg-primary backdrop-blur-sm px-4 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                              View Website
                            </motion.a>
                          )}
                          <motion.button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleImageClick(project.image, project);
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-secondary/90 text-secondary-foreground hover:bg-secondary backdrop-blur-sm px-4 py-2 rounded-md text-sm font-medium transition-colors"
                          >
                            View Image
                          </motion.button>
                        </div>
                      </motion.div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="inline-flex items-center gap-1 text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                          <Tag className="w-3 h-3" />
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* No Projects Found */}
                {filteredProjects.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-20 col-span-full"
                  >
                    <p className="text-muted-foreground text-lg">
                      No projects found in this category.
                    </p>
                  </motion.div>
                )}
              </motion.div>
            )}
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
                Let's bring your vision to life with our innovative digital solutions. 
                Contact us today to discuss your project requirements.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button
                  size="lg"
                  className="pulse-animation bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg"
                  onClick={() => {
                    if (window.location.pathname !== '/') {
                      window.location.href = '/#contact';
                    } else {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get Started Today
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
        </div>

        {/* Image Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-md"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                exit={{ scale: 0.5, opacity: 0, rotateY: 90 }}
                transition={{ 
                  type: "spring", 
                  damping: 25, 
                  stiffness: 300,
                  rotateY: { duration: 0.6, ease: "easeInOut" }
                }}
                className="relative max-w-4xl max-h-[90vh] mx-4"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <motion.button
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  onClick={closeModal}
                  className="absolute -top-4 -right-4 z-10 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ×
                </motion.button>

                {/* Image */}
                <motion.img
                  src={selectedImage}
                  alt={selectedProject?.title}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", damping: 20 }}
                />

                {/* Project Info Overlay */}
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/95 to-transparent p-6 rounded-b-2xl"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                        {selectedProject?.title}
                      </h3>
                      <p className="text-primary font-medium mb-2">
                        {selectedProject?.category}
                      </p>
                      <p className="text-muted-foreground text-sm">
                        {selectedProject?.description}
                      </p>
                    </div>
                    {selectedProject?.hasWebsite && (
                      <motion.a
                        href={selectedProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-md font-medium flex items-center gap-2 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Visit Website
                      </motion.a>
                    )}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Portfolio;