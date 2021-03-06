import * as React from "react"

const SvgComponent = ({ size = '1em', active, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 46 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          d="M43.753 27.426C40.783 17.799 35.041 8.48 27.386 3.32 22.766.164 16.958-1.377 11.942 1.704 8.247 3.86 4.352 6.248 2.241 10.56-1.983 19.417.459 30.43 3.693 39.132c1.848 5.082 3.762 10.088 5.61 15.17 2.31 6.316 4.62 12.63 6.995 18.869.924 2.541 1.914 5.16 2.838 7.7.132.386.33.771.462 1.156l1.122-.77c1.056-.693 2.508-1.386 3.432-2.31.858-.925 1.584-2.157 2.376-3.235 3.234-4.39 6.468-8.856 9.767-13.246 2.112-2.85 4.29-5.622 6.27-8.548 5.016-7.24 3.762-18.252 1.188-26.492ZM32.203 49.22c-.395 1.155-1.121 2.002-1.781 2.927-.462.616-.924 1.232-1.32 1.848l-3.366 4.62c-1.452-3.927-2.904-7.778-4.356-11.705a1350.605 1350.605 0 0 1-5.478-14.863c-1.584-4.236-2.838-8.549-2.838-13.246 0-1.387.132-2.696.396-4.005.066-.308.264-1.463.528-1.694.198-.154.726 0 1.122.154.198.077.396.154.462.154 2.112.693 4.026 2.079 5.742 3.696 3.3 3.08 5.94 7.162 7.92 11.475 1.98 4.236 3.365 8.856 3.695 13.708.133 2.156.066 4.698-.726 6.931Z"
          fill="url(#b)"
        />
        <path
          d="m19.535 82.094-16.17-43.82C1.189 32.654.067 27.032.067 21.64c0-7.778 2.442-13.708 6.93-16.711C11.483 1.925 17.093 2.387 22.9 6.238c10.428 7.008 18.545 23.489 18.545 37.505 0 5.93-1.386 10.627-4.026 14.016L19.535 82.094Zm-6.137-69.156c-.793 0-1.585.231-2.178.616-1.716 1.155-2.706 4.082-2.706 8.086 0 4.005.858 8.24 2.574 12.63L21.91 63.535l9.24-12.476c1.452-1.772 1.782-4.929 1.782-7.24 0-10.473-6.534-23.719-14.322-28.956-1.914-1.309-3.696-1.925-5.213-1.925Z"
          fill="url(#d)"
        />
      </g>
      <defs>
        <linearGradient
          id="b"
          x1={18.782}
          y1={26.1}
          x2={38.757}
          y2={58.128}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0.005} stopColor={active ? '#005365' : '#C66735'} />
          <stop offset={1} stopColor={active ? '#0B546B' : '#6B2D0B'} />
        </linearGradient>
        <linearGradient
          id="d"
          x1={33.252}
          y1={64.073}
          x2={-26.027}
          y2={-30.901}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={active ? '#53CBFF' : '#FF8A4B'} />
          <stop offset={1} stopColor={active ? '#C4F1FF' : '#FFC6A8'} />
        </linearGradient>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h46v82.094H0z" />
        </clipPath>
      </defs>
    </svg>
  )
}

export default SvgComponent
