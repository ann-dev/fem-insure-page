import styled from "styled-components"
import { DEVICES } from "assets/constants/DEVICES"

export const FooterLinksWrapper = styled.section`
  display: flex;
  flex-direction: column;
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
  li {
    margin-bottom: 16px;
  }
  li:last-child {
    margin-bottom: 0;
  }
`
