import * as React from "react";

function SvgAlert20(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M10 7a1 1 0 011 1v2.5a1 1 0 11-2 0V8a1 1 0 011-1zM10 14.5a1 1 0 100-2 1 1 0 000 2z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.326 18H4.674c-2.27 0-3.717-2.424-2.641-4.422l5.326-9.891c1.132-2.104 4.15-2.104 5.282 0l5.326 9.89c1.076 2-.371 4.423-2.641 4.423zM4.674 16h10.652a1 1 0 00.88-1.474l-5.325-9.89a1 1 0 00-1.761 0l-5.326 9.89A1 1 0 004.674 16z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAlert20;
