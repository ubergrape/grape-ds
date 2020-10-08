import * as React from "react";

function SvgLock20(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <path
        d="M11.5 12.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 7V6a4 4 0 118 0v1h.5A2.5 2.5 0 0117 9.5v6a2.5 2.5 0 01-2.5 2.5h-9A2.5 2.5 0 013 15.5v-6A2.5 2.5 0 015.5 7H6zm2-1a2 2 0 114 0v1H8V6zM5.5 9a.5.5 0 00-.5.5v6a.5.5 0 00.5.5h9a.5.5 0 00.5-.5v-6a.5.5 0 00-.5-.5h-9z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLock20;
