import * as React from "react";
const SvgCommonProgress = (props) => (
  <svg
    width={353}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#common_progress_svg__a)">
      <rect x={10} y={10} width={333} height={13} rx={6.5} fill="#2ECC71" />
    </g>
    <defs>
      <filter
        id="common_progress_svg__a"
        x={0}
        y={0}
        width={353}
        height={33}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius={5}
          operator="dilate"
          in="SourceAlpha"
          result="effect1_dropShadow_148_1769"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={2.5} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.620833 0 0 0 0 0.61566 0 0 0 0 0.61566 0 0 0 0.05 0" />
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_148_1769"
        />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_148_1769"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
export default SvgCommonProgress;
