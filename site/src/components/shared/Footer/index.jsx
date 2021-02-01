import React from "react"

import SocialSection from "./SocialSection"
import FooterLinkSection from "./FooterLinkSection"
import Attribution from "./Attribution"

import FooterMobileCurve from "assets/images/bg-pattern-footer-mobile.svg"
import FooterDesktopCurve from "assets/images/bg-pattern-footer-desktop.svg"

import {
  FooterWrapper,
  FooterContentWrapper,
  FooterMobileCurveWrapper,
  FooterDesktopCurveWrapper,
} from "./styles"

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterMobileCurveWrapper src={FooterMobileCurve} alt="" role="presentation"/>
      <FooterDesktopCurveWrapper
        src={FooterDesktopCurve}
        alt=""
        role="presentation"
      />
      <FooterContentWrapper>
        <SocialSection />
        <FooterLinkSection />
        <Attribution />
      </FooterContentWrapper>
    </FooterWrapper>
  )
}

export default Footer
