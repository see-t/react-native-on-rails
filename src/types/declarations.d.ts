/**
 * Create a custom type to declare the types of assets SVG. For more information:
 * https://webpack.js.org/guides/typescript/#importing-other-assets
 * https://duncanleung.com/typescript-module-declearation-svg-img-assets/
 */
declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'

  const content: React.FC<SvgProps>
  export default content
}
