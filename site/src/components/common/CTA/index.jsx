import React from "react"

import CTAMobileCurve from "assets/images/bg-pattern-how-we-work-mobile.svg"
import CTADesktopCurve from "assets/images/bg-pattern-how-we-work-desktop.svg"

import Button from "components/common/Button"

import {
  CTAWrapper,
  CTAMobileCurveWrapper,
  CTADesktopCurveWrapper,
  CTAHeader,
} from "./styles"


const CTA = ({ text, buttonText }) => (
  <CTAWrapper>
    <CTAMobileCurveWrapper src={CTAMobileCurve} alt="abstract curve" />
    <CTADesktopCurveWrapper src={CTADesktopCurve} alt="abstract curve" />
    <CTAHeader>{text}</CTAHeader>
    <Button darkMode>{buttonText}</Button>
  </CTAWrapper>
)

export default CTA
