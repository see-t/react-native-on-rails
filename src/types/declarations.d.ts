/**
 * Create a custom type to declare the types of assets SVG.
 * https://webpack.js.org/guides/typescript/#importing-other-assets
 */
declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'

  const content: React.FC<SvgProps>
  export default content
}
