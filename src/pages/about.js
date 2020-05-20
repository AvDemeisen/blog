import React from "react"
import Layout from "../components/layout/index"
import SEO from "../components/seo/index"
import "../styles/pages/pages.scss"

const pageTitle = "about"

const AboutPage = () => (
  <Layout>
    <SEO title={pageTitle} />
    <article className="page">
      <h2 className="page__title">{pageTitle}</h2>
      <p className="page__copy">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
        sagittis leo, ac scelerisque est. Nunc maximus a quam sit amet
        imperdiet. Aliquam tincidunt feugiat ligula, sit amet mattis diam
        sollicitudin eu. Aliquam pulvinar magna at tortor sagittis tempus non
        non erat. Nunc sed arcu tortor. Vivamus sit amet ex sed mauris rhoncus
        finibus. Etiam pulvinar lectus pellentesque metus imperdiet, eu luctus
        tellus ultrices. Sed ullamcorper velit eu ante facilisis viverra. Mauris
        egestas orci non molestie semper.
      </p>
    </article>
  </Layout>
)

export default AboutPage
