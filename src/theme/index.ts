import { css } from 'styled-components'
import breakpointUtils from '@/utils/breakpoint';
import palette from './palette'
import { ISpaces, IFontSizes } from './@types'

const space: Array<ISpaces> = [0, 4, 8, 12, 16, 20, 24, 32, 48, 64]
//                            [0  1  2   3   4   5   6   7   8   9]

const fontSizes: Array<IFontSizes> = [0, 12, 14, 16, 18, 20, 24, 32, 40, 48]
//                                   [0   1   2   3   4   5   6   7   8   9]

// @ts-ignore
fontSizes.base = fontSizes[3]

const radii: any = [0, 2, 4, 6, 8, 10, 12, 16, 20]
//                 [0  1  2  3  4   5   6   7   8]
radii.pill = 9999
radii.base = radii[2]
radii.circle = '100%'

const colors = {
  /* main */
  primary: '#FFCF3F',
  secondary: '#003FE0',
  tetriary: '',

  /* neutral */

  neutral: palette.gray['500'],
  // color weights
  'neutral-50': palette.gray['50'],
  'neutral-100': palette.gray['100'],
  'neutral-200': palette.gray['200'],
  'neutral-300': palette.gray['300'],
  'neutral-400': palette.gray['400'],
  'neutral-500': palette.gray['500'],
  'neutral-600': palette.gray['600'],
  'neutral-700': palette.gray['700'],
  'neutral-800': palette.gray['800'],
  'neutral-900': palette.gray['900'],

  /* foreground (text) */
  body: '#000000',
  heading: '#000000',
  'heading-2': '#222222',
  text: '#000000',
  'text-2': '#778699',
  'text-3': '#637277',

  /* background */
  background: '#ffffff',
  'background-2': '#fafbfd',
  'background-3': '#FBFCFC',

  /* elements */
  discount: '#ff2131',

  /* semantic */
  danger: '#ee3945',
  success: '#01a64a',
}
const shadows = {
  'shadow-1': '11px 14px 31px 7px rgba(0, 0, 0, 0.13)',
}

const mainFontFamily = `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'`
const monoFontFamily = `SFMono-Regular, Consolas, 'Liberation Mono', Menlo, Courier, monospace`

const fonts: Record<string, any> = {
  body: `Roboto, ${mainFontFamily}`,
  heading: `Roboto, ${mainFontFamily}`,
  monospace: monoFontFamily,
}

const fontWeights = {
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900,
}

const breakpoints = {
  // Extra small devices (portrait and landscape phones, less than 768px)
  // No media query for this case since this is the default
  
  // Medium devices (tablets, 648px and up)
  tablet: 648,
  
  // Large devices (desktops, 1280px and up)
  desktop: 1280,
  
  // Extra large devices (large desktops, 1440px and up)
  largeDesktop: 1670,
}

const gridGutter = 30;

const maxContainerWidth = Object.entries(breakpoints).reduce((acc, [key, value]) => {
  acc[key] = value - gridGutter;
  return acc;
}, {});

const bpu = breakpointUtils(breakpoints);

const mq = (key) => `@media screen and ${bpu.getMediaQuery(key)}`;
const mqMax = (key) => `@media screen and ${bpu.getMediaQuery(key, true)}`;
const mqMinMax = (from, to) => `@media screen and ${bpu.getMediaQuery([from, to])}`;

export const em = (value: number | string, base = fontSizes.base) =>
  `${parseFloat(value) / base}em`
export const rem = (value: number | string) =>
  `${parseFloat(value) / fontSizes.base}rem`

const lineHeights = {
  body: 1.5,
  heading: 1.125,
}

const variants = {
  buttons: {
    primary: css`
      border-radius: 9999px;
      padding: 1.5em 5em;
      font-size: 18px;
    `,
    header: css`
      border-radius: 9999px;
      font-size: 16px;
      padding: 1.3em 5.4em;
    `,
  },
}

const headerSizes = [ null, 1.62500, 1.5, 1.25, 1.2, 1.12500, 1 ]
//                  [    0        1    2     3    4,       5, 6 ]

const styled = {
  h1: {
    marginBottom: space[5],
    fontSize: fontSizes[8],
    fontWeight: fontWeights.semibold,
  },
  h2: {
    marginBottom: space[4],
    fontSize: fontSizes[7],
    fontWeight: fontWeights.semibold,
  },
  h3: {
    marginBottom: space[3],
    fontSize: fontSizes[6],
    fontWeight: fontWeights.semibold,
  },
  h4: {
    marginBottom: space[300],
    fontSize: fontSizes[500],
    fontWeight: fontWeights.semibold,
  },
  h5: {
    marginBottom: space[2],
    fontSize: fontSizes[4],
    fontWeight: fontWeights.semibold,
  },
  h6: {
    marginBottom: space[2],
    fontSize: fontSizes[3],
    fontWeight: fontWeights.semibold,
  },
}

const grid = {
  breakpoints,
  maxContainerWidth,
  gutter: gridGutter,
  columns: 12,
  mq,
  mqMax,
  mqMinMax,
  ...bpu
}

export default {
  ...variants,
  space,
  colors,
  em,
  rem,
  fonts,
  fontWeights,
  lineHeights,
  breakpoints,
  fontSizes,
  radii,
  shadows,
  styled,
  headerSizes,
  grid,
}
