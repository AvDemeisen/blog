import styled, { createGlobalStyle } from "styled-components"
import { Colors } from "../../styles/variables"


export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100vh;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 18px;
    font-weight: normal;
    letter-spacing: 2px;
    background-color: #FCD5E8;
  }
  
  p {
    margin: 0;
  }
  
  div {
    box-sizing: border-box;
  }
  
  h1,
  h2,
  h3 {
    font-weight: 400;
  }
  
  ul {
    margin: 0;
    padding: 0;
  }
  
  li {
    list-style: none;
  }
  
  .sr-only {
    display: none;
  }
`
export const Container = styled.div`
  display: block;
  margin: 0 auto;
  height: 100vh;
  max-width: 1200px;
  width: 100%;
  box-sizing: border-box;
  background-color: ${Colors["white"]};
  color: ${Colors["black"]};
  overflow: hidden;
`

export const ContainerMain = styled.main`
  background-color: ${Colors["white"]};
  
  @media (min-width: 576px) {
    padding-top: 0;
  }
`



