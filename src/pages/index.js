import React from "react";
import { useStaticQuery } from "gatsby";

import { Layout } from "../components";
import Img from "gatsby-image";
import SEO from "../components/seo"
import { Frame, Heading, Background } from "../styles/homeStyles";

export default function IndexPage(){
  const data = useStaticQuery(graphql`
    query homeQuery {
      site {
        siteMetadata {
          description
        }
      }
      bg: file(relativePath: { eq: "bg.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return(
    <Layout>
      <SEO title="Home" />
      <Frame>
        <Heading>
          <h1>{data.site.siteMetadata?.description}</h1>
        </Heading>
        <Background>
          <Img className="bg" fixed={data.bg.childImageSharp.fixed} />
        </Background>
      </Frame>
    </Layout>
  )
}

