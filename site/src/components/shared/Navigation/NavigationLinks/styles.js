import styled from "styled-components"

export const NavigationLinksWrapper = styled.ul`
  display: ${props => (props.dropdownVariant ? "flex" : "none")};
  flex-direction: ${props => (props.dropdownVariant ? "column" : "row")};
  li {
    font-size: ${props => (props.dropdownVariant ? "20px" : "13px")};
    font-weight: 700;
    margin-bottom: ${props => (props.dropdownVariant ? "40px" : 0)};
    text-transform: uppercase;
  }
`
