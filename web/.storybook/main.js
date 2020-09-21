module.exports = {
  stories: ['../src/**/*.stories.!(tjm)?(ds)?(x)'],
  addons: [
    '@storybook/addon-docs',
    '@storybook/addon-controls',
    '@storybook/addon-actions',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
    '@storybook/addon-jest',
    '@storybook/addon-links',
    'storybook-addon-designs',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    })

    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
