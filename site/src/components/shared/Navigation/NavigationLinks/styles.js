import styled from "styled-components"
import { SIZE, DEVICES } from "assets/constants/DEVICES"

export const NavigationLinksWrapper = styled.ul`
  display: ${props => (props.dropdownVariant ? "flex" : "none")};
  flex-direction: ${props => (props.dropdownVariant ? "column" : "row")};
  @media ${DEVICES.tablet} {
    align-items: center;
    display: flex;
  }
  a {
    @media (orientation: landscape) and (max-width: ${SIZE.tablet}) {
      margin-left: 26px;
    }
    @media ${DEVICES.tablet} {
      margin-left: 26px;
    }
  }
  li {
    color: ${props =>
      props.dropdownVariant ? `var(--color-l-main)` : `var(--color-acc-grey)`};
    font-size: ${props => (props.dropdownVariant ? "20px" : "13px")};
    font-weight: 700;
    letter-spacing: 1.5px;
    margin-bottom: ${props => (props.dropdownVariant ? "40px" : 0)};
    text-transform: uppercase;
    transition: all 0.1s ease-in;
    &:hover {
      color: var(--color-black);
    }
  }
`
