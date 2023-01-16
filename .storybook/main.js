module.exports = {
  stories: ["../stories/**/*.stories.js"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    // "@storybook/addon-interactions",
    // "storybook-addon-designs",
    {
      name: "@storybook/addon-postcss",
      options: {
        postcssLoaderOptions: {
          implementation: require("postcss"),
          plugins: [require("tailwindcss"), require("autoprefixer")],
        },
      },
    },
  ],
  framework: "@storybook/vue3",
  core: {
    builder: "@storybook/builder-vite",
  },
};
