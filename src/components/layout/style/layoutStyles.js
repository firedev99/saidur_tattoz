import styled from "styled-components/macro";

export const Wrapper = styled.div`
    max-width: 960px;
    height: 100%;
    margin: 0 auto;
`;

export const Footer = styled.div`
    width: 100%;
    height: 100px;
    border-top: solid 1px black;
    display: flex;
    align-items: center;
    justify-content: center;
    a {
        margin: 0 1rem;
    }
    h3 {
        opacity: 0.8;
        font-size: 0.9rem;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    @media(max-width: 565px) {
        a {
            margin: 0 0.3rem;
        }
        h3 {
            font-size: 0.78rem;
            letter-spacing: 0.1px;
        }
    }
    @media(max-width: 362px) {
        a {
            svg {
                width: 1.7rem;
            }
        }
    }
`;
