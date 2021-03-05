const withPlugins = require("next-compose-plugins")
const withPWA = require("next-pwa")
const runtimeCaching = require("next-pwa/cache")

const __prod__ = process.env.NODE_ENV === "production"

const devConfig = {
	// experimental: {
	// 	reactStrictMode: true,
	// },
}

const productionConfig = {
	...devConfig,
	experimental: {
		// modern: true,
		// polyfillsOptimization: true,
	},
}

const config = __prod__ ? productionConfig : devConfig

// List of plugins
const plugins = []

if (__prod__) {
	plugins.push(
		withPWA({
			pwa: {
				dest: "public",
				runtimeCaching,
			},
		})
	)
}

module.exports = withPlugins([...plugins], config)
