import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={50}
      height={45}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M21.75 0H2.417C1.087 0 0 1.125 0 2.5V25l4.833-5H21.75c1.33 0 2.417-1.125 2.417-2.5v-15c0-1.375-1.088-2.5-2.417-2.5zm0 17.5H3.83l-1.413 1.462V2.5H21.75v15z"
        fill="#572D6B"
      />
      <Path
        d="M12.083 16.25l1.897-4.287L18.125 10 13.98 8.037 12.083 3.75l-1.897 4.287L6.042 10l4.144 1.963 1.897 4.287z"
        fill="#572D6B"
      />
    </Svg>
  )
}

export default SvgComponent
