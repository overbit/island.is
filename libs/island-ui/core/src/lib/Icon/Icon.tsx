import React from 'react'
import cn from 'classnames'
import { Colors } from '@island.is/island-ui/theme'

import * as styles from './Icon.treat'

export type IconTypes =
  | 'alert'
  | 'arrowLeft'
  | 'arrowRight'
  | 'bullet'
  | 'caret'
  | 'check'
  | 'cheveron'
  | 'close'
  | 'external'
  | 'info'
  | 'loading'
  | 'user'
  | 'search'
  | 'lock'

type Icons = {
  [Type in IconTypes]: {
    width: string | number
    height: string | number
    viewBox: string
    path?: string
    circle?: object
  }
}

export interface IconProps {
  type: IconTypes
  width?: string | number
  height?: string | number
  color?: Colors
  fill?: string
  title?: string
  spin?: boolean
}

export interface SvgPathContainerProps {
  viewBox: string
  path?: string
  width?: string | number
  height?: string | number
  color?: Colors
  fill?: string
  title?: string
  circle?: object
  spin?: boolean
}

const iconsConf: Icons = {
  user: {
    width: 16,
    height: 16,
    viewBox: '0 0 16 16',
    path:
      'M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V15C0 15.55 0.45 16 1 16H15C15.55 16 16 15.55 16 15V14C16 11.34 10.67 10 8 10Z',
  },
  loading: {
    width: 18,
    height: 20,
    viewBox: '0 0 18 20',
    path:
      'M8.9988 3.25C6.16798 3.25 3.74126 4.99298 2.73899 7.46902C2.47996 8.10894 1.75122 8.4177 1.1113 8.15867C0.471382 7.89964 0.162613 7.1709 0.421645 6.53098C1.79292 3.14336 5.11486 0.75 8.9988 0.75C12.8827 0.75 16.2047 3.14336 17.576 6.53098C17.835 7.1709 17.5262 7.89964 16.8863 8.15867C16.2464 8.4177 15.5176 8.10894 15.2586 7.46902C14.2563 4.99298 11.8296 3.25 8.9988 3.25ZM1.1113 11.8413C1.75122 11.5823 2.47996 11.8911 2.73899 12.531C3.74126 15.007 6.16798 16.75 8.9988 16.75C11.8296 16.75 14.2563 15.007 15.2586 12.531C15.5176 11.8911 16.2464 11.5823 16.8863 11.8413C17.5262 12.1004 17.835 12.8291 17.576 13.469C16.2047 16.8566 12.8827 19.25 8.9988 19.25C5.11486 19.25 1.79292 16.8566 0.421645 13.469C0.162613 12.8291 0.471382 12.1004 1.1113 11.8413Z',
  },
  external: {
    width: 18,
    height: 18,
    viewBox: '0 0 18 18',
    path:
      'M0 10H2V8H0V10ZM0 14H2V12H0V14ZM2 18V16H0C0 17.1 0.89 18 2 18ZM0 6H2V4H0V6ZM12 18H14V16H12V18ZM16 0H6C4.89 0 4 0.9 4 2V12C4 13.1 4.89 14 6 14H16C17.1 14 18 13.1 18 12V2C18 0.9 17.1 0 16 0ZM15 12H7C6.45 12 6 11.55 6 11V3C6 2.45 6.45 2 7 2H15C15.55 2 16 2.45 16 3V11C16 11.55 15.55 12 15 12ZM8 18H10V16H8V18ZM4 18H6V16H4V18Z',
  },
  cheveron: {
    width: 26,
    height: 16,
    viewBox: '0 0 26 16',
    path:
      'M.96 1.324a1.666 1.666 0 000 2.36l11.08 11.08c.52.52 1.36.52 1.88 0L25 3.684a1.666 1.666 0 000-2.36 1.666 1.666 0 00-2.36 0l-9.667 9.653-9.666-9.666a1.662 1.662 0 00-2.347.013z',
  },
  check: {
    width: 23,
    height: 17,
    viewBox: '0 0 23 17',
    path:
      'M7 13.56L2.373 8.933c-.52-.52-1.36-.52-1.88 0-.52.52-.52 1.36 0 1.88l5.574 5.574c.52.52 1.36.52 1.88 0L22.053 2.28c.52-.52.52-1.36 0-1.88-.52-.52-1.36-.52-1.88 0L7 13.56z',
  },
  arrowRight: {
    width: 22,
    height: 22,
    viewBox: '0 0 22 22',
    path:
      'M1.66668 12.3333H16.56L10.0533 18.84C9.53334 19.36 9.53334 20.2133 10.0533 20.7333C10.5733 21.2533 11.4133 21.2533 11.9333 20.7333L20.72 11.9467C21.24 11.4267 21.24 10.5867 20.72 10.0667L11.9467 1.26668C11.4267 0.746678 10.5867 0.746678 10.0667 1.26668C9.54668 1.78668 9.54668 2.62668 10.0667 3.14668L16.56 9.66668H1.66668C0.933343 9.66668 0.333344 10.2667 0.333344 11C0.333344 11.7333 0.933343 12.3333 1.66668 12.3333Z',
  },
  arrowLeft: {
    width: 16,
    height: 16,
    viewBox: '0 0 16 16',
    path:
      'M15 6.99979L3.83 6.99978L8.71 2.11979C9.1 1.72979 9.1 1.08979 8.71 0.699786C8.32 0.309785 7.69 0.309785 7.3 0.699785L0.71 7.28978C0.319999 7.67978 0.319999 8.30978 0.71 8.69978L7.29 15.2998C7.68 15.6898 8.31 15.6898 8.7 15.2998C9.09 14.9098 9.09 14.2798 8.7 13.8898L3.83 8.99978L15 8.99978C15.55 8.99978 16 8.54979 16 7.99978C16 7.44979 15.55 6.99979 15 6.99979Z',
  },
  caret: {
    width: 6,
    height: 10,
    viewBox: '0 0 6 10',
    path:
      'M0.354609 1.03252C0.0458594 1.32502 0.0458594 1.79752 0.354609 2.09002L3.42628 5.00002L0.354609 7.91002C0.0458594 8.20252 0.0458594 8.67502 0.354609 8.96752C0.663359 9.26002 1.16211 9.26002 1.47086 8.96752L5.10461 5.52502C5.41336 5.23252 5.41336 4.76002 5.10461 4.46752L1.47086 1.02502C1.17003 0.740016 0.663359 0.740017 0.354609 1.03252Z',
  },
  search: {
    width: 23,
    height: 23,
    viewBox: '0 0 23 23',
    path:
      'M16.667 14.667h-1.054l-.373-.36a8.667 8.667 0 001.973-7.12C16.587 3.48 13.493.52 9.76.067A8.673 8.673 0 00.067 9.76c.453 3.733 3.413 6.827 7.12 7.453a8.667 8.667 0 007.12-1.973l.36.373v1.054l5.666 5.666c.547.547 1.44.547 1.987 0a1.408 1.408 0 000-1.986l-5.653-5.68zm-8 0c-3.32 0-6-2.68-6-6s2.68-6 6-6 6 2.68 6 6-2.68 6-6 6z',
  },
  bullet: {
    width: 10,
    height: 10,
    viewBox: '0 0 10 10',
    circle: {
      cx: 5,
      cy: 5,
      r: 5,
    },
  },
  info: {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    path:
      'M12 1.54839C17.7397 1.54839 22.4516 6.19718 22.4516 12C22.4516 17.7721 17.7769 22.4516 12 22.4516C6.23013 22.4516 1.54839 17.7793 1.54839 12C1.54839 6.23211 6.22268 1.54839 12 1.54839ZM12 0C5.37305 0 0 5.37498 0 12C0 18.6289 5.37305 24 12 24C18.627 24 24 18.6289 24 12C24 5.37498 18.627 0 12 0ZM10.2581 16.6452H10.8387V10.8387H10.2581C9.9374 10.8387 9.67742 10.5787 9.67742 10.2581V9.87097C9.67742 9.55031 9.9374 9.29032 10.2581 9.29032H12.5806C12.9013 9.29032 13.1613 9.55031 13.1613 9.87097V16.6452H13.7419C14.0626 16.6452 14.3226 16.9051 14.3226 17.2258V17.6129C14.3226 17.9336 14.0626 18.1935 13.7419 18.1935H10.2581C9.9374 18.1935 9.67742 17.9336 9.67742 17.6129V17.2258C9.67742 16.9051 9.9374 16.6452 10.2581 16.6452ZM12 5.03226C11.1449 5.03226 10.4516 5.7255 10.4516 6.58064C10.4516 7.43579 11.1449 8.12903 12 8.12903C12.8551 8.12903 13.5484 7.43579 13.5484 6.58064C13.5484 5.7255 12.8551 5.03226 12 5.03226Z',
  },
  alert: {
    width: 26,
    height: 23,
    viewBox: '0 0 26 23',
    path:
      'M2.96 23H23.04C25.0933 23 26.3733 20.7734 25.3467 19L15.3067 1.65336C14.28 -0.119969 11.72 -0.119969 10.6933 1.65336L0.653332 19C-0.373334 20.7734 0.906665 23 2.96 23ZM13 13.6667C12.2667 13.6667 11.6667 13.0667 11.6667 12.3334V9.6667C11.6667 8.93336 12.2667 8.33336 13 8.33336C13.7333 8.33336 14.3333 8.93336 14.3333 9.6667V12.3334C14.3333 13.0667 13.7333 13.6667 13 13.6667ZM14.3333 19H11.6667V16.3334H14.3333V19Z',
  },
  close: {
    width: 14,
    height: 14,
    viewBox: '0 0 14 14',
    path:
      'M13.3002 0.710001C12.9102 0.320001 12.2802 0.320001 11.8902 0.710001L7.00022 5.59L2.11022 0.700001C1.72022 0.310001 1.09021 0.310001 0.700215 0.700001C0.310215 1.09 0.310215 1.72 0.700215 2.11L5.59022 7L0.700215 11.89C0.310215 12.28 0.310215 12.91 0.700215 13.3C1.09021 13.69 1.72022 13.69 2.11022 13.3L7.00022 8.41L11.8902 13.3C12.2802 13.69 12.9102 13.69 13.3002 13.3C13.6902 12.91 13.6902 12.28 13.3002 11.89L8.41021 7L13.3002 2.11C13.6802 1.73 13.6802 1.09 13.3002 0.710001Z',
  },
  lock: {
    width: 14,
    height: 19,
    viewBox: '0 0 14 19',
    path:
      'M12.0002 6.66683H11.1668V5.00016C11.1668 2.70016 9.30016 0.833496 7.00016 0.833496C4.70016 0.833496 2.8335 2.70016 2.8335 5.00016V6.66683H2.00016C1.0835 6.66683 0.333496 7.41683 0.333496 8.3335V16.6668C0.333496 17.5835 1.0835 18.3335 2.00016 18.3335H12.0002C12.9168 18.3335 13.6668 17.5835 13.6668 16.6668V8.3335C13.6668 7.41683 12.9168 6.66683 12.0002 6.66683ZM7.00016 14.1668C6.0835 14.1668 5.3335 13.4168 5.3335 12.5002C5.3335 11.5835 6.0835 10.8335 7.00016 10.8335C7.91683 10.8335 8.66683 11.5835 8.66683 12.5002C8.66683 13.4168 7.91683 14.1668 7.00016 14.1668ZM9.5835 6.66683H4.41683V5.00016C4.41683 3.57516 5.57516 2.41683 7.00016 2.41683C8.42516 2.41683 9.5835 3.57516 9.5835 5.00016V6.66683Z',
  },
}

const SvgPathContainer = ({
  width,
  height,
  color = 'blue400',
  viewBox,
  fill = 'none',
  path,
  title,
  circle,
  spin,
}: SvgPathContainerProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill={fill}
      viewBox={viewBox}
      className={cn({ [styles.spin]: spin })}
    >
      {title && <title>{title}</title>}
      {path && <path className={styles.colors[color]} d={path}></path>}
      {circle && <circle className={styles.colors[color]} {...circle} />}
    </svg>
  )
}

export const Icon = ({
  type,
  width,
  height,
  color,
  fill = 'none',
  title,
  spin,
}: IconProps) => {
  return (
    <SvgPathContainer
      path={iconsConf[type].path}
      circle={iconsConf[type].circle}
      viewBox={iconsConf[type].viewBox}
      width={width ?? iconsConf[type].width}
      height={height ?? iconsConf[type].height}
      color={color}
      fill={fill}
      title={title}
      spin={spin}
    />
  )
}

export default Icon
