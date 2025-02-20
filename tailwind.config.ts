import type { Config } from 'tailwindcss'

// const colorPalette: Record<
//   string,
//   string | Record<string | number, string | Record<string, string>>
// > = {
//   // 나오면 정의
// }

// const fontPalette: Record<
//   string,
//   [string, { lineHeight: string; letterSpacing: string }] | string
// > = {
// 	// 나오면 정의
// }

const px0_20 = Array.from(Array(21)).reduce(
  (acc, _, i) => {
    acc[i] = `${i}px`
    return acc
  },
  {} as Record<number, string>
)

const px0_100 = Array.from(Array(101)).reduce(
  (acc, _, i) => {
    acc[i] = `${i}px`
    return acc
  },
  {} as Record<number, string>
)

const px0_1200 = Array.from(Array(1201)).reduce(
  (acc, _, i) => {
    acc[i] = `${i}px`
    return acc
  },
  {} as Record<number, string>
)

const config: Config = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      borderRadius: px0_100,
    },
    screens: {
      sm: { min: '390px', max: '767px' },
      md: { min: '768px', max: '1199px' },
      lg: { min: '1200px' },
    },
    borderWidth: px0_20,
    minWidth: px0_1200,
    minHeight: px0_1200,
    spacing: px0_1200,
    fontFamily: {
      primary: ['Pretendard', 'sans-serif'],
    },
  },
  plugins: [],
}
export default config
