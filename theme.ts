import { extendTheme } from '@chakra-ui/react'

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1536px',
}

export const theme = extendTheme({
  breakpoints,
  fonts: {
    heading: `'Outfit', sans-serif`,
    body: `'Outfit', sans-serif`,
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: 0,
      },
    },
  },
})
