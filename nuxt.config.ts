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
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }]
  },
  css: ['~/assets/style.less'],
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
  }
};

export default config;
