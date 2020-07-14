const webpack = require("webpack");
module.exports = {
  // stories: ['../src/**/*.stories.js'],
  // addons: [
  //   '@storybook/preset-create-react-app',
  //   '@storybook/addon-actions',
  //   '@storybook/addon-links',
  //   '@storybook/addon-storysource',
  //   '@storybook/addon-knobs',
  // ],
  stories: ['../src/components/Intro.stories.mdx','../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/preset-create-react-app',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-storysource',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
      },
    },
  ],
  webpackFinal: async (config, { configType }) => {
    config.plugins.push(
      // Removing Speedy so the static storybook styling doesn't break
      new webpack.DefinePlugin({
        SC_DISABLE_SPEEDY: true
      })
    );

    return config;
  },
};
