import React, { useEffect, useState } from "react"
import queryString from 'query-string'
import { client } from "../utils/search"
import Layout from "../components/layout/index"
import SEO from "../components/seo/index"
import Card from "../components/card/index"
import "../styles/pages/pages.scss"

const pageTitle = "results"

const ResultsPage = props => {
    const importedTag = queryString.parse(props.location.search).q
    const [results, setResults] = useState();
    useEffect(() => {
        client.getEntries()
            .then(jsonData => jsonData.items.filter(item => item.fields.tags.includes(importedTag)))
            .then(filteredData => setResults(filteredData))
    }, [importedTag])

    return (
        <Layout>
            <SEO title={pageTitle} />
            <article className="page">
                <h2 className="page__title">{importedTag}</h2>
                <section className="results__list">
                    {results ? results.map(result => <Card key={result.fields.title} data={result.fields}></Card>) : null}
                </section>
            </article>
        </Layout>
    )
}

export default ResultsPage
