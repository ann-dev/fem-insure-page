import React from "react"
import styled from "styled-components"

const AttributionWrapper = styled.div`
  text-align: center;
`

const Attribution = () => (
  <AttributionWrapper>
    <p>
      Challenge by{" "}
      <a
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Frontend Mentor
      </a>
      .
    </p>
    Coded by{" "}
    <a
      href="https://github.com/ann-dev"
      target="_blank"
      rel="noopener noreferrer"
    >
      ann-dev
    </a>
    .
  </AttributionWrapper>
)

export default Attribution
