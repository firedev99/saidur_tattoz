import styled from "styled-components/macro";

export const Wrapper = styled.div`
    height: 100px;
    width: 100%;
    @media(max-width: 511px) {
                margin-bottom: 7.3rem;
        }
`;

export const Logo = styled.div`
    img {
            width: 3.5rem;
    }
`;

export const Frame = styled.div`
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 667px) {
        flex-direction: column;
        padding-top: 0.8rem;
    }
    
`;

export const Links = styled.div`
    display: flex;
    align-items: center;
    a {
        text-decoration: none;
        color: rgba(0, 0, 0, 0.75);
        font-size: 0.96rem;
        margin-right: 2.4rem;
        text-transform: uppercase;
        &:last-of-type {
            margin-right: 2rem;
        }

        &:hover {
            color: rgba(0, 0, 0, 1);
            transition: 1s cubic-bezier(0.165, 0.84, 0.44, 1);
        }
        
        @media(max-width: 768px) {
            margin-right: 1rem;
            font-size: 0.84rem;
            font-weight: 700; 
        }
        @media(max-width: 667px) {
                &:last-of-type {
                    margin-right: 1rem;
                }
        }
    }
    @media(max-width: 511px) {
                flex-direction: column;
                a {
                    margin: 0.22rem 0;
                }
        }
`;

export const Button = styled.button`
    padding: 0.62rem 1rem;
    border-radius: 4px;
    background: transparent;
    outline: none;
    text-transform: uppercase;
    border: solid black 1.6px;
    cursor: pointer;
    font-size: 0.8rem;
    letter-spacing: 1px;

    &:hover {
        background: black;
        color: white;
        border: solid white 1.6px;
        transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
    @media(max-width: 667px) {
        flex-direction: column;
        padding-top: 0.8rem;
    }

    @media(max-width: 511px) {
        margin-left: 1rem;
    }
`;