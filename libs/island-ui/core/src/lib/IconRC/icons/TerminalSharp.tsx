import * as React from 'react'
import { SvgProps as SVGRProps } from '../Icon'

const SvgTerminalSharp = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      className="terminal-sharp_svg__ionicon"
      viewBox="0 0 512 512"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M16 44v424a12 12 0 0012 12h456a12 12 0 0012-12V44a12 12 0 00-12-12H28a12 12 0 00-12 12zm57.51 193.5l76.88-61.5-76.88-61.5 20-25 108.1 86.5L93.5 262.49zM272 256h-96v-32h96z" />
    </svg>
  )
}

export default SvgTerminalSharp
