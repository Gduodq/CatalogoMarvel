import React from 'react'

export const MarvelLogoSmallIcon = ({ color = '#404040', width = 215, height = 32 }) => {
  const [fatorConversaoImageX, fatorConversaoImagemY] = [88 / 215, 32 / 32]
  const [fatorConversaoTextoX, fatorConversaoTextoY] = [108 / 215, 24 / 32]
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g id="Guide" transform="translate(-78.000000, -313.000000)">
          <g id="logo_menor" transform="translate(78.000000, 313.000000)">
            <image
              id="Vector-Smart-Object"
              x="0"
              y="0"
              width={width * fatorConversaoImageX}
              height={height * fatorConversaoImagemY}
              xlinkHref="data:image/png;base64,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"
            ></image>
            <text id="Search-heros" fontFamily=".AppleSystemUIFont" fontSize="16.672" fontWeight="500" fill={color}>
              <tspan x={width * fatorConversaoTextoX} y={height * fatorConversaoTextoY}>
                Search heros
              </tspan>
            </text>
          </g>
        </g>
      </g>
    </svg>
  )
}
