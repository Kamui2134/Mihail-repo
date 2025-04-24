import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
	plugins: [react()],
	server: {
		port: 5173,
		open: '/',
	},
	resolve: {
		alias: {
			'@entities': path.resolve(__dirname, 'src/entities/index.ts'),
			'@features': path.resolve(__dirname, 'src/features/index.ts'),
			'@fonts': path.resolve(__dirname, 'src/fonts/index.ts'),
			'@images': path.resolve(__dirname, 'src/images'),
			'@pages': path.resolve(__dirname, 'src/pages/index.ts'),
			'@router': path.resolve(__dirname, 'src/router/index.ts'),
			'@shared': path.resolve(__dirname, 'src/shared/index.ts'),
			'@store': path.resolve(__dirname, 'src/store/index.ts'),
			'@widgets': path.resolve(__dirname, 'src/widgets/index.ts'),
			'@': path.resolve(__dirname, 'src'),
		},
	},
})
