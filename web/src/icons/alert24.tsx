import * as React from "react";

function SvgAlert24(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M14.651 3.734l7.34 13.862C23.047 19.594 21.6 22 19.338 22H4.661C2.4 22 .95 19.594 2.01 17.596L9.349 3.734c1.127-2.129 4.175-2.129 5.302 0l-1.767.935a1.002 1.002 0 00-1.423-.376.993.993 0 00-.345.376L3.777 18.532A1 1 0 004.661 20h14.678a1 1 0 00.884-1.468L12.883 4.67l1.768-.935z"
        fill="currentColor"
      />
      <path
        d="M12 8a1 1 0 011 1v4a1 1 0 11-2 0V9a1 1 0 011-1zM12 18a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgAlert24;
