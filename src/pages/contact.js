import React from 'react';
import { useStaticQuery } from "gatsby";
import Img from 'gatsby-image'; 
import Layout from '../components/layout/index';
import { BannerSection, OverLay, Frame, Details, Biggies } from "../styles/contactStyles";
import { YoutubeLogo, FacebookLogo, InstagramLogo } from "../helpers/vectors";

export default function Contact() {
    const data = useStaticQuery(graphql`
    query {
        placeholderImage: file(relativePath: { eq: "banner.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 300, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
  `)
    return (
        <Layout>
            <Frame>
                <BannerSection>
                    <Img fluid={data.placeholderImage.childImageSharp.fluid} />
                    <OverLay />
                    <Details>
                        <h3>BUSINESS/PRESS RELATED</h3>
                        <a href="mailto:mitul0000@gmail.com">
                            mitul0000@gmail.com
                        </a>
                    </Details>
                </BannerSection>
                <Biggies>
                <a rel="noreferrer" target="_blank" aria-label="Link1" href="https://www.youtube.com/c/SaidurTATTOOZ?fbclid=IwAR1R_x6CEaB5EsnnYuy-slCfcjbj--ycPS842txwWlXkV4zkbER92oQjWek"><YoutubeLogo width="100" height="120" /></a>
                <a rel="noreferrer" target="_blank" aria-label="Link2" href="https://www.facebook.com/saidur1984/"><FacebookLogo width="120" height="120" /></a>
                <a rel="noreferrer" target="_blank" aria-label="Link3" href="https://www.instagram.com/saidur_rahman_bhuiyan/?fbclid=IwAR2TZAtGz9nc0PvWdTAO_blb6HeEMP-Gb_uh9307_gpl-PZ3GalVz7YKOiQ"><InstagramLogo width="118" height="118" /></a>
                </Biggies>
            </Frame>
        </Layout>
    )
}
