import * as React from 'react'
import { SvgProps as SVGRProps } from '../Icon'

const SvgMailOpen = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      className="mail-open_svg__ionicon"
      viewBox="0 0 512 512"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M448.67 154.45L274.1 68.2a41.1 41.1 0 00-36.2 0L63.33 154.45A55.6 55.6 0 0032 204.53v184.61c0 30.88 25.42 56 56.67 56h334.66c31.25 0 56.67-25.12 56.67-56V204.53a55.6 55.6 0 00-31.33-50.08zM252.38 96.82a8.22 8.22 0 017.24 0L429 180.48l-172 85a8.22 8.22 0 01-7.24 0L80.35 181.81z" />
    </svg>
  )
}

export default SvgMailOpen
