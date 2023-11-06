import styled from "styled-components";

export const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: linear-gradient(to left top, #f6bade, #fac0d8, #fbc8d5, #facfd5, #f7d7d7, #fbd3cf, #fecfc5, #ffcbbb, #ffbc9d, #ffae7d, #ffa259, #fa982f);
    gap: 3rem;
    width: 100%;
    padding: 5% 0;

    @media (max-width:768px) {
        flex-direction: column ;
    }
`

export const TextContainer = styled.div `
   display: flex;
   flex-direction: column;
   text-align: left;
   align-items: left;
   gap: 0.5rem;
   text-overflow: ellipsis;
   width: 600px;
   max-width: 80%;
   h1 {
        color: var(--fucsia);
        font-family: 'Zilla Slab Highlight', serif;
        font-weight: 900;
        font-size: 70px;
   }
   p {
        color: var(--pink);
        font-family: 'Caveat', cursive;
        font-size: 45px;
        font-weight: 500;
   }
   @media (max-width:768px) {
        text-align: center ;
        align-items: center;
    }
`

export const CoverImg = styled.img`
   width: 450px;
   max-width: 80%;
   border: 20px solid white;
`