import styled from "styled-components";

export const TextBannerContainer = styled.div `
    
    width: 100%;
    background-color: var(--red);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 4rem;
    p{
        font-family: 'Caveat', cursive;
        font-size: 60px;
        text-overflow: ellipsis;
        text-align: center;
        max-width: 80%;
        font-weight: 500;
        color: white;
        @media (max-width:768px) {
        font-size: 30px ;
    }
    }
`