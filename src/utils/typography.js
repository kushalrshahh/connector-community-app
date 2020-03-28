import Typography from "typography"

const typography = new Typography(
  {
    scaleRatio: 1.75,
    googleFonts: [
      {
        name: 'Open Sans',
        styles: [
          '400',
          '700'
        ],
      },
      {
        name: 'Raleway',
        styles: [
          '600',
          '800'
        ],
      }
    ],
    headerFontFamily: ['Raleway'],
    bodyFontFamily: ['Open Sans']
  }
)

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography