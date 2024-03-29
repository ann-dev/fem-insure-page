import styled from "styled-components"
import { DEVICES } from "assets/constants/DEVICES"

export const FooterLinksWrapper = styled.section`
  display: flex;
  flex-direction: column;
  z-index: 2;
  @media ${DEVICES.tablet} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    grid-template-areas:
      ". ."
      ". .";
    margin-bottom: 50px;
    max-height: 350px;
    width: 100%;
    @media ${DEVICES.laptopM} {
      align-self: flex-start;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0 0 50px 0;
      max-width: 940px;
    }
  }
`

export const FooterLinkBlock = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterLinkHeading = styled.span`
  display: block;
  margin-bottom: 36px;
`

export const FooterLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  margin-bottom: 40px;
  @media ${DEVICES.laptopM} {
    justify-content: flex-start;
  }
  li {
    margin-bottom: 16px;
    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
  li:last-child {
    margin-bottom: 0;
  }
`
