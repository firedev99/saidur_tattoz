import React from 'react';
import SEO from "../components/seo"
import { Layout } from "../components";
import { Frame, Video, Bullshits } from "../styles/newsStyles";

export default function News() {
    return (
        <Layout>
        <SEO title="News" />
            <Frame>
                <Video>
                <iframe width="449" height="449" title="Saidur's Tattoz News" src="https://www.youtube.com/embed/e4xWNvHuBzo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </Video>
                <Bullshits>
                    TAKE AN APPOINTMENT AND STAY TUNED WITH CONTENT AND INFORMATIONS REGARDING EVENTS AND TOURING LOCATIONS/DATES.
                </Bullshits>
            </Frame>
        </Layout>
    )
}
