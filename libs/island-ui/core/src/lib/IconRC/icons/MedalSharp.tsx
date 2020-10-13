import * as React from 'react'
import { SvgProps as SVGRProps } from '../Icon'

const SvgMedalSharp = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      className="medal-sharp_svg__ionicon"
      viewBox="0 0 512 512"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M80 32L16 160h289.11l80.22-128H80z" />
      <path d="M496 144L424 32 298 231.08a128 128 0 00-84 0L189.53 192H43.82l86.66 134.89a128 128 0 10251 0zM256 422a70 70 0 1170-70 70.08 70.08 0 01-70 70z" />
      <circle cx={256} cy={352} r={32} />
    </svg>
  )
}

export default SvgMedalSharp
