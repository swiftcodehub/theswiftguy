import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { defineConfig, createContentLoader, type SiteConfig } from 'vitepress'

const hostname: string = 'https://theswiftguy.in'

export default defineConfig({
  lang: 'en-US',
  title: "The Swift Guy",
  description: "Learn SwiftUI and UIKit",
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
      { text: 'Home', link: '/' }
    ],

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
  },
  buildEnd: async (config: SiteConfig) => {
    const feed = new Feed({
      title: 'The Swift Guy',
      description: 'Learn SwiftUI and UIKit',
      id: hostname,
      link: hostname,
      language: 'en',
      image: 'https://theswiftguy.in/logo.png',
      favicon: `${hostname}/favicon.ico`,
      copyright:
        'Copyright (c) 2024-present, The Swift Guy'
    })

    // You might need to adjust this if your Markdown files 
    // are located in a subfolder
    const posts = await createContentLoader('*.md', {
      excerpt: true,
      render: true
    }).load()
  
    posts.sort(
      (a, b) =>
        +new Date(b.frontmatter.date as string) -
        +new Date(a.frontmatter.date as string)
    )
  
    for (const { url, excerpt, frontmatter, html } of posts) {
      feed.addItem({
        title: frontmatter.title,
        id: `${hostname}${url}`,
        link: `${hostname}${url}`,
        description: excerpt,
        content: html,
        author: [
          {
            name: 'Sravan Goud',
            email: 'tsravangoud164@gmail.com',
            link: 'https://theswiftguy.in/developers'
          }
        ],
        date: frontmatter.date
      })
    }
  
    writeFileSync(path.join(config.outDir, 'feed.rss'), feed.rss2())
  }
})
