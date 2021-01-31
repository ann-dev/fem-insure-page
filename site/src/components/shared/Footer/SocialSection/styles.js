import styled from "styled-components"
import { DEVICES } from "assets/constants/DEVICES"

export const SocialSectionWrapper = styled.section`
  margin-bottom: 40px;
  @media ${DEVICES.laptopM} {
    align-self: flex-start;
    justify-content: space-between;
    display: flex;
    margin: 0;
    position: relative;
    width: 100%;
  }
`

export const SocialsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 32px auto 0;
  width: 144px;
  @media ${DEVICES.laptopM} {
    margin: 0;
    margin-bottom: 80px;
  }
`

export const SocialsDivider = styled.div`
  background-color: #dadada;
  height: 1px;
  margin-top: 30px;
  width: 327px;
  @media ${DEVICES.laptopM} {
    bottom: 50px;
    position: absolute;
    width: 1100px;
  }
`
