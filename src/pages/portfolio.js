import React from "react"
import Header from "../components/header"
import allPortfolioItems from "../allPortfolioItems"
import PortfolioItem from "../components/PortfolioItem"
import { AllPortfolioItemsWrapper } from "../components/StyledComponents/PortfolioStyles"

import Layout from "../components/layout"

/* ToDo: fixa react helmet */

class PortfolioPage extends React.Component {
  state = {
    portfolioItems: {},
  }
  componentDidMount() {
    this.setState({ portfolioItems: allPortfolioItems })
  }
  render() {
    return (
      <Layout>
        <AllPortfolioItemsWrapper>
          {Object.keys(this.state.portfolioItems).map(key => (
            <PortfolioItem
              key={key}
              index={key}
              details={this.state.portfolioItems[key]}
            />
          ))}
        </AllPortfolioItemsWrapper>
      </Layout>
    )
  }
}

export default PortfolioPage
