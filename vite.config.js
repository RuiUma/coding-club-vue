import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import Components from 'unplugin-vue-components/vite';
import {PrimeVueResolver} from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    proxy: {
      '/proxy': {
          target: 'http://127.0.0.1:3000',
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/proxy/, ''),
          headers: {
            "Coding-Clubs":"fjdaskljglkfdajglk.gfjdsgiroewnmcxvzxiEFLIUJfklsajd.LJFDISJFKLHUERJKA"
          }
      }
    }
  },
  // server: {
  //   proxy: {
  //     '*': {
  //       target: 'http://127.0.0.1:3000',
  //       changeOrigin: true,
  //       secure: false,
  //       // rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // },

  plugins: [
    vue(),
    Components({
      resolvers: [
        PrimeVueResolver()
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  
})
