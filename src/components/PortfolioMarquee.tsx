import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import rotaryClub from '@/assets/rotary-club.png';
import livercureClinic from '@/assets/livercure-clinic.png';
import photoStudioBilling from '@/assets/photo-studio-billing.png';
import portfolio1Real from '@/assets/portfolio-1-real.png';
import portfolio2Real from '@/assets/portfolio-2-real.png';
import daLuxe from '@/assets/da-luxe.png';
import jewelWebsite from '@/assets/jewel-website.png';
import photoStudioDesign from '@/assets/photo-studio-design.png';

const portfolioItems = [
  { id: 1, image: rotaryClub, title: 'Rotary Club of Diamond City', category: 'Website' },
  { id: 2, image: livercureClinic, title: 'Livercure Clinic', category: 'Website' },
  { id: 3, image: photoStudioBilling, title: 'Photo Studio Pro', category: 'Billing Software' },
  { id: 4, image: portfolio1Real, title: 'Portfolio Project', category: 'Portfolio' },
  { id: 5, image: daLuxe, title: 'Da Luxe', category: 'Website' },
  { id: 6, image: jewelWebsite, title: 'Jewel Website', category: 'Design' },
];

const portfolioItemsRow2 = [
  { id: 7, image: portfolio2Real, title: 'Portfolio Project', category: 'Portfolio' },
  { id: 8, image: photoStudioDesign, title: 'Photo Studio Pro', category: 'Design' },
  { id: 9, image: rotaryClub, title: 'Rotary Club of Diamond City', category: 'Website' },
  { id: 10, image: livercureClinic, title: 'Livercure Clinic', category: 'Website' },
  { id: 11, image: daLuxe, title: 'Da Luxe', category: 'Website' },
  { id: 12, image: jewelWebsite, title: 'Jewel Website', category: 'Design' },
];

const PortfolioCard = ({ image, title, category }: { image: string; title: string; category: string }) => (
  <div className="relative group flex-shrink-0 w-[350px] h-[260px] mx-4 rounded-2xl overflow-hidden">
    <img
      src={image}
      alt={title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
      <p className="text-primary text-sm font-medium mb-1">{category}</p>
      <h3 className="text-foreground text-xl font-display font-semibold">{title}</h3>
    </div>
  </div>
);

export const PortfolioMarquee = () => {
  return (
    <section id="portfolio" className="py-20 overflow-hidden">
      {/* Marquee Row 1 */}
      <div className="marquee mb-8">
        <div className="marquee-content">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {portfolioItems.map((item) => (
            <PortfolioCard key={`dup-${item.id}`} {...item} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div className="marquee">
        <div className="marquee-content-reverse">
          {portfolioItemsRow2.map((item) => (
            <PortfolioCard key={item.id} {...item} />
          ))}
        </div>
        <div className="marquee-content-reverse" aria-hidden="true">
          {portfolioItemsRow2.map((item) => (
            <PortfolioCard key={`dup-${item.id}`} {...item} />
          ))}
        </div>
      </div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex justify-center mt-12"
      >
        <Link
          to="/portfolio"
          className="inline-flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium group"
        >
          View All Projects
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </motion.div>
    </section>
  );
};
