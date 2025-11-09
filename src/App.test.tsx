// src/App.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest'; // Import 3 ตัวหลักจาก vitest
import App from './App';

describe('App component', () => {
  it('ควรจะ render heading หลัก', () => {
    // 1. Render component ขึ้นมาในหน่วยความจำ
    render(<App />);

    // 2. ค้นหา element ที่ต้องการ
    // (หน้าเริ่มต้นของ Vite จะมีข้อความ "Vite + React")
    const heading = screen.getByText(/vite \+ react/i); 

    // 3. ยืนยันว่า element นั้นอยู่บนหน้าจอจริง
    expect(heading).toBeInTheDocument();
  });
});