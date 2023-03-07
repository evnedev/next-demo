const path = require("path");
const toPath = filePath => path.join(process.cwd(), filePath);
module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-perfect-design",
    "@storybook/addon-coverage",
    "@storybook/addon-actions/register",
    {
      name: 'storybook-addon-next',
      options: {
        nextConfigPath: path.resolve(__dirname, '../next.config.js')
      }
    }
  ],
  "framework": "@storybook/react",
  webpackFinal: async config => {
    config.resolve.modules = [
        ...config.resolve.modules,
        path.resolve(__dirname, '../src'),
        'node_modules'
    ];
    config.resolve.fallback = {
      "fs": false,
      "tls": false,
      "net": false,
      "path": false,
      "zlib": false,
      "http": false,
      "https": false,
      "stream": false,
      "domain": false,
      "console": false,
      "tty": false,
      "os": require.resolve("os-browserify/browser")
    };
    return {
      ...config,
      performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@sentry/node':'@sentry/browser',
          "@emotion/core": toPath("node_modules/@emotion/react"),
          "@emotion/styled": toPath("node_modules/@emotion/styled"),
          "emotion-theming": toPath("node_modules/@emotion/react"),
          '@core': path.resolve(__dirname, "../src/core"),
          '@setup': path.resolve(__dirname, "../src/setup"),
          '@mocks': path.resolve(__dirname, "../src/REST/mocks"),
          '@bus': path.resolve(__dirname, "../src/bus"),
          '@components': path.resolve(__dirname, "../src/components"),
          '@REST': path.resolve(__dirname, "../src/REST"),
          '@helpers': path.resolve(__dirname, "../src/helpers"),
          '@public': path.resolve(__dirname, "../public"),
        },
      },
    };
  },
  core: {
    builder: 'webpack5'
  },
  env: {
    GATSBY_APP_IMAGE_URL_SMALL: 'https://stockdreamengine.s3.us-east-2.amazonaws.com/small-images',
    GATSBY_APP_IMAGE_URL_FULL: 'https://stockdreamengine.s3.us-east-2.amazonaws.com/images',
    IS_STORYBOOK: true,
  }
}