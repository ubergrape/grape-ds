import * as React from "react";

function SvgLock24(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M14 15.5a2 2 0 11-4 0 2 2 0 014 0z" fill="currentColor" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 9V7a5 5 0 0110 0v2h1a3 3 0 013 3v7a3 3 0 01-3 3H6a3 3 0 01-3-3v-7a3 3 0 013-3h1zm2-2a3 3 0 116 0v2H9V7zm-3 4a1 1 0 00-1 1v7a1 1 0 001 1h12a1 1 0 001-1v-7a1 1 0 00-1-1H6z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLock24;
