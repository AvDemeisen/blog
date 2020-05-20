import React from "react"
import { GlobalStyle, Container, ContainerMain } from "./styles"
import Navigation from '../navigation/index'
export default ({ children }) => (
    <>
        <Container>
            <ContainerMain>
                <Navigation></Navigation>
                {children}
            </ContainerMain>
        </Container>
        <GlobalStyle />
    </>
)