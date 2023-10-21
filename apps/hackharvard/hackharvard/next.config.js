const styleJsx = require('styled-jsx/webpack');

module.exports = {
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.(scss|css)$/i,
      use: [
        defaultLoaders.babel,
        {
          loader: styleJsx.loader,
          options: {
            type: 'scoped'
          }
        }
      ],
    });

    config.externals = (config.externals || []).concat('pg-promise');
    config.resolve = {
      ...config.resolve,
      fallback: {
        fs: false,
        path: false,
        os: false,
        dns: false,
        net: false,
        tls: false
      }
    };
    config.watchOptions = {
      poll: 800,
      aggregateTimeout: 300
    };
    return config;
  },
  reactStrictMode: false
};
