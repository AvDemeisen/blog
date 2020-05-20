import React, { useEffect, useState } from "react"
import { Link } from "gatsby"
import { client } from "../../utils/search"
import Twitter from "../twitter/twitter"
import "./sidebar.scss"

export default () => {
    const [articles, setArticles] = useState();
    useEffect(() => {
        client.getEntries()
            .then(jsonData => setArticles(jsonData.items.slice(5)))
    }, [])

    return (
        <aside className="sidebar">
            <Twitter></Twitter>
            <Recommended articles={articles}></Recommended>
        </aside>
    )
}

const Recommended = ({ articles }) => (
    <section className="recommended">
        <h3 className="recommended__header">popular articles</h3>
        <ul className="recommended__list">
            {articles ? articles.map(article =>
                <li className="recommended__item" key={article.fields.title}>
                    <Link className="recommended__link" to={`/${article.fields.slug}`}>
                        <img className="recommended__image" alt={article.fields.image.fields.title} src={`${article.fields.image.fields.file.url}?w=250&fit=scale`}></img>
                        <span className="recommended__title">{article.fields.title}</span>
                    </Link>
                </li>
            ): null}
        </ul>
    </section>
)