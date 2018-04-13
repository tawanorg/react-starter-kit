
// Buttons
import buttonStyled from './button'

let defaultTheme = {
  font: {
    span: {
      fontSize: '14px',
      fontWeight: '700',
    },
    h2: {
      fontWeight: 900,
      fontSize: '32px',
    },
  },
  color: {
    primary: '#009ADE',
    secondary: '#FCFCFC',
    grey: '#CCCCCC',
    lightgrey: '#CED4DA',
    darkblue: '#13174F',
    blue: '#009ADE',
  }
};

export default Object.assign({}, defaultTheme, {
  button: Object.assign({}, buttonStyled, {
    color: defaultTheme.color,
  })
})
