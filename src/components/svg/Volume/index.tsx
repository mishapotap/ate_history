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
      d="M16.25 8.667a5.417 5.417 0 0 1 0 8.666M19.175 5.417a9.749 9.749 0 0 1 0 15.166M6.5 16.25H4.333a1.083 1.083 0 0 1-1.083-1.083v-4.334A1.083 1.083 0 0 1 4.333 9.75H6.5l3.792-4.875a.867.867 0 0 1 1.625.542v15.166a.866.866 0 0 1-1.625.542L6.5 16.25Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
