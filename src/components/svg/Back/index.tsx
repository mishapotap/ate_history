import * as React from "react"

const SvgComponent = ({ size = '1em', ...props }) => (
  <svg
    width={size}
    height={size}
    style={{
      enableBackground: "new 0 0 15.207 10.854",
    }}
    viewBox="0 0 15.207 10.854"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path
      d="M11.707 0h-4v1h4c1.378 0 2.5 1.122 2.5 2.5S13.085 6 11.707 6H1.914L5.06 2.854l-.706-.708L0 6.5l4.354 4.354.707-.707L1.914 7h9.793c1.93 0 3.5-1.57 3.5-3.5s-1.57-3.5-3.5-3.5z"
      fill="currentColor"
    />
  </svg>
)

export default SvgComponent
