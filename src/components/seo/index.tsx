import React from 'react';
import { useSiteMetadata } from '../../hooks/use-site-metadata';

interface SEOProps {
  children?: React.ReactNode;
}

export const SEO = ({ children }: SEOProps) => {
  const { title, description, siteUrl, image } = useSiteMetadata();

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={siteUrl} />
      {children}
    </>
  );
};
