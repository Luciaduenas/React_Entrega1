import styled from "styled-components";

export const ProductCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: white;
    width: 300px;
    height: 450px;
    padding: 1rem;
    box-shadow: var(--fucsia) 0px 15px 15px;
    h2 {
        font-family: 'Fredoka', sans-serif;
        font-size: 30px;  
        text-align: center;
        text-overflow: ellipsis;
        max-width: 90%;
        color: var(--pinkred);  
    }
`

export const ProductImg = styled.img`
  width: 250px;
  height: 260px;
  object-fit: cover;
`
export const PriceContainer = styled.div `
   display: flex;
   flex-direction: column;
   align-items: center;
   p {
        font-family: 'Fredoka', sans-serif;
        font-size: 30px;    
        color: var(--pink);  
    }

`