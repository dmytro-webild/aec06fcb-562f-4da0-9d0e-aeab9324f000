import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: number | string;
  fill?: string;
  textAnchor?: 'start' | 'middle' | 'end';
  dominantBaseline?: 'auto' | 'middle' | 'hanging' | 'ideographic' | 'mathematical';
}

export const SvgTextLogo = React.forwardRef<SVGSVGElement, SvgTextLogoProps>(
  (
    {
      text,
      className = '',
      fontSize = 48,
      fontWeight = 700,
      fill = 'currentColor',
      textAnchor = 'middle',
      dominantBaseline = 'middle',
    },
    ref
  ) => {
    return (
      <svg
        ref={ref}
        viewBox="0 0 400 100"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          x="200"
          y="50"
          fontSize={fontSize}
          fontWeight={fontWeight}
          fill={fill}
          textAnchor={textAnchor}
          dominantBaseline={dominantBaseline}
        >
          {text}
        </text>
      </svg>
    );
  }
);

SvgTextLogo.displayName = 'SvgTextLogo';

export default SvgTextLogo;