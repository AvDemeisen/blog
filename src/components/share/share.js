import React from "react"

import "./share.scss"

export default ({url, text}) => {
  const platforms = ["twitter"]

  const share = platform => {
    window.open(`https://twitter.com/share?url=${url}&text=${text}`,'twitter','resizable,height=250,width=800')
    console.log(`you've shared to ${platform}!`)
  }

  return (
    <ul className="share-list">
      {platforms.map(platform => (
        <li className="share-list__item" key={platform}>
          <button className={`share-list__button share-list__button--${platform}`} value={platform} onClick={e => share(e.target.value)}>
            {platform}
          </button>
        </li>
      ))}
    </ul>
  )
}
