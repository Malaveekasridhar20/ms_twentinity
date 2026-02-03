import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noindex?: boolean;
}

export const SEO = ({
  title = "MS TWENTINITY | Premium Web Design & Digital Marketing Agency in Trichy, Tamil Nadu",
  description = "MS TWENTINITY - Leading digital agency in Trichy, Tamil Nadu offering professional web design, branding, SEO, and digital marketing services. 5+ years experience, 30+ projects delivered. Get your free quote today!",
  keywords = "MS TWENTINITY, digital agency Trichy, web design Trichy, SEO services Tamil Nadu, digital marketing Trichy, website development Trichy, branding agency Tamil Nadu, graphic design Trichy, logo design Trichy, responsive web design, e-commerce development, social media marketing Trichy, online marketing Tamil Nadu, business website Trichy, professional web design, affordable web development, local SEO Trichy, Google Ads Trichy, Facebook marketing Tamil Nadu",
  canonical,
  ogImage = "https://mstwentinity.com/og-image.jpg",
  ogType = "website",
  structuredData,
  noindex = false
}: SEOProps) => {
  const baseUrl = "https://mstwentinity.com";
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Robots */}
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="MS TWENTINITY Digital Agency" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@mstwentinity" />
      
      {/* Local Business Meta */}
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Trichy, Tamil Nadu" />
      <meta name="geo.position" content="10.7905;78.7047" />
      <meta name="ICBM" content="10.7905, 78.7047" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};