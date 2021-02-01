import React from "react"
import { Link } from "gatsby"

import CTAMobileCurve from "assets/images/bg-pattern-how-we-work-mobile.svg"
import CTADesktopCurve from "assets/images/bg-pattern-how-we-work-desktop.svg"

import Button from "components/common/Button"

import {
  CTAWrapper,
  CTAMobileCurveWrapper,
  CTADesktopCurveWrapper,
  CTAHeader,
} from "./styles"

const CTA = ({ text, buttonText, buttonLink }) => (
  <CTAWrapper>
    <CTAMobileCurveWrapper src={CTAMobileCurve} alt="" role="presentation"/>
    <CTADesktopCurveWrapper src={CTADesktopCurve} alt="" role="presentation"/>
    <CTAHeader>{text}</CTAHeader>
    <Button darkMode>
      <Link to={buttonLink}>{buttonText}</Link>
    </Button>
  </CTAWrapper>
)

export default CTA
