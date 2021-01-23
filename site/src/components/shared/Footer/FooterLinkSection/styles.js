import styled from "styled-components"

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
