import styled from "styled-components";

export const NavbarContainer = styled.div`
    height: 100px;
    width: 100%;
    background-color: var(--softpink);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 4rem;
    position: fixed;
`

export const NavbarLogo = styled.img`
    height: 100%;
`
export const NavbarLinksCartContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
`
export const CartContsiner = styled.div `
    color: var(--fucsia);
    font-size: 2rem;
    cursor: pointer;
`
    
export const NabvarLinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
`

export const NavbarLink = styled.a`
    font-family: 'Caveat', cursive;
    font-size: 3rem;
    font-weight: 300;
    @media (max-width: 768px) {
     font-size: 1.5rem ;
    }
`
