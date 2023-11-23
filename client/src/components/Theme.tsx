import theme from "styled-theming"

export const backgroundColor = theme("theme", {
  light: "#fff",
  dark: "#2d2d2d",
});

export const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

export const buttonColor = theme("theme",{ 
  dark:"grey"
})

export const buttonHover = theme("theme",{
  dark: "#000"
})

export const cardBorder = theme("theme",{
  dark: "2px solid grey",
  light:"2px solid rgba(12, 12, 12, 0.05)"
})

export const infoCardColor = theme("theme",{
  dark: "grey",
  light:"rgba(12, 12, 12, 0.05)"
})

