import React from "react"
import Menu from "./MobileMenu"
import { Link } from "gatsby"
import { HeaderWrapper } from "./StyledComponents/MenuStyles"
import { StyledLogo } from "./StyledComponents/MenuStyles"

const Header = () => (
  <HeaderWrapper>
    <Link to="/">
      <StyledLogo />
    </Link>
    <Menu />
  </HeaderWrapper>
)

export default Header
