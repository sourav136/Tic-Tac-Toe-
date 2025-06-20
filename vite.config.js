import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { makeOffline } from "vite-plugin-make-offline";
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr(), react(), makeOffline()], 
})