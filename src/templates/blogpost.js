import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout/index"
import Article from "../components/article/index"
import Sidebar from "../components/sidebar/sidebar"
import SEO from "../components/seo/index"
import "../styles/templates/blogpost.scss"

const BlogPost = ({data, location}) => (
  <Layout>
    <SEO title={data.contentfulBlogPost.title} />
    <div className="article-container">
      <Article data={data.contentfulBlogPost} link={location.href}></Article>
      {/* <Sidebar></Sidebar> */}
    </div>
  </Layout>
)

export default BlogPost

export const pageQuery = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      subtitle
      slug
      createdAt(formatString: "MMMM, D, Y")
      copy {
        copy
      }
      image {
        title
        fluid(maxWidth: 650, resizingBehavior: SCALE) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      tags
    }
  }
`
