import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: [
  '**/gcb.PNG',
  '**/gbhl.PNG',
  '**/yii2.PNG',
  '**/powerbi.PNG',
  '**/excel.PNG',
  '**/python.PNG',
  '**/bi.PNG',
  '**/database.PNG',
  '**/system.PNG'
],
})
