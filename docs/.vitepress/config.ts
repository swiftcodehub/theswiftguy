import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: "The Swift Guy",
  description: "Learn Swift, SwiftUI and UIKit",
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { href: 'https://fonts.googleapis.com/css?family=Space+Mono:regular,italic,700,700italic', rel: 'stylesheet' }],
    ['link', { href: 'https://fonts.googleapis.com/css?family=Space+Grotesk:regular,italic,700,700italic', rel: 'stylesheet' }]
  ],
  lastUpdated: true,
  appearance: "dark",

  sitemap: {
    hostname: 'https://theswiftguy.in'
  },

  markdown: {
    image: {
      lazyLoading: true
    }
  },

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/blog' },
      { text: 'Leetcode', link: '/leetcode' },
      { text: 'Developers', link: '/developers' }
    ],

    sidebar: {
      '/leetcode/': [
        {
          text: 'Leetcode',
          items: [
            { text: '27. Remove Element', link: '/leetcode/27-remove-element' }
          ]
        }
      ]
    },

    footer: {
      message:
        'Released under the <a href="https://github.com/tsr0ne/theswiftguy/blob/main/LICENSE">MIT License</a>.',
      copyright:
        'Copyright © 2024 <a href="https://github.com/tsra0ne/theswiftguy">The Swift Guy</a>',
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tsra0ne/theswiftguy' }
    ],

    editLink: {
      pattern: 'https://github.com/tsra0ne/theswiftguy/blob/main/docs/:path',
      text: 'Edit this page on GitHub'
    },

    search: {
      provider: "local",
    }
  }
})
