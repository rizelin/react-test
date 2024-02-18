import React,{ useState } from 'react'; 

function App() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const onSubmit = () => {
    console.log(title, body)
  }

  return (
    <React.StrictMode>
      <div className="container">
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
    </React.StrictMode>
  )
}
export default App;