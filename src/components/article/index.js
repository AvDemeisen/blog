import React from "react"
import ReactMarkdown from 'react-markdown'
import Share from "../share" 
import { 
    Article, 
    ArticleHeader, 
    ArticleTitle, 
    ArticleSubtitle,
    ArticleContainer,
    ArticleDate,
    ArticlePicture,
    ArticleImg,
    ArticleCaption,
    ArticleCopy
} from './styles'; 
import { TagList, TagItem, CardLink } from '../card/styles'

export default ({ link, data }) => (
  <Article>
    <ArticleHeader>
      <TagList>
        {data.tags.map(tag => 
        <TagItem key={tag}>
          <CardLink to={`/results/?q=${tag}`}>{tag}</CardLink>
        </TagItem>
        )}
      </TagList>
      <ArticleTitle>{data.title}</ArticleTitle>
      <ArticleSubtitle>{data.subtitle}</ArticleSubtitle>
      <ArticleContainer>
        <ArticleDate>{data.createdAt}</ArticleDate>
        <Share url={link} text={data.title}></Share>
      </ArticleContainer>
    </ArticleHeader>
    <section>
      <ArticlePicture>
        <ArticleImg alt={data.image.title} fluid={data.image.fluid}/>
        <ArticleCaption>{data.image.title}</ArticleCaption>
      </ArticlePicture>
      <ArticleCopy>
        <ReactMarkdown source={data.copy.copy} />
      </ArticleCopy>
    </section>
  </Article>
)