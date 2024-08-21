import React from "react"
import '../style/links.css'

type Props = {
  link: string,
  label: string,
}

function Link({ link, label }: Props) {
  return (
    <>
      <a target="_blank" href={link}>
        <button type="button">{label}</button>
      </a>
    </>
  )
}

export default Link
