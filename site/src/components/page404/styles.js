import styled from "styled-components"
import Image from "gatsby-image"

import { DEVICES } from "assets/constants/DEVICES"

export const NotFoundWrapper = styled.div`
  display: flex;
  margin-top: 80px;
  min-height: 55vh;
  padding: 50px 24px;
  @media ${DEVICES.laptopM} {
    padding: 0 73px;
  }
  article {
    text-align: center;
    @media ${DEVICES.laptop} {
      text-align: left;
    }
  }
  button {
      width: 130px;
  }
`

export const NotFoundContentWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  @media ${DEVICES.laptop} {
    flex-direction: row;
    justify-content: space-around;
    width: 1100px;
  }
`

export const NotFoundHeader = styled.span`
  display: block;
  font-family: "Raleway-Bold", sans-serif;
  font-size: 24px;
  margin-bottom: 8px;
  margin-top: 28px;
  @media ${DEVICES.mobileL} {
    font-size: 32px;
  }
  @media ${DEVICES.laptopM} {
    font-size: 40px;
    line-height: 50px;
    margin-bottom: 18px;
    margin-top: 52px;
    max-width: 400px;
  }
`

export const NotFoundParagraph = styled.p`
  margin-bottom: 24px;
  max-width: 375px;
`

export const NotFoundImage = styled(Image)`
  background-size: cover;
  background-position: right;
  background-repeat: no-repeat;
  height: 100%;
  width: 300px;
`
