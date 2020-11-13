import * as React from "react";

function SvgLock20(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" {...props}>
      <path d="M10 14a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 10a3 3 0 00-3-3V5a4 4 0 00-8 0v2a3 3 0 00-3 3v5a3 3 0 003 3h8a3 3 0 003-3v-5zm-7-7a2 2 0 00-2 2v2h4V5a2 2 0 00-2-2zM6 9a1 1 0 00-1 1v5a1 1 0 001 1h8a1 1 0 001-1v-5a1 1 0 00-1-1H6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLock20;
