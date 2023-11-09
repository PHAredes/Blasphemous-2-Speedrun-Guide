import { defineConfig } from 'vitepress'



// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'en-US',
  title: "Blas2Guide",
  description: "Documentation for vanilla and randomized speedruns",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicons/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicons/apple-touch-icon.png' }],
    ['link', { rel: 'android-chrome', sizes: '192x192', href: '/favicons/android-chrome-192x192.png' }],
    ['link', { rel: 'android-chrome', sizes: '512x512', href: '/favicons/android-chrome-512x512.png' }],
    ['link', { rel: 'manifest', href: '/favicons/manifest.json' }]
  ],
  
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },

    nav: [
      { text: 'Arsenal', link: '/arsenal/' },
      { text: 'Prayers', link: '/prayers/' },
      { text: 'Scenes', link: '/scenes/' },
      { text: 'Techniques', link: '/technique/' }
    ],

    sidebar: [
      {
        text: 'Categories',
        items: [
          { text: 'Arsenal of Penitence', link: '/arsenal/' },
          { text: 'Chants and Quick Verses', link: '/prayers/' },
          { text: 'Scene by Scene', link: '/scenes/' },
          { text: 'Techniques', link: '/technique/' }
        ]
      },
      {
        text: 'About',
        items: [
          { text: 'Contributing', link: '/CONTRIBUTING' },
        ]
      }
    ],

    footer: {
      message: 'Released under the MIT License.'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/PHAredes/Blas2-Speedrun-Guide' },
      { icon: 'youtube', link: 'https://www.youtube.com/@Blasphemous2Guide' },
    ],
  }
})
