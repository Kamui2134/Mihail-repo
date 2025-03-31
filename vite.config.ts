import { AliasOptions, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: './',
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@entities': path.resolve(__dirname, './src/entities'),
			'@features': path.resolve(__dirname, './src/features'),
			'@fonts': path.resolve(__dirname, './src/fonts'),
			'@images': path.resolve(__dirname, './src/images'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@router': path.resolve(__dirname, './src/router'),
			'@shared': path.resolve(__dirname, './src/shared'),
			'@store': path.resolve(__dirname, './src/store'),
			'@widgets': path.resolve(__dirname, './src/widgets'),
		},
	},
})
