/**
 * @GovernorAuthority
 */

module.exports = {
  plugins: [
    'module-resolver',
    {
      alias: {
        api: './src/api',
        assets: './src/assets',
        components: './src/components',
        config: './src/config',
        const: './src/const',
        i18n: './src/i18n',
        navigation: './src/navigation',
        screens: './src/screens',
        store: './src/store',
        styles: './src/styles',
        utils: './src/utils',
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
      root: ['.'],
    },
  ],
  presets: ['module:metro-react-native-babel-preset'],
}
