import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { PortfolioMarquee } from '@/components/PortfolioMarquee';
import { CTABanner } from '@/components/CTABanner';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { PricingSection } from '@/components/PricingSection';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { ClientLogos } from '@/components/ClientLogos';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { FAQSection } from '@/components/FAQSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { WhatsAppButton } from '@/components/WhatsAppButton';

import { LightThemeEnhancements } from '@/components/LightThemeEnhancements';

const Index = () => {
  return (
    <>
      <SEO 
        title="MS TWENTINITY | Premium Web Design & Digital Marketing Agency in Trichy, Tamil Nadu"
        description="MS TWENTINITY - Leading digital agency in Trichy, Tamil Nadu offering professional web design, branding, SEO, and digital marketing services. 5+ years experience, 30+ projects delivered. Transform your business with our innovative solutions. Get your free quote today!"
        keywords="MS TWENTINITY, digital agency Trichy, web design Trichy, SEO services Tamil Nadu, digital marketing Trichy, website development Trichy, branding agency Tamil Nadu, graphic design Trichy, logo design Trichy, responsive web design, e-commerce development, social media marketing Trichy, online marketing Tamil Nadu, business website Trichy, professional web design, affordable web development, local SEO Trichy, Google Ads Trichy, Facebook marketing Tamil Nadu, Trichy web designers, Tamil Nadu digital agency, website design company Trichy, digital marketing company Tamil Nadu"
        canonical="/"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "MS TWENTINITY - Digital Agency Home",
          "description": "Professional digital agency in Trichy, Tamil Nadu specializing in web design, branding, SEO, and digital marketing services.",
          "url": "https://mstwentinity.com/",
          "mainEntity": {
            "@type": "LocalBusiness",
            "name": "MS TWENTINITY",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Trichy",
              "addressRegion": "Tamil Nadu",
              "addressCountry": "IN"
            },
            "telephone": "+91-9790731131",
            "email": "mstwentinity@gmail.com"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://mstwentinity.com/"
              }
            ]
          }
        }}
      />
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <PortfolioMarquee />
        <CTABanner />
        <AboutSection />
        <ServicesSection />
        <PricingSection />
        <WhyChooseUs />
        <ClientLogos />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
        <LightThemeEnhancements />
      </div>
    </>
  );
};

export default Index;
