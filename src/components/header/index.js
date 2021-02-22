import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react";
import { Frame, Wrapper, Links, Button, Logo } from "./style/headerStyles";
import logo from "../../assests/logo.svg"

export default function Header({ siteTitle }){
  return(
    <Wrapper>
      <Frame>
        <Logo>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Logo>
        <Links>
          <Link to="/collection">Collection</Link>
          <Link to="/about">About</Link>
          <Link to="/news">News</Link>
          <Link to="/contact">Contact</Link>
          <a href="tel:+880-192-081-269-8">
            <Button>
              Appointment
            </Button>
          </a>
        </Links>
      </Frame>
    </Wrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Saidur Tattooz`,
}
