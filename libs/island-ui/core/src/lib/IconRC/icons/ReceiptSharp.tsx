import * as React from 'react'
import { SvgProps as SVGRProps } from '../Icon'

const SvgReceiptSharp = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      className="receipt-sharp_svg__ionicon"
      viewBox="0 0 512 512"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M448 48l-32-16-32 16-32-16-32 16-32-16-32 16-32-16-32 16-48-16v256.05h224V424c0 30.93 33.07 56 64 56h12c30.93 0 52-25.07 52-56V32zM272.5 240l-.5-32h159.5l.5 32zm-64-80l-.5-32h223.5l.5 32z" />
      <path d="M336 424V320H16v32c0 50.55 5.78 71.62 14.46 87.63C45.19 466.8 71.86 480 112 480h256s-32-20-32-56z" />
    </svg>
  )
}

export default SvgReceiptSharp
