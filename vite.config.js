import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    base: '/fangchenmi-search/', // 这里改成你的仓库名，前后都要有斜杠
});