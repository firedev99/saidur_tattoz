import styled from "styled-components/macro";

export const Frame = styled.div`
    width: 100%;
    height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1080px) {
        flex-direction: column;
    }
    @media (max-width: 667px) {
        height: auto;
    }
`;

export const Heading = styled.div`
    width: 600px;
    height: auto;
    h1 {
        text-align: center;
        font-family: 'Open Sans', sans-serif;
        line-height: 78px;
        font-size: 3.8rem;
        color: rgba(0, 0, 0, 0.9);
    }
    @media(max-width: 667px) {
            width: 320px;
            margin: 4rem 0 3.3rem 0;
            h1 {
                font-size: 2.6rem;
                line-height: 42px;
            }
    }
    @media(max-width: 362px) {
        width: 300px;
        h1 {
            font-size: 2.45rem;
        }
    }
`;

export const Background = styled.div`
    width: 290px;
    .bg {
        filter: grayscale(1) brightness(0.7) saturate(0);
        
        &:hover {
            cursor: pointer;
            filter: grayscale(0) brightness(1) saturate(1);
            transition: 0.9s cubic-bezier(0.39, 0.575, 0.565, 1);
        }
   }
   @media(max-width: 667px) {
            margin-bottom: 2.4rem;
    }
`;