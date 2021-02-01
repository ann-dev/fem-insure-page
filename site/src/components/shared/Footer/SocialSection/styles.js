import styled from "styled-components"
import { DEVICES } from "assets/constants/DEVICES"

export const SocialSectionWrapper = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
  z-index: 2;
  @media ${DEVICES.laptopM} {
    align-items: flex-start;
    align-self: flex-start;
    flex-direction: row;
    justify-content: space-between;
    margin: 0;
    position: relative;
    width: 100%;
  }
  img {
    transition: all 0.2s ease-in;
    &:hover {
      cursor: pointer;
      filter: brightness(30%);
    }
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
    width: 1110px;
  }
`
