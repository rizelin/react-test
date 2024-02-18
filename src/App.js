import React,{ useState } from 'react'; 
import axios from 'axios'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
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
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/blogs">Blogs</Link>
      </div>
      <Switch>
        <Route path="/" exact>
          Home Page
        </Route>
        <Route path="/blogs" exact>
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
        </Route>
      </Switch>
    </Router>

  )
}
export default App;