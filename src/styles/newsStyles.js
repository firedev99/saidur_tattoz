import styled from "styled-components/macro";

export const Frame = styled.div`
    width: 100%;
    height: calc(100vh - 200px);
    display: flex; 
    align-items: center;
    justify-content: space-between;
    @media(max-width: 1080px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const Video = styled.div`
    @media(max-width: 468px) {
        iframe {
            width: 300px;
        }
    }
`;

export const Bullshits = styled.div`
    text-align: center;
    h2 {   
        font-family: 'Open Sans', sans-serif;
        line-height: 50px;
        font-size: 1.8rem;
        color: rgba(0, 0, 0, 0.9);
    }
    @media(max-width: 1080px) {
        width: 400px;
        margin-top: 2rem;
    }
    @media(max-width: 468px) {
        width: 300px;
        display: none;
    }
`;