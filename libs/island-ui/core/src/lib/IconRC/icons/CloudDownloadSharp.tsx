import * as React from 'react'
import { SvgProps as SVGRProps } from '../Icon'

const SvgCloudDownloadSharp = ({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) => {
  return (
    <svg
      className="cloud-download-sharp_svg__ionicon"
      viewBox="0 0 512 512"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M472.7 189.5c-15.76-10-36.21-16.79-58.59-19.54-6.65-39.1-24.22-72.52-51.27-97.26C334.15 46.45 296.21 32 256 32c-35.35 0-68 11.08-94.37 32a149.7 149.7 0 00-45.29 60.42c-30.67 4.32-57 14.61-76.71 30C13.7 174.83 0 203.56 0 237.6 0 305 55.92 352 136 352h104V208h32v144h124c72.64 0 116-34.24 116-91.6 0-30.05-13.59-54.57-39.3-70.9zM240 419.42L191.98 371l-22.61 23L256 480l86.63-86-22.61-23L272 419.42V352h-32v67.42z" />
    </svg>
  )
}

export default SvgCloudDownloadSharp
