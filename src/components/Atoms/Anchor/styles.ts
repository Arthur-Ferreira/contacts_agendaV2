import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link) `
  color: inherit;
  text-decoration: none;
  
  &:hover {
    color: hsl(224, 98%, 58%);
    text-decoration: underline;
  }

  h3 {
    margin: 0;
    padding: 1rem 2rem;
  }
`
export default StyledLink