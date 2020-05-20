import React from "react"
import Layout from "../components/layout/index"
import { graphql } from "gatsby";
import Card from "../components/card/index"
import SEO from "../components/seo/index"
import "../styles/pages/pages.scss"

const pageTitle = 'home'

const IndexPage = ({ data }) => (
    <Layout>
      <SEO title={pageTitle} />
      <section className="cards">
        {data.allContentfulBlogPost.edges.map(article => <Card key={article.node.slug} data={article.node}></Card>)}
      </section>
    </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    allContentfulBlogPost {
      edges {
        node {
          title
          subtitle
          createdAt(formatString: "DD MMMM YYYY")
          tags
          slug
          image {
            title
            fluid(maxWidth: 500) {
              ...GatsbyContentfulFluid_tracedSVG
            } 
          }
        }
      }
    }
  }
`
