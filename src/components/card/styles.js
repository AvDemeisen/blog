import { Link as GatsbyLink } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { Colors, fontSizes, gutterSizes } from "../../styles/variables"

export const Card = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 3fr 2fr;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 3fr 2fr;
    grid-gap: 5px;
  }
`

export const CardContent = styled.div`
  display: grid;
  padding: 10px;
  grid-row-gap: 5px;
  background-color: ${Colors["white"]};
  border-top: 1px solid ${Colors["lightgrey"]};

  @media (min-width: 768px) {
    padding: 0;
    order: 2;
    border-top: none;
  }
`

export const TagList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const TagItem = styled.li`
  font-size: ${fontSizes["xs"]};
  text-transform: uppercase;
  font-family: "Source Code Pro", Monaco, monospace;
  height: 25px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
  line-height: 25px;
  margin-right: 5px;
  padding: ${gutterSizes["guttersm"]};
  background-color: #e4e4e4;
`

export const CardDate = styled.p`
  font-size: ${fontSizes["xs"]};
  text-transform: uppercase;
  font-family: "Source Code Pro", Monaco, monospace;
`

export const CardLink = styled(GatsbyLink)`
  color: ${Colors["charcoal"]};
  text-decoration: none;
`

export const CardTitle = styled(GatsbyLink)`
  color: ${Colors["charcoal"]};
  text-decoration: none;
  font-size: $md;
  font-weight: bold;
`
export const CardImg = styled(Img)`
  width: 100%;
  height: 100%;
`





