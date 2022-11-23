/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
	dest: 'public',
	register: true,
	mode: 'production',
	disable: false,
})

module.exports = withPWA({
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				hostname: 'api.lorem.space',
			},
		],
		domains: ['placeimg.com'],
	},
});
