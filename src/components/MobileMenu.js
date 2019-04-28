import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"
import { StyledMobileMenu } from "./StyledComponents/MenuStyles"

class MobileMenu extends React.Component {
  render() {
    return (
      <StyledMobileMenu>
        <Menu
          right
          // pageWrapId={"page-wrap"}
          // outerContainerId={"outer-container"}
        >
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <a href="/contact">Portalen</a>
        </Menu>
      </StyledMobileMenu>
    )
  }
}

export default MobileMenu
