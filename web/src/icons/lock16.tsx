import * as React from "react";

function SvgLock16(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={16} height={16} fill="none" {...props}>
      <path d="M9 10a1 1 0 11-2 0 1 1 0 012 0z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.75 6v-.75a3.25 3.25 0 116.5 0V6c.966 0 1.75.784 1.75 1.75v4.5A1.75 1.75 0 0111.25 14h-6.5A1.75 1.75 0 013 12.25v-4.5C3 6.784 3.784 6 4.75 6zm1.5-.75a1.75 1.75 0 113.5 0V6h-3.5v-.75zM4.75 7.5a.25.25 0 00-.25.25v4.5c0 .138.112.25.25.25h6.5a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-6.5z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLock16;
