import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { makeOffline } from "vite-plugin-make-offline";

export default defineConfig({
  plugins: [react(), makeOffline()], 
})