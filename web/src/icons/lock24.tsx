import * as React from "react";

function SvgLock24(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} fill="none" {...props}>
      <path d="M12 17a2 2 0 100-4 2 2 0 000 4z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 8v1a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3v-6a3 3 0 00-3-3V8A5 5 0 007 8zm5-3a3 3 0 00-3 3v1h6V8a3 3 0 00-3-3zm-5 6a1 1 0 00-1 1v6a1 1 0 001 1h10a1 1 0 001-1v-6a1 1 0 00-1-1H7z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLock24;
