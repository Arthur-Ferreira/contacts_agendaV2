import styled from "styled-components";

const Article = styled.article`
  width: 25rem;
  margin: 0 auto;
  text-align: left;
`

const Paragraph = styled.p`
  font-size: 1.2rem;
`

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-top: 1px solid #e3e3e3;
  padding-top: 1rem;
`



export { Article, Paragraph, Actions }