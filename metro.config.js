/**
 * ============================================================================
 * @GovernorAuthority
 * ============================================================================
 */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { getDefaultConfig } = require('metro-config')

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig()

  return {
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      blockList: [/backend\/.*/],
      sourceExts: [...sourceExts, 'svg'],
    },
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
    },
  }
})()
