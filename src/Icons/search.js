import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M7 14c1.763 0 3.37-.66 4.603-1.739l1.337 2.8s.275.224.653.596c.387.363.896.854 1.384 1.367l1.358 1.392.604.646 2.121-2.121-.646-.604-1.392-1.358c-.468-.449-.924-.91-1.367-1.384-.372-.378-.596-.653-.596-.653l-2.8-1.337A6.967 6.967 0 0014 7c0-3.859-3.141-7-7-7S0 3.141 0 7s3.141 7 7 7z"
        fill="#2E305F"
      />
    </Svg>
  )
}

export default SvgComponent
