import React from "react"
import showdown from "showdown"

const converter = new showdown.Converter()

const MarkdownContent = ({ content, style }) => (
  <div
    style={style}
    dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
  />
)

export default MarkdownContent
