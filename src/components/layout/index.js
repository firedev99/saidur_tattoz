import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { GlobalStyles } from "../../styles/global-styles";
import { Wrapper, Footer } from "./style/layoutStyles";
import { YoutubeLogo, FacebookLogo, InstagramLogo } from "../../helpers/vectors";

import { Header } from "../../components";

const Layout = ({ children, ...props }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      bg: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <Wrapper {...props}>
      <GlobalStyles />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <Footer>
          <a rel="noreferrer" aria-label="Link1" target="_blank" href="https://www.youtube.com/c/SaidurTATTOOZ?fbclid=IwAR1R_x6CEaB5EsnnYuy-slCfcjbj--ycPS842txwWlXkV4zkbER92oQjWek"><YoutubeLogo width="28" height="32" /></a>
          <a rel="noreferrer" aria-label="Link2" target="_blank" href="https://www.facebook.com/saidur1984/"><FacebookLogo width="34" height="34" /></a>
          <a rel="noreferrer" aria-label="Link3" target="_blank" href="https://www.instagram.com/saidur_rahman_bhuiyan/?fbclid=IwAR2TZAtGz9nc0PvWdTAO_blb6HeEMP-Gb_uh9307_gpl-PZ3GalVz7YKOiQ"><InstagramLogo height="32.271" width="32.274" /></a>
          <h3> © {new Date().getFullYear()} {data.site.siteMetadata?.title || `Title`}</h3>
        </Footer>
      </Wrapper>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
