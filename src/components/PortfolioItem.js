import React from "react"
import { PortfolioItemWrapper } from "./StyledComponents/PortfolioStyles"

import GatsbyImage from "./queryImages/queryImageFromData"

class PortfolioItem extends React.Component {
  render() {
    const {
      image,
      name,
      desc,
      primaryColor,
      textColor,
      link,
      linkName,
      githubLink,
    } = this.props.details
    return (
      // Skickar unik färg till styled-components

      <PortfolioItemWrapper
        backgroundColor={primaryColor}
        textColor={textColor}
      >
        <GatsbyImage imgName={image} />
        <div className="PortfolioItemInfo">
          <h3>{name}</h3>
          <p>Stack: {desc}</p>
          <p>
            Visit site:{" "}
            <a href={link} target="_blank" rel="noopener noreferrer">
              {linkName}
            </a>
          </p>
          {githubLink !== null ? (
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              * Git repo
            </a>
          ) : null}
        </div>
      </PortfolioItemWrapper>
    )
  }
}

export default PortfolioItem
