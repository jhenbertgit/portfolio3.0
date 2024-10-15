import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { config } from 'dotenv';

config();

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['.data']
		}
	},
	define: {
		'process.env.GOOGLE_APPSCRIPT_URL': JSON.stringify(process.env.GOOGLE_APPSCRIPT_URL)
	}
});
