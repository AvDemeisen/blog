import React from "react"
import { List, ListItem, ListButton } from "./styles";

export default ({url, text}) => {
  const platforms = ["twitter"]

  const share = platform => {
    window.open(`https://twitter.com/share?url=${url}&text=${text}`,'twitter','resizable,height=250,width=800')
    console.log(`you've shared to ${platform}!`)
  }

  return (
    <List>
      {platforms.map(platform => (
        <ListItem key={platform}>
          <ListButton value={platform} onClick={e => share(e.target.value)}>
            {platform}
          </ListButton>
        </ListItem>
      ))}
    </List>
  )
}
