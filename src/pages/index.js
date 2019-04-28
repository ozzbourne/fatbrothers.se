import React from "react"
import Header from "../components/header"

import Layout from "../components/layout"
import {
  IndexPageWrapper,
  StyledLogo,
} from "../components/StyledComponents/IndexPageStyles"

/* ToDo: fixa react helmet */
const IndexPage = () => (
  <Layout>
    <Header />
    <IndexPageWrapper>
      <StyledLogo />
    </IndexPageWrapper>
  </Layout>
)

export default IndexPage
