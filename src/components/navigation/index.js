import React, { useState, useEffect, createContext, useContext } from "react";
import { client } from "../../utils/search"
import { 
  Navigation, 
  NavigationLogo, 
  SubNav, 
  SubNavList, 
  SubNavItem, 
  SubNavLink,
  NavigationLabel,
  NavigationInput,
  ResultList,
  ResultsLink
 } from "./styles"
 
 const Context = createContext();
 const Provider = Context.Provider;
 
 export default () => {
   const [tags, setTags] = useState()
   const [results, setResults] = useState([])
   const navLinks = [{ title: 'about', path: '/about' }, { title: 'donate', path: '/donate' }]
 
   useEffect(() => {
     client.getEntries()
       .then(jsonData => jsonData.items.map(item => item.fields.tags).flat()
         .reduce((acc, item) => {
           if (acc.indexOf(item) === -1) {
             acc.push(item)
           } return acc
         }, []))
       .then(formattedData => setTags(formattedData))
       .catch(console.error)
   }, [])
 
   const clearOutput = () => setResults('')
 
   const setOutput = e => {
     const result = tags.filter(tag => tag.includes(e))
     setResults(e.length ? result : '')
   }
 

  return (
    <Provider value={{ results, setOutput }}>
      <MainNavigation></MainNavigation>
      <ResultsList clear={clearOutput}></ResultsList>
      <SubNavigation links={navLinks}></SubNavigation>
    </Provider>
  )
}

const MainNavigation = () => {
  const { setOutput } = useContext(Context);
  return (
    <Navigation>
      <NavigationLogo to="/">home</NavigationLogo>
      <NavigationLabel  htmlFor="search">
        <NavigationInput
          id="search"
          type="search"
          onChange={e => setOutput(e.target.value)}
          onFocus={e => setOutput(e.target.value)}
          placeholder="search by category"
        ></NavigationInput>
      </NavigationLabel>
    </Navigation>
  )
}

const ResultsList = ({ clear }) => {
  const { results } = useContext(Context);
  return (
    <ResultList>
      {results.length ? results.map(result => (
        <li key={result}>
          <ResultsLink to={`/results/?q=${result}`} onClick={clear}>
            {result}
          </ResultsLink>
        </li>
      ))
        : null}
    </ResultList>
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