import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={46}
      height={40}
      viewBox="0 0 23 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.875 26.25h11.25A1.877 1.877 0 0015 24.375v-2.813h-1.875v2.813H1.875v-22.5h11.25v2.813H15V1.874A1.877 1.877 0 0013.125 0H1.875A1.877 1.877 0 000 1.875v22.5a1.877 1.877 0 001.875 1.875z"
        fill="#FF572D"
      />
      <Path
        d="M15.55 17.3l3.361-3.363H5.625v-1.874h13.286L15.55 8.7l1.326-1.326L22.5 13l-5.625 5.625-1.326-1.326z"
        fill="#FF572D"
      />
    </Svg>
  )
}

export default SvgComponent
