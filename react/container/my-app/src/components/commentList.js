import React from 'react'

const CommentList = props =>
  <ul>
    {props.data.map(c => (
      <li key={c.id}>{c.title}</li>
    ))}
  </ul>

  export default CommentList