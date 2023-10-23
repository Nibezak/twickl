const { flatRoutes } = require('remix-flat-routes')

/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
const baseConfig =
  process.env.NODE_ENV === "production"
    ? // when running the Netify CLI or building on Netlify, we want to use
      {
        server: "./server.ts",
        serverBuildPath: ".netlify/functions-internal/server.js",
      }
    : // otherwise support running remix dev, i.e. no custom server
      undefined;

/** @type {import('@remix-run/dev').AppConfig} */

module.exports = {
  ...baseConfig,
	ignoredRouteFiles: ['**/.*'],
	tailwind: true,
	postcss: true,
	// appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  serverBuild: {
    entryPoint: './app/entry.server.tsx'
  },
	serverModuleFormat: 'cjs',
	future: {
		v2_dev: true,
		v2_errorBoundary: true,
		v2_headers: true,
		v2_meta: true,
		v2_normalizeFormMethod: true,
		v2_routeConvention: true,
	},
	// ignore all files in routes folder to prevent
  // default remix convention from picking up routes
  ignoredRouteFiles: ['**/*'],
  routes: async defineRoutes => {
    return flatRoutes('routes', defineRoutes)
  },
	serverDependenciesToBundle: [/^swiper.*/, /^ssr-window.*/, /^dom7.*/, /^react-photoswipe-gallery.*/, /^photoswipe.*/],
};


