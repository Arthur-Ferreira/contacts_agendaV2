import styled from "styled-components"

const Aside = styled.aside`
  position: fixed;
  top: 5.6rem;
  left: 0;
  height: calc(100vh - 5rem);
  width: 100%;
  background-color: #e3e3e3;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2;

  @media (min-width: 48rem) {
    display: none;
  }

  @media (min-width: 48rem) {
    display: none; 
  }
  
  nav {
    display: block;
    height: 20rem;
    width: 90%;
    margin: 1rem auto;
    
    ul {
      flex-direction: column;
    }
  }
  }
`

export default Aside;