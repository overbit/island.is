import * as React from 'react'
import { SvgProps as SVGRProps } from '../Icon'

const SvgPersonAddSharp = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      className="person-add-sharp_svg__ionicon"
      viewBox="0 0 512 512"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M106 304v-54h54v-36h-54v-54H70v54H16v36h54v54h36z" />
      <circle cx={288} cy={144} r={112} />
      <path d="M288 288c-69.42 0-208 42.88-208 128v64h416v-64c0-85.12-138.58-128-208-128z" />
    </svg>
  )
}

export default SvgPersonAddSharp
