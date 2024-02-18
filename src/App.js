import React,{ useState } from 'react'; 

function App() {
  const [title, setTitle] = useState('');

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
        <div>
          <button className="btn btn-primary">
            Post
          </button>
        </div>
      </div>
    </React.StrictMode>
  )
}
export default App;