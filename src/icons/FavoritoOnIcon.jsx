import React from 'react'

export const FavoritoOnIcon = ({ color = '#FF0000', width = 18, height = 18 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Guide" transform="translate(-155.000000, -829.000000)" fill={color} fill-rule="nonzero">
          <path
            d="M171.428712,839.053345 L164.268331,846.885348 C164.199896,846.960594 164.102641,847 164.001802,847 C163.900941,847 163.803707,846.960594 163.735272,846.885348 L156.574892,839.053345 C154.475036,836.760342 154.475036,833.030654 156.574892,830.737651 C157.59779,829.616232 158.962887,829 160.418006,829 C161.750677,829 163.011307,829.515925 164.001802,830.465354 C164.992297,829.515925 166.249322,829 167.581993,829 C169.037112,829 170.405792,829.616232 171.432318,830.737651 C173.524963,833.030654 173.521357,836.760342 171.428712,839.053345 Z"
            id="favorito_on"
          />
        </g>
      </g>
    </svg>
  )
}
