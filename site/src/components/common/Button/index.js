import styled from "styled-components"
import { COLORS } from "src/assets/constants/COLORS"

const Button = styled.button`
  background: transparent;
  border: 1.5px solid
    ${props => (props.darkMode ? `${COLORS.light_main}` : `${COLORS.black}`)};
  color: ${props =>
    props.darkMode ? `${COLORS.light_main}` : `${COLORS.black}`};
  font-family: "Karla", sans-serif;
  font-weight: 700;
  height: 40px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  &:hover {
    cursor: pointer;
  }
`

export default Button
