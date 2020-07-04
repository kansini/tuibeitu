module.exports = {
	devServer: {
		open: false,
		port: 8080
	},
	publicPath: './',
	//runtimeCompiler: true,

	css: {
		loaderOptions: {
			sass: {
				prependData: '@import "@/assets/scss/index.scss";'
			}
		}
	}
}
