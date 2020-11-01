import React from "react"

function Hello(props) {
return <div>Hello {props.first}</div>
}

export default function Home() {
  return <Hello first="portfolio"/>
}
