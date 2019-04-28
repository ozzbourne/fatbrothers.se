import React from "react"
import PropTypes from "prop-types"
import { PageWrapper } from "./StyledComponents/PageWideStyles"

import Header from "./header"
import "./layout.css"
import "./CustomStyles.css"

const Layout = ({ children }) => (
  <div>
    <Header />
    <PageWrapper>
      <main>{children}</main>
    </PageWrapper>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
