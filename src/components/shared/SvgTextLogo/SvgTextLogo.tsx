import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: number | string;
  letterSpacing?: number;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 32,
  fontWeight = 700,
  letterSpacing = 0,
}) => {
  const svgWidth = text.length * (fontSize * 0.6) + 40;
  const svgHeight = fontSize + 20;

  return (
    <svg
      width={svgWidth}
      height={svgHeight}
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x="20"
        y={fontSize + 10}
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        fill="currentColor"
        dominantBaseline="auto"
        textAnchor="start"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;
