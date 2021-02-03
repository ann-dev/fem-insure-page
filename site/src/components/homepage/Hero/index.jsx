import React from "react"
import { Link } from "gatsby"
import { motion } from "framer-motion"

import IntroImage from "assets/images/image-intro-full.jpg"
import CurveLeftMobile from "assets/images/bg-pattern-intro-left-mobile.svg"
import CurveRightMobile from "assets/images/bg-pattern-intro-right-mobile.svg"
import CurveLeftDesktop from "assets/images/bg-pattern-intro-left-desktop.svg"
import CurveRightDesktop from "assets/images/bg-pattern-intro-right-desktop.svg"

import Button from "components/common/Button"

import {
  HeroWrapper,
  HeroContentWrapper,
  HeroTextDivider,
  CurveLeftMobileWrapper,
  CurveRightMobileWrapper,
  CurveLeftDesktopWrapper,
  CurveRightDesktopWrapper,
  HeroTextWrapper,
  HeroHeader,
  HeroParagraph,
  HeroImageWrapper,
  HeroImage,
} from "./styles"

// const list = { visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 50 } }
// const item = { hidden: { x: -10, opacity: 1 } }

const Hero = ({ fluid }) => (
  <HeroWrapper>
    <CurveLeftDesktopWrapper
      src={CurveLeftDesktop}
      alt=""
      role="presentation"
    />
    <CurveRightDesktopWrapper
      src={CurveRightDesktop}
      alt=""
      role="presentation"
    />
    <HeroContentWrapper>
      <HeroTextWrapper
        as={motion.div}
        initial="hidden"
        animate="visible"
        transition={{ ease: "easeOut", duration: 1 }}
        // variants={list}
      >
        <HeroTextDivider />
        <CurveLeftMobileWrapper
          src={CurveLeftMobile}
          alt=""
          role="presentation"
        />
        <CurveRightMobileWrapper
          src={CurveRightMobile}
          alt=""
          role="presentation"
        />
        <HeroHeader>Humanizing your insurance.</HeroHeader>
        <HeroParagraph>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </HeroParagraph>
        <Button darkMode>
          <Link to="/view-plans">View plans</Link>
        </Button>
      </HeroTextWrapper>
      <HeroImageWrapper>
        <HeroImage
          fluid={fluid}
          style={{ backgroundImage: `url(${IntroImage})` }}
        />
      </HeroImageWrapper>
    </HeroContentWrapper>
  </HeroWrapper>
)

export default Hero
