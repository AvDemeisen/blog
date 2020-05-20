import React from "react"
import Layout from "../components/layout/index"
import SEO from "../components/seo/index"
import "../styles/pages/pages.scss"

const pageTitle = "donate"

const DonatePage = () => (
    <Layout>
        <SEO title={pageTitle} />
        <article className="page">
            <h2 className="page__title">{pageTitle}</h2>
        </article>
    </Layout>
)

export default DonatePage