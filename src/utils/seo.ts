// SEO utility functions for MS TWENTINITY

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "MS TWENTINITY",
  "alternateName": "MS TWENTINITY Digital Agency",
  "description": "Professional digital agency in Trichy, Tamil Nadu specializing in web design, branding, SEO, and digital marketing services. 5+ years experience with 30+ successful projects delivered.",
  "url": "https://mstwentinity.com",
  "logo": "https://mstwentinity.com/logo.png",
  "image": "https://mstwentinity.com/og-image.jpg",
  "telephone": "+91-9790731131",
  "email": "mstwentinity@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Trichy",
    "addressRegion": "Tamil Nadu",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "10.7905",
    "longitude": "78.7047"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Trichy"
    },
    {
      "@type": "State", 
      "name": "Tamil Nadu"
    },
    {
      "@type": "Country",
      "name": "India"
    }
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "10.7905",
      "longitude": "78.7047"
    },
    "geoRadius": "100000"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9790731131",
    "contactType": "customer service",
    "availableLanguage": ["English", "Tamil"],
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    }
  },
  "sameAs": [
    "https://facebook.com/mstwentinity",
    "https://twitter.com/mstwentinity", 
    "https://linkedin.com/company/mstwentinity",
    "https://instagram.com/mstwentinity"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Web Design & Development",
          "description": "Professional responsive web design and development services for businesses in Trichy and Tamil Nadu"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "SEO Services",
          "description": "Search Engine Optimization services to improve your website ranking on Google and other search engines"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Digital Marketing",
          "description": "Complete digital marketing solutions including social media marketing, Google Ads, and online advertising"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Branding & Logo Design", 
          "description": "Professional branding and logo design services to create unique brand identities"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "30",
    "bestRating": "5",
    "worstRating": "1"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Dr. Rajesh Kumar"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "MS TWENTINITY created an amazing website for our clinic. Professional service and great results!"
    }
  ],
  "foundingDate": "2019",
  "numberOfEmployees": "5-10",
  "slogan": "Transforming Ideas into Digital Reality"
});

export const generateBreadcrumbSchema = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateServiceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "LocalBusiness",
    "name": "MS TWENTINITY",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Trichy",
      "addressRegion": "Tamil Nadu",
      "addressCountry": "IN"
    },
    "telephone": "+91-9790731131"
  },
  "areaServed": {
    "@type": "Place",
    "name": "Trichy, Tamil Nadu, India"
  }
});

export const generateWebPageSchema = (pageName: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": pageName,
  "description": description,
  "url": url,
  "isPartOf": {
    "@type": "WebSite",
    "name": "MS TWENTINITY",
    "url": "https://mstwentinity.com"
  },
  "about": {
    "@type": "LocalBusiness",
    "name": "MS TWENTINITY"
  }
});

// SEO Keywords for different pages
export const seoKeywords = {
  home: "MS TWENTINITY, digital agency Trichy, web design Trichy, SEO services Tamil Nadu, digital marketing Trichy, website development Trichy, branding agency Tamil Nadu, graphic design Trichy, logo design Trichy, responsive web design, e-commerce development, social media marketing Trichy, online marketing Tamil Nadu, business website Trichy, professional web design, affordable web development, local SEO Trichy, Google Ads Trichy, Facebook marketing Tamil Nadu, Trichy web designers, Tamil Nadu digital agency, website design company Trichy, digital marketing company Tamil Nadu",
  
  services: "web design services Trichy, SEO services Tamil Nadu, digital marketing Trichy, branding services Tamil Nadu, graphic design Trichy, logo design services, website development Trichy, e-commerce development Tamil Nadu, social media marketing Trichy, Google Ads services, Facebook marketing Tamil Nadu, responsive web design, professional branding, business website design, local SEO Trichy, online marketing services, digital agency services, web development company Trichy",
  
  portfolio: "MS TWENTINITY portfolio, web design projects Trichy, software development Tamil Nadu, digital agency work, website portfolio India, Trichy web development, Tamil Nadu digital projects, professional website design, software solutions Trichy, graphic design portfolio, UI/UX design Tamil Nadu, e-commerce development Trichy, responsive web design portfolio, business website examples, digital marketing projects",
  
  about: "MS TWENTINITY about, digital agency team Trichy, Tamil Nadu web design company, about us, company profile, digital agency experience, professional web designers Trichy, Tamil Nadu digital marketing team, web development company about, Trichy IT services, digital agency history, team expertise, company mission, business values"
};

// Meta descriptions for different pages
export const metaDescriptions = {
  home: "MS TWENTINITY - Leading digital agency in Trichy, Tamil Nadu offering professional web design, branding, SEO, and digital marketing services. 5+ years experience, 30+ projects delivered. Transform your business with our innovative solutions. Get your free quote today!",
  
  services: "Professional digital services by MS TWENTINITY in Trichy, Tamil Nadu. Expert web design, branding, SEO, digital marketing, graphic design, and e-commerce development. Transform your business with our comprehensive digital solutions. Get free consultation today!",
  
  portfolio: "Explore MS TWENTINITY's portfolio of professional websites, software solutions, and design projects in Trichy, Tamil Nadu. See our work for Rotary Club, Livercure Clinic, Photo Studio Pro, and more. 30+ successful projects delivered with 5+ years experience.",
  
  about: "Meet MS TWENTINITY - a professional digital agency in Trichy, Tamil Nadu with 5+ years experience and 30+ successful projects. Learn about our team, mission, and commitment to delivering innovative web design, branding, SEO, and digital marketing solutions for businesses across Tamil Nadu."
};