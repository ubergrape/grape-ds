import * as React from "react";

function SvgAlert16(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} fill="none" {...props}>
      <path
        d="M8 5.6a.75.75 0 01.75.75v1.9a.75.75 0 01-1.5 0v-1.9A.75.75 0 018 5.6zM8 11.7A.85.85 0 108 10a.85.85 0 000 1.7z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.13 14.498H3.47c-1.87 0-3.108-2.007-2.201-3.696l4.33-8.066C6.543.978 9.057.978 10 2.736l4.33 8.066c.907 1.689-.33 3.696-2.201 3.696zm-8.66-1.51h8.66a.998.998 0 00.881-1.469l-4.33-8.065a1.001 1.001 0 00-1.762 0l-4.33 8.065a.998.998 0 00.881 1.47z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAlert16;
