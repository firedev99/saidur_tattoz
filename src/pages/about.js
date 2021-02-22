import React from 'react';
import { Layout } from "../components";
import { Frame, Context } from "../styles/aboutStyles";
import SEO from "../components/seo";

export default function About() {
    return (
        <Layout>
            <SEO title="About" />
            <Frame>
                <Context>
                     <iframe width="600" height="500" 
                     src="https://www.youtube.com/embed/e4xWNvHuBzo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                     title="Saidur's Tattoz" allowFullScreen></iframe>
                </Context>
            </Frame>
        </Layout>
    )
}
