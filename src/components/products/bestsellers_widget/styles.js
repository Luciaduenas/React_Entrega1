import styled from "styled-components";

export const BestSellersWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--pink);
    gap: 2rem;
    width: 100%;
    padding: 5% 0;
`

export const CursiveTitle = styled.h2 `
    font-family: 'Caveat', cursive;
    font-size: 80px;
    font-weight: 400;
    color: white;
    text-overflow: ellipsis;
    text-align: center;
    @media (max-width:768px) {
        max-width: 80%;
        font-size: 40px;
    } 
`

export const ProducsContainer = styled.div `
    display: grid;
    place-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, 300px);
    column-gap: 2.5rem;
    row-gap: 2.5rem;
    width: 100%;
    max-width: 1300px;
    padding: 1rem 0;
`
