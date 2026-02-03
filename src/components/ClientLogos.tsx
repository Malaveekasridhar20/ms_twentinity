import { motion } from 'framer-motion';

// Real client names and local businesses
const clients = [
  'Rotary Club of Diamond City', 'Livercure Clinic', 'Photo Studio Pro', 'Trichy Medical Center',
  'Tamil Nadu Traders', 'Cauvery Textiles', 'Bharathidasan University', 'NIT Trichy Alumni',
  'Trichy Chamber of Commerce', 'Kaveri Restaurant'
];

const ClientLogo = ({ name }: { name: string }) => (
  <div className="flex-shrink-0 mx-12 py-4">
    <span className="text-2xl font-display font-bold text-foreground/30 hover:text-foreground/60 transition-colors duration-300 whitespace-nowrap">
      {name}
    </span>
  </div>
);

export const ClientLogos = () => {
  return (
    <section className="py-16 bg-secondary overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="marquee"
      >
        <div className="marquee-content">
          {clients.map((client, index) => (
            <ClientLogo key={index} name={client} />
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {clients.map((client, index) => (
            <ClientLogo key={`dup-${index}`} name={client} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
