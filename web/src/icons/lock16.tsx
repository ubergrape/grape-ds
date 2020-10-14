import * as React from "react";

function SvgLock16(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} fill="none" {...props}>
      <path d="M9 10.5a1 1 0 11-2 0 1 1 0 012 0z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.75 6V4.25a3.25 3.25 0 116.5 0V6h1c.966 0 1.75.784 1.75 1.75v5.5A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25v-5.5C2 6.784 2.784 6 3.75 6h1zm1.5-1.75a1.75 1.75 0 113.5 0V6h-3.5V4.25zM3.75 7.5a.25.25 0 00-.25.25v5.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25v-5.5a.25.25 0 00-.25-.25h-8.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLock16;
