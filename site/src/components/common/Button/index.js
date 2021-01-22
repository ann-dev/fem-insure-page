import styled from "styled-components"
import { COLORS } from "src/assets/constants/COLORS"

const Button = styled.button`
  background: transparent;
  font-family: "Karla", sans-serif;
  font-weight: 700;
  height: 40px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  width: auto;
  &.light {
    border: 1.5px solid ${COLORS.background_main};
    color: ${COLORS.background_main};
  }
  &:hover {
    cursor: pointer;
  }
`

export default Button
