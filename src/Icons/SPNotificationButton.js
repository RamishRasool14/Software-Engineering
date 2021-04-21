import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            width={18}
            height={18}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <Path
                d="M16.425 14.065l-.17-.15A7.186 7.186 0 0115 12.45a6.315 6.315 0 01-.675-2.405v-2.47A5.405 5.405 0 009.605 2.2v-.645a.667.667 0 10-1.335 0v.655a5.405 5.405 0 00-4.665 5.365v2.47a6.315 6.315 0 01-.675 2.405 7.204 7.204 0 01-1.235 1.465l-.17.15v1.41h14.9v-1.41zM7.66 16a1.325 1.325 0 002.625 0H7.66z"
                fill="#fff"
            />
        </Svg>
    )
}

export default SvgComponent