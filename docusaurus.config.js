// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'IT is Miller Consulting Specialist',
  tagline: '10+ years of experience in IT',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://millerit.co.nz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'simontheteemo', // Usually your GitHub org/user name.
  projectName: 'mcssite', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  headTags: [
    // Preconnect for performance
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    // JSON-LD structured data
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org/',
        '@type': 'Organization',
        name: 'Miller Consulting Specialist',
        url: 'https://millerit.co.nz',
        logo: 'https://millerit.co.nz/img/logo.svg',
        description: 'Miller Consulting Specialist is a consulting company that provides IT services to businesses in Auckland, New Zealand.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Auckland',
          addressCountry: 'NZ',
        },
        sameAs: [
          'https://github.com/simontheteemo',
        ],
      }),
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // SEO metadata
      metadata: [
        {
          name: 'keywords',
          content: 'Miller Consulting Specialist, MillerIT, IT, Consulting, Specialist, Auckland, New Zealand',
        },
        {
          name: 'description',
          content: 'Miller Consulting Specialist is a consulting company that provides IT services to businesses in Auckland, New Zealand.',
        },
        // Add Twitter Card meta tags
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: 'Miller Consulting Specialist - IT Services Auckland',
        },
        {
          name: 'twitter:description',
          content: 'Professional IT consulting services in Auckland, New Zealand. 10+ years of experience.',
        },
        // Open Graph meta tags
        {
          property: 'og:title',
          content: 'Miller Consulting Specialist - IT Services Auckland',
        },
        {
          property: 'og:description',
          content: 'Professional IT consulting services in Auckland, New Zealand. 10+ years of experience.',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: 'https://millerit.co.nz',
        },
      ],
      // Replace with your project's social card
      image: 'img/logo.svg',
      navbar: {
        title: '',
        logo: {
          alt: 'Miller Consulting Specialist Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Time line',
          },
          {to: '/aboutus', label: 'About us', position: 'left'},
          {
            href: 'https://simontheteemo.github.io/Movie2U/',
            label: 'Movie2U 🚀',
            position: 'left',
          },
          {
            href: 'https://simontheteemo.github.io/mcs/',
            label: 'Featured Projects',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Miller Consulting Specialist, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
