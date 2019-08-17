import Typography from "typography"
import Irving from "typography-theme-irving"

Irving.overrideThemeStyles = ({ rhythm }) => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
    h4: {
      fontSize: rhythm(3 / 4),
    },
  }
}

Irving.baseLineHeight = 1.666

const typography = new Typography(Irving)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
