import styled from "styled-components/macro";

export const Frame = styled.div`
    width: 100%;
    height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Context = styled.div`
    @media(max-width: 668px) {
        margin-top: 5rem;
        iframe {
            width: 300px;
        }
    }
`;