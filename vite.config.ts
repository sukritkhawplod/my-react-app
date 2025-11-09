// vite.config.ts
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // เพิ่มส่วนนี้เข้าไป
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts', // (เราจะสร้างไฟล์นี้)
  },
})