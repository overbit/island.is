import * as React from 'react'
import { SvgProps as SVGRProps } from '../Icon'

const SvgMic = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      className="mic_svg__ionicon"
      viewBox="0 0 512 512"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M192 448h128m64-240v32c0 70.4-57.6 128-128 128h0c-70.4 0-128-57.6-128-128v-32m128 160v80"
      />
      <path d="M256 320a78.83 78.83 0 01-56.55-24.1A80.89 80.89 0 01176 239V128a79.69 79.69 0 0180-80c44.86 0 80 35.14 80 80v111c0 44.66-35.89 81-80 81z" />
    </svg>
  )
}

export default SvgMic
