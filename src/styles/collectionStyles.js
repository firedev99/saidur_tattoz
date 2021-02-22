import styled from "styled-components/macro";

export const Frame = styled.div`

`;

export const Images = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   margin-bottom: 3rem;
   img {
        margin: 1rem 0;
   }
   @media(max-width: 667px) {
      padding-top: 3rem;
   }
`;