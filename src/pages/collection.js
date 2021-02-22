import React from 'react';
import Img from "gatsby-image";
import SEO from "../components/seo"
import { useStaticQuery } from "gatsby";
import { Layout } from "../components"
import { Frame, Images } from "../styles/collectionStyles";

export default function Collection() {
    const data = useStaticQuery(graphql`
    query collectionQuery {
      src1: file(relativePath: { eq: "1.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      src2: file(relativePath: { eq: "2.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      src3: file(relativePath: { eq: "3.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      src4: file(relativePath: { eq: "4.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      src5: file(relativePath: { eq: "5.jpg" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
    return (
        <Layout>
        <SEO title="Collections" />
            <Frame>
                <Images>
                    <Img fixed={data.src1.childImageSharp.fixed} />
                    <Img fixed={data.src2.childImageSharp.fixed} />
                    <Img fixed={data.src3.childImageSharp.fixed} />
                    <Img fixed={data.src4.childImageSharp.fixed} />
                    <Img fixed={data.src5.childImageSharp.fixed} />
                </Images>
            </Frame>
        </Layout>
    )
}
