import styled from "styled-components";

const MobileBtn = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  height: 2.25rem;
  background-color: transparent;

  @media (min-width: 48rem) {
    display: none;
  }
`

const MobileSpan = styled.span`
  width: 2.25rem;
  height: 0.2rem;
  background-color: grey;
`

export { MobileBtn, MobileSpan };