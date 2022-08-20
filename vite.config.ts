import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: mode == 'production' ? '/meteor-parallax/' : '/',
    plugins: [react()],
  };
});
