import { useState } from 'react';
import axios from 'axios';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const onSubmit = () => {
    console.log(title, body)
    axios.post('http://localhost:3100/posts', {
      title,
      body
    })
  }

  return (
    <div>
    <h1>Create a blog post</h1>
    <div className="mb-3">
      <label className="form-label">Title</label>
      <input
        className="form-control"
        value={title}
        onChange={(evnet) => {
          setTitle(evnet.target.value )
        }}  
      />
    </div>
    <div className="mb-3">
      <label className="form-label">Body</label>
      <textarea
        className="form-control"
        value={body}
        onChange={(evnet) => {
          setBody(evnet.target.value )
        }}  
      />
    </div>
    <div>
      <button
        className="btn btn-primary"
        onClick={onSubmit}  
      >
        Post
      </button>
    </div>
  </div>
  )
}
export default BlogForm;