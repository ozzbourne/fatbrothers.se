import React from "react"
import { Link } from "gatsby"
import { slide as Menu } from "react-burger-menu"
import { StyledMenu } from "./StyledComponents/MenuStyles"
import { StyledLogo } from "./StyledComponents/IndexPageStyles"

class MobileMenu extends React.Component {
  render() {
    return (
      <StyledMenu>
        {/* <StyledLogo /> */}
        <Menu
          right
          // pageWrapId={"page-wrap"}
          // outerContainerId={"outer-container"}
        >
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <a href="/contact">Portalen</a>
        </Menu>
      </StyledMenu>
    )
  }
}

export default MobileMenu
