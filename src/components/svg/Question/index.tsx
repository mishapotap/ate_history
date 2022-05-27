import * as React from "react"

const SvgComponent = ({ size = '1em', ...props }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.667 8.667c0-.862.4-1.689 1.11-2.298.712-.61 1.676-.952 2.682-.952h1.083c1.006 0 1.97.342 2.681.952.711.61 1.11 1.436 1.11 2.298a3.25 3.25 0 0 1-2.166 3.25c-.665.311-1.235.902-1.626 1.684-.39.782-.58 1.711-.54 2.65M13 20.583v.011"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
