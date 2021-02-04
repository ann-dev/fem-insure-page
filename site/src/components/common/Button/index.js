import styled from "styled-components"

const Button = styled.button`
  background: transparent;
  border: 1.5px solid
    ${props => (props.darkMode ? `var(--color-l-main)` : `var(--color-black)`)};
  color: ${props =>
    props.darkMode ? `var(--color-l-main)` : `var(--color-black)`};
  font-family: "Karla-Bold", sans-serif;
  height: 40px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  transition: all 0.2s ease-in;
  &:hover {
    background: ${props =>
      props.darkMode ? `var(--color-l-main)` : `var(--color-black)`};
    color: ${props =>
      props.darkMode ? `var(--color-purple)` : `var(--color-l-main)`};
    cursor: pointer;
  }
`

export default Button
