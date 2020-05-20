import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import { Colors, fontSizes, gutterSizes } from "../../styles/variables"

export const Navigation = styled.nav`
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${gutterSizes["guttersm"]};
  height: 60px;
  width: 100%;
  z-index: 100;
  box-sizing: border-box;
  background-color: transparent;

  @media (min-width: 576px) {
    position: relative;
  }

  @media (min-width: 768px) {
    padding: ${gutterSizes["guttermd"]};
  }
`

export const NavigationLogo = styled(GatsbyLink)`
  display: flex;
  align-items: center;
  color: ${Colors["charcoal"]};
  font-size: ${fontSizes["xl"]};
  text-decoration: none;
  text-transform: uppercase;
`

export const SubNav = styled.nav`
  position: fixed;
  top: 60px;
  height: 40px;
  width: 100%;
  background-color: $secondaryNavBackground;
  box-sizing: border-box;
  z-index: 100;

  @media (min-width: 576px) {
    top: 0;
    position: relative;
  }
`

export const SubNavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  margin: 0;
  padding: 0;
`

export const SubNavItem = styled.li`
  height: 100%;
  list-style: none;
`

export const SubNavLink = styled(GatsbyLink)`
  display: flex;
  padding: $guttersm;
  height: 100%;
  align-items: center;
  text-decoration: none;
  color: ${Colors["charcoal"]};
  font-size: $sm;

  @media (min-width: 576px) {
    padding: $guttermd;
    font-size: $md;
  }
`

export const NavigationInput = styled.input`
  margin: 0;
  padding: 5px;
  font-size: 16px;
  height: 50%;
  width: 100%;
  border: none;
  border: 1px solid ${Colors["lightgrey"]};
`

export const NavigationLabel = styled.label`
  width: 50%;
  max-width: 250px;
`

export const ResultList = styled.ul`
  top: 60px;
  margin: 0;
  padding: 0;
  list-style: none;
  z-index: 101;

  @media (min-width: 576px) {
    position: absolute;
    top: 45px;
    right: 10px;
    max-width: 250px;
  }

  @media (min-width: 768px) {
    right: 20px;
  }
`

export const ResultsLink = styled(GatsbyLink)`
  display: block;
  padding: 10px;
  text-decoration: none;
  color: ${Colors["charcoal"]};

  &:hover {
    background-color: ${Colors["lightgrey"]};
  }
`