import React from "react"
import { Link } from "gatsby"

import FadeInView from "components/common/FadeInView"
import Button from "components/common/Button"

import NotFoundStock from "assets/images/404asset.jpeg"

import {
  NotFoundWrapper,
  NotFoundContentWrapper,
  NotFoundHeader,
  NotFoundImage,
  NotFoundParagraph,
} from "./styles"

const NotFound = ({ fluid }) => (
  <FadeInView>
    <NotFoundWrapper>
      <NotFoundContentWrapper>
        <NotFoundImage
          fluid={fluid}
          style={{ backgroundImage: `url(${NotFoundStock})` }}
        />
        <article>
          <NotFoundHeader>404 Not found. Sorry!</NotFoundHeader>
          <NotFoundParagraph>
            It seems like we haven't found what you've been looking for. Press
            the button below to go back to the homepage.
          </NotFoundParagraph>
          <Button>
            <Link to="/">Go back</Link>
          </Button>
        </article>
      </NotFoundContentWrapper>
    </NotFoundWrapper>
  </FadeInView>
)

export default NotFound
