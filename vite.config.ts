import {defineConfig, loadEnv} from 'vite';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import {VantResolver} from 'unplugin-vue-components/resolvers';
import {resolve} from 'path';
// import postcssPxToViewport from 'postcss-px-to-viewport-8-plugin';
import autoprefixer from 'autoprefixer';
import viteImagemin from 'vite-plugin-imagemin';
// Fix dev server not rewriting the path includes a dot

import pluginRewriteAll from 'vite-plugin-rewrite-all';
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons';

function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir);
}

export default ({mode}) => {
    // const IS_PROD = mode === 'production';
    const env = loadEnv(mode, __dirname);
    // console.log('env', env);
    return defineConfig({
        define: {
            // enable hydration mismatch details in production build
            __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'true'
        },
        base: env.VITE_API_BASE_URL,
        build: {},
        server: {
            host: '0.0.0.0',
            open: false,
            port: 8088,
            proxy: {
                '/api': {
                    target: 'http://127.0.0.1:7878',
                    changeOrigin: true, // 是否将请求header中的origin修改为目标地址
                    // rewrite: (path) => path.replace(/^\/api/, ''),
                },
            },
        },
        resolve: {
            alias: [
                {
                    find: 'vue-i18n',
                    replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
                },
                {
                    find: /\/@\//,
                    replacement: pathResolve('src') + '/',
                },
                {
                    find: /\/#\//,
                    replacement: pathResolve('types') + '/',
                },
                {
                    find: /@\//,
                    replacement: pathResolve('src') + '/',
                },
                {
                    find: /#\//,
                    replacement: pathResolve('types') + '/',
                },
            ],
            extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
        },
        css: {
            postcss: {
                plugins: [
                    // postcssImport(),
                    autoprefixer({
                        overrideBrowserslist: [
                            'Android 4.1',
                            'iOS 7.1',
                            'Chrome > 31',
                            'ff > 31',
                            'ie >= 8',
                            '> 1%',
                        ],
                    }),
                    // postcssPxToViewport({
                    //     unitToConvert: 'px', // 需要转换的单位
                    //     viewportWidth: 750, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
                    //     viewportHeight: 1334, // 视窗的高度，根据750px设备的宽度来指定，一般指定1334，也可以不配置
                    //     unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
                    //     viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
                    //     fontViewportUnit: 'vw', // 字体使用的视口单位
                    //     selectorBlackList: ['.ignore', '.hairlines', '.donut-'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
                    //     minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
                    //     mediaQuery: false, // 允许在媒体查询中转换`px`
                    //     exclude: /node_modules\/vant/, // 排除 Vant 包
                    //     landscape: true,
                    //     landscapeUnit: 'vw',
                    //     landscapeWidth: 1334
                    //     // exclude: /(\/|\\)(node_modules)(\/|\\)/, // 排除node_modules文件中第三方css文件
                    // }),
                    // // vant 是按照375的尺寸
                    // postcssPxToViewport({
                    //     unitToConvert: 'px', // 需要转换的单位
                    //     viewportWidth: 375, // 视窗的宽度，对应的是我们设计稿的宽度，一般是750
                    //     viewportHeight: 1334, // 视窗的高度，根据750px设备的宽度来指定，一般指定1334，也可以不配置
                    //     unitPrecision: 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
                    //     viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
                    //     fontViewportUnit: 'vw', // 字体使用的视口单位
                    //     selectorBlackList: ['.ignore', '.hairlines', '.donut-'], // 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
                    //     minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
                    //     mediaQuery: false, // 允许在媒体查询中转换`px`
                    //     include: /node_modules\/vant/, // 只针对 Vant 包
                    //     landscape: true,
                    //     landscapeUnit: 'vw',
                    //     landscapeWidth: 667
                    // }),
                ],
            },
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/scss/index.scss";',
                },
            },
        },
        plugins: [
            vue(),
            Components({
                resolvers: [VantResolver()],
            }),
            pluginRewriteAll(),
            viteImagemin({
                gifsicle: {
                    optimizationLevel: 7,
                    interlaced: false,
                },
                optipng: {
                    optimizationLevel: 7,
                },
                mozjpeg: {
                    quality: 80,
                },
                pngquant: {
                    quality: [0.8, 0.9],
                    speed: 4,
                },
            }),
            createSvgIconsPlugin({
                iconDirs: [resolve(process.cwd(), 'src/assets/icons')],
                symbolId: 'icon-[dir]-[name]',
            }),
        ],
    });
};
