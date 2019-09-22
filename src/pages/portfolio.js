import React from "react"
import Header from "../components/header"
import { StaticQuery, graphql } from "gatsby"
import allPortfolioItems from "../allPortfolioItems"
import PortfolioItem from "../components/PortfolioItem"
import { AllPortfolioItemsWrapper } from "../components/StyledComponents/PortfolioStyles"

import Layout from "../components/layout"

/* ToDo: fixa react helmet */

const PortfolioPage = () => (
  <StaticQuery
    query={graphql`
      query PortfolioItemsQuery {
        allPortfolioJson {
          edges {
            node {
              title
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div>{aFunction(data)}</div>
      </Layout>
    )}
  />
)

function aFunction(data) {
  const stiff = []
  data.allPortfolioJson.edges.forEach(({ node }) => {
    stiff.push(<p key={node.title}>{node.title}</p>)
  })
  return stiff
}

export default PortfolioPage

// class PortfolioPage extends React.Component {
//   state = {
//     portfolioItems: {},
//   }
//   componentDidMount() {
//     this.setState({ portfolioItems: allPortfolioItems })
//   }

//   render() {
//     return (
//       <Layout>
//         <AllPortfolioItemsWrapper>
//           {Object.keys(this.state.portfolioItems).map(key => (
//             <PortfolioItem
//               key={key}
//               index={key}
//               details={this.state.portfolioItems[key]}
//             />
//           ))}
//         </AllPortfolioItemsWrapper>
//       </Layout>
//     )
//   }
// }

// export default PortfolioPage
