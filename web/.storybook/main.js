module.exports = {
  stories: ['../src//**/*.stories.!(tjm)?(ds)?(x)'],
  addons: [
    '@storybook/addon-knobs/register',
    '@storybook/addon-actions/register',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y/register',
    '@storybook/addon-docs',
    '@storybook/addon-jest/register',
    'storybook-addon-specifications/register',
    '@storybook/addon-links/register',
    'storybook-addon-designs',
  ],
  webpackFinal: async config => {
    const newConfig = config

    // https://github.com/storybookjs/storybook/issues/4082#issuecomment-495370896
    newConfig.node = {
      fs: 'empty',
      module: 'empty',
    }

    newConfig.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    })
    newConfig.resolve.extensions.push('.ts', '.tsx', '.mdx')

    return newConfig
  },
}
