import React from 'react'
import WithData from './WithData';

const Comment = ({ comment }) => (
  <div className="card text-white bg-warning mb-3" style={{ maxWidth: "18rem" }}>
    <div className="card-header">{comment && comment.name}</div>
    <div className="card-body">
      <h5 className="card-title">{comment && comment.email}</h5>
      <p className="card-text">{comment && comment.body}</p>
    </div>
  </div>
)


export default WithData(Comment);
