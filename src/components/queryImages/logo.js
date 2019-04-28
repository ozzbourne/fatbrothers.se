import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "fb-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid_noBase64
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        className={className}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
)

export default Logo
