import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
  // Define your configuration with auto-completion & type checking
  mode: 'universal',
  target: 'static',
  telemetry: false,
  head: {
    title: 'JS.COOL 就是酷',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '为国人开源项目提供免费的子域名'
      },
      {
        hid: 'keywords',
        name: 'keywords',
        content: 'Willin, JS, JS.COOL, 域名'
      },
      { name: 'author', content: 'Willin Wang' },
      { name: 'format-detection', content: 'telephone=no, email=no' }
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ]
  },
  css: ['~/assets/style.less'],
  modules: ['nuxt-i18n', '@nuxtjs/google-adsense'],
  buildModules: ['@nuxtjs/google-analytics', '@nuxtjs/sitemap'],
  i18n: {
    locales: [
      { name: '简体中文', code: 'zh', iso: 'zh-CN', file: 'zh.js' },
      { name: 'English', code: 'en', iso: 'en-US', file: 'en.js' }
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'zh',
    lazy: true,
    langDir: 'i18n/',
    seo: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    vueI18n: {
      fallbackLocale: 'zh'
    }
  },
  build: {
    extractCSS: true,
    extend(cfg, { isDev }) {
      if (isDev) {
        // eslint-disable-next-line no-param-reassign
        cfg.devtool = '#source-map';
      }
    }
  },
  generate: {
    fallback: true
    // subFolders: true
  },
  typescript: {
    typeCheck: {
      eslint: {
        files: './**/*.{ts,js,vue}'
      }
    }
  },
  'google-adsense': {
    id: 'ca-pub-5059418763237956',
    pageLevelAds: true
  },
  googleAnalytics: {
    id: 'UA-33096931-2'
  },
  sitemap: {
    hostname: 'https://js.cool',
    i18n: true
  }
};

export default config;
