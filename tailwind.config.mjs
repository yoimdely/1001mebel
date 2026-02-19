/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				accent: 'var(--accent)',
				'accent-strong': 'var(--accent-strong)',
				bg: 'var(--bg)',
				surface: 'var(--surface)',
				'surface-2': 'var(--surface-2)',
				text: 'var(--text)',
				muted: 'var(--muted)'
			},
			fontFamily: {
				serif: ['Manrope', 'system-ui', 'sans-serif'],
				sans: ['Manrope', 'system-ui', 'sans-serif'],
				display: ['Manrope', 'system-ui', 'sans-serif']
			},
			boxShadow: {
				gold: '0 30px 80px rgba(214, 179, 106, 0.18)'
			}
		}
	},
	plugins: []
}
