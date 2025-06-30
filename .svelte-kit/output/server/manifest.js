export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["avatar.jpg","favicon.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DinchUVG.js",app:"_app/immutable/entry/app.C7oWPU3V.js",imports:["_app/immutable/entry/start.DinchUVG.js","_app/immutable/chunks/CZupHfpO.js","_app/immutable/chunks/DFNgVpZi.js","_app/immutable/chunks/B1nBU7Yc.js","_app/immutable/entry/app.C7oWPU3V.js","_app/immutable/chunks/B1nBU7Yc.js","_app/immutable/chunks/CWj6FrbW.js","_app/immutable/chunks/DFNgVpZi.js","_app/immutable/chunks/DZB0e5Fn.js","_app/immutable/chunks/BRWucY58.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
