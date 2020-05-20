import React from "react";
import { Navigation, NavigationLogo, SubNav, SubNavList, SubNavItem, SubNavLink } from "./styles"

export default () => {

  const navLinks = [{ title: 'about', path: '/about' }, { title: 'donate', path: '/donate' }]


  return (
      <>
      <MainNavigation></MainNavigation>
      <SubNavigation links={navLinks}></SubNavigation>
      </>
  )
}

const MainNavigation = () => {
  return (
    <Navigation>
      <NavigationLogo to="/">home</NavigationLogo>
      <label className="navigation__label" htmlFor="search">
        <input
          className="navigation__input"
          id="search"
          type="search"
          placeholder="search by category"
        ></input>
      </label>
    </Navigation>
  )
}

const SubNavigation = ({ links }) => (
  <SubNav>
    <SubNavList>
      {links.map(link => (
        <SubNavItem key={link.title}>
          <SubNavLink activeClassName="active-link" to={link.path}>
            {link.title}
          </SubNavLink>
        </SubNavItem>
      ))}
    </SubNavList>
  </SubNav>
)