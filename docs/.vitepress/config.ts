import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: "The Swift Guy",
  description: "Learn Swift, SwiftUI and UIKit",
  cleanUrls: true,
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: 'Home', link: '/' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tsra0ne/theswiftguy' }
    ]
  }
})
