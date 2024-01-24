import styled from "styled-components";

const StyledForms = styled.form`
  width: 25rem;
  margin: 0 auto;
`

const StyledLabel = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 1rem;
`

const StyledInput = styled.input`
  display: block;
  width: 100%;
  font-size: 1rem;
  font-family: inherit;
  border: none;
  border-radius: 8px;
  padding: 0.5rem 0.75rem;
  box-shadow:
    0 0px 1px hsla(0, 0%, 0%, 0.2),
    0 1px 2px hsla(0, 0%, 0%, 0.2);
  background-color: white;
  line-height: 1.5;
  margin: 0;


  &:hover {
  box-shadow:
    0 0px 1px hsla(0, 0%, 0%, 0.6),
    0 1px 2px hsla(0, 0%, 0%, 0.2);
  }
`


export { StyledForms, StyledLabel, StyledInput }