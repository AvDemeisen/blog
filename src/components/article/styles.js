import styled from "styled-components"
import Img from "gatsby-image"
import { Colors, fontSizes, gutterSizes } from "../../styles/variables"

export const Article = styled.article`
  padding: 10px;
  max-width: 900px;

  @media (min-width: 768px) {
    padding: 20px;
  }
`

export const ArticleHeader = styled.header`
  margin: 0 0 20px;
`

export const ArticleTitle = styled.h1`
  font-weight: bold;
  font-size: ${fontSizes["xx"]};
  margin: 10px 0;

  @media (min-width: 768px) {
    margin: 20px 0;
  }
`
export const ArticleSubtitle = styled.h2`
    margin: 0 ${gutterSizes["guttermd"]};
    font-size: ${fontSizes["lg"]};
    font-weight: normal;
`

export const ArticleContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 10px;
    border-top: 1px solid ${Colors["lightgrey"]};
`

export const ArticleDate = styled.p`
    font-size: ${fontSizes["sm"]};
`

export const ArticlePicture = styled.picture`
  display: block;
  position: relative;
  height: 100%;
  width: 100%;
`

export const ArticleImg = styled(Img)`
  margin: 0 -10px;
  height: 100%;
  width: calc(100% + 20px);

  @media (min-width: 576px) {
    margin: 0;
    width: 100%;
  }
`

export const ArticleCaption = styled.figcaption`
  margin: 10px 0;
  text-transform: uppercase;
  font-size: ${fontSizes["xs"]};
  font-family: "Source Code Pro", Monaco, monospace;
`

export const ArticleCopy = styled.div`
  @media (min-width: 768px) {
    margin-top: 10px;
  }
`

