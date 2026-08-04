import React from 'react';
import { Helmet } from 'react-helmet-async';
import { seoConfig } from '../config/seo';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  image?: string;
  url?: string;
  author?: string;
  robots?: string;
  type?: string;
  siteName?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  image,
  url,
  author,
  robots = 'index, follow',
  type = 'website',
  siteName,
}) => {
  const seoTitle = title || seoConfig.defaultTitle;
  const seoDescription = description || seoConfig.defaultDescription;
  const seoKeywords = keywords || seoConfig.defaultKeywords;
  const seoImage = image || seoConfig.defaultImage;
  const seoUrl = url || seoConfig.baseUrl + (canonical || '');
  const seoAuthor = author || seoConfig.author;
  const seoSiteName = siteName || seoConfig.siteName;

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      <meta name="author" content={seoAuthor} />
      <meta name="robots" content={robots} />
      {canonical && <link rel="canonical" href={seoConfig.baseUrl + canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoImage} />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:site_name" content={seoSiteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoImage} />
      {seoConfig.twitterHandle && (
        <meta name="twitter:creator" content={seoConfig.twitterHandle} />
      )}
    </Helmet>
  );
};
