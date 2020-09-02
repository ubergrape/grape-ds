import * as React from 'react'

const SvgClose20 = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg width={20} height={20} fill="none" {...props}>
      <path
        d="M5.707 4.293a1 1 0 00-1.414 1.414L8.586 10l-4.293 4.293a1 1 0 101.414 1.414L10 11.414l4.293 4.293a1 1 0 001.414-1.414L11.414 10l4.293-4.293a1 1 0 00-1.414-1.414L10 8.586 5.707 4.293z"
        fill="currentColor"
      />
    </svg>
  )
}

export default SvgClose20
