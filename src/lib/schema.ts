import { site } from "../data/site";

export const baseSchemas = () => {
  const address = {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.country
  };

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.name,
      url: site.url,
      email: site.email,
      telephone: site.phone,
      sameAs: site.socials
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: site.name,
      url: site.url,
      telephone: site.phone,
      image: `${site.url}/og-default.svg`,
      address,
      areaServed: site.areas.map((area) => ({
        "@type": "City",
        name: area
      })),
      geo: {
        "@type": "GeoCoordinates",
        latitude: site.coordinates.lat,
        longitude: site.coordinates.lng
      },
      openingHours: site.hours,
      priceRange: "$$"
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.name,
      url: site.url
    }
  ];
};

interface Crumb {
  name: string;
  url: string;
}

export const buildBreadcrumbSchema = (crumbs: Crumb[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((crumb, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: crumb.name,
    item: new URL(crumb.url, site.url).toString()
  }))
});

interface FaqItem {
  q: string;
  a: string;
}

export const buildFaqSchema = (items: FaqItem[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.a
    }
  }))
});

interface ServiceProps {
  name: string;
  description: string;
  url: string;
}

export const buildServiceSchema = ({ name, description, url }: ServiceProps) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  provider: {
    "@type": "LocalBusiness",
    name: site.name,
    url: site.url
  },
  areaServed: site.areas.map((area) => ({
    "@type": "City",
    name: area
  })),
  url: new URL(url, site.url).toString()
});

export const buildContactSchema = () => ({
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: `Контакты ${site.name}`,
  description: `Свяжитесь с нами: ${site.phone}, ${site.email}. Адрес: ${site.address.city}, ${site.address.street}`,
  url: `${site.url}/kontakty`,
  mainEntity: {
    "@type": "LocalBusiness",
    name: site.name,
    image: `${site.url}/og-default.svg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country
    },
    telephone: site.phone,
    email: site.email,
    openingHours: site.hours
  }
});
