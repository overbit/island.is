import * as React from 'react'
import { SvgProps as SVGRProps } from '../Icon'

const SvgCreateSharp = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      className="create-sharp_svg__ionicon"
      viewBox="0 0 512 512"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M464.37 49.2a22.07 22.07 0 00-31.88-.76l-18.31 18.25 31.18 31.1 18-17.91a22.16 22.16 0 001.01-30.68zM252.76 336H176v-76.76l9.4-9.38L323.54 112H48v352h352V188.46L262.14 326.6l-9.38 9.4zM400 143.16l32.79-32.86-31.09-31.09L368.85 112H400v31.16z" />
      <path d="M208 304h31.49L400 143.16V112h-31.15L208 272.51V304z" />
    </svg>
  )
}

export default SvgCreateSharp
