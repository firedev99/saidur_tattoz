import styled from "styled-components/macro";

export const BannerSection = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    img {
        height: 100%;
        width: 100%;
    }
    @media(max-width: 668px) {
        margin-top: 5rem;
    }
    @media(max-width: 511px) {
        margin-top: 10rem;
    }
`;
export const OverLay = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.55);
    height: 4rem;
`;
export const Frame = styled.div`
`;
export const Details = styled.div`
    position: absolute;
    right: 1rem;
    bottom: 0.5rem;
    h3 {
        color: #cacaca;
    }
    a {
        color: #cacaca;
    }
`;

export const Biggies = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem 0;
    svg {
        margin: 0 2rem;
    }
    @media(max-width: 511px) {
        svg {
            width: 3rem;
            margin: 0 1rem;
        }
    }
`;