import styled from "styled-components";

export const FooterContainer = styled.div `
    height: auto;
    width: 100%;
    background-color: var(--softpink);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 4rem;
    gap: 0.5rem;
`

export const FooterLogo = styled.img `
    height: 100px;
`
export const SocialContainer = styled.div `
        h4{
        font-family: 'Caveat', cursive;
        font-size: 45px;
        color: var(--pinkred);
    }
`
export const SocialLinksContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 45px;
    gap: 1rem;
    a{
        color: var(--pinkred);
    }
`

export const Copyright = styled.div `
    p{
        font-family: 'Fredoka', sans-serif;
        font-style: italic;
        text-align: center;
        font-size: 20px;
        color: var(--pinkred);
        align-items: center;
    }
`