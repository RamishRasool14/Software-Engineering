import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={43}
      height={46}
      viewBox="0 0 23 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M5.066 14.643h8.052v1.845H5.066v-1.845zM5.066 10.028h12.079v1.846H5.065v-1.846zM5.066 19.257h5.033v1.845H5.066v-1.845z"
        fill="#572D6B"
      />
      <Path
        d="M20.132 2.769h-3.02v-.923c0-.49-.212-.96-.59-1.305A2.11 2.11 0 0015.1 0H7.046a2.11 2.11 0 00-1.423.54c-.378.347-.59.816-.59 1.306v.923h-3.02a2.11 2.11 0 00-1.423.54C.212 3.655 0 4.125 0 4.614v19.38c0 .49.212.96.59 1.305.377.346.89.54 1.423.54h18.119a2.11 2.11 0 001.423-.54c.378-.346.59-.815.59-1.305V4.614c0-.49-.212-.959-.59-1.305a2.11 2.11 0 00-1.423-.54zM7.046 1.846H15.1v3.691H7.046V1.846zm13.086 22.148H2.013V4.614h3.02v2.769h12.079V4.614h3.02v19.38z"
        fill="#572D6B"
      />
    </Svg>
  )
}

export default SvgComponent
