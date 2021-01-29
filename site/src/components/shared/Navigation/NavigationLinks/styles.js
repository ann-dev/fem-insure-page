import styled from "styled-components"
import { COLORS } from "assets/constants/COLORS"
import { DEVICES } from "assets/constants/DEVICES"

export const NavigationLinksWrapper = styled.ul`
  display: ${props => (props.dropdownVariant ? "flex" : "none")};
  flex-direction: ${props => (props.dropdownVariant ? "column" : "row")};
  @media ${DEVICES.tablet} {
    align-items: center;
    display: flex;
  }
  li {
    color: ${props =>
      props.dropdownVariant ? `${COLORS.light_main}` : `${COLORS.accent_grey}`};
    font-size: ${props => (props.dropdownVariant ? "20px" : "13px")};
    font-weight: 700;
    margin-bottom: ${props => (props.dropdownVariant ? "40px" : 0)};
    text-transform: uppercase;
    @media ${DEVICES.tablet} {
      margin-left: 26px;
    }
  }
`
