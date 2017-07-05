import getMuiTheme from 'material-ui/styles/getMuiTheme'

// Colors
export const darkGreen    = '#294b2d'
export const green        = '#526a52'
export const nude         = '#ddbea1'
export const black        = '#000000'
export const darkGrey     = '#5c5c5c'
export const greywhite    = '#f4f4f6'
export const nudewhite    = '#fefcfc'
export const grey30       = 'rgba(222, 222, 222, 0.7)'

// Palette
export const palette = {
  primary1Color: green,
  primary2Color: darkGreen,
  primary3Color: darkGrey,
  accent1Color: nude,
  textColor: black,
  alternateTextColor: nudewhite,
  canvasColor: greywhite,
  disabledColor: grey30
}

export default getMuiTheme({ palette })
