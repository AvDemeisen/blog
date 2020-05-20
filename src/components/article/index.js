import React from "react"
import { Link } from "gatsby"
import ReactMarkdown from 'react-markdown'
import Share from "../share/share" 
import { 
    Article, 
    ArticleHeader, 
    ArticleTitle, 
    ArticleSubtitle,
    ArticleContainer,
    ArticleDate,
    ArticlePicture,
    ArticleImg,
    ArticleCopy
} from './styles'; 

export default ({ link, data }) => (
  <Article>
    <ArticleHeader>
      <ul className="card-content__tag-list">
        {data.tags.map(tag => <li className="card-content__tag-item" key={tag}><Link to={`/results/?q=${tag}`} className="card__link">{tag}</Link></li>)}
      </ul>
      <ArticleTitle>{data.title}</ArticleTitle>
      <ArticleSubtitle>{data.subtitle}</ArticleSubtitle>
      <ArticleContainer>
        <ArticleDate>{data.createdAt}</ArticleDate>
        <Share url={link} text={data.title}></Share>
      </ArticleContainer>
    </ArticleHeader>
    <section>
      <ArticlePicture>
        <ArticleImg alt={data.image.title} fluid={data.image.fluid} />
        <figcaption className="article-body__caption">{data.image.title}</figcaption>
      </ArticlePicture>
      <ArticleCopy>
        <ReactMarkdown source={data.copy.copy} />
      </ArticleCopy>
    </section>
  </Article>
)