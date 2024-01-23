import styled from "styled-components";

const MainHeader = styled.div`
width: 100%;
font-size: calc(10px + 2vmin);
border-bottom: 1px solid #e3e3e3;
`

const HeaderContainer = styled.div`
width: 100%;
max-width: 56.25rem;
display: flex;
align-items: center;
justify-content: space-between;
gap: 0.5rem;
margin: 0 auto;
padding: 1rem;
`

export { MainHeader, HeaderContainer };