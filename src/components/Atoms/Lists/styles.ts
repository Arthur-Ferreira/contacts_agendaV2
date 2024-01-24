import styled from "styled-components"

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

const StyledOl = styled(StyledUl)`
  flex-direction: column;
  list-style: none;
  padding: 0 0 5rem 0;
`

export { StyledUl, StyledOl }