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
      <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
        <div class="container">
          <Link class="navbar-brand" to="/">Home</Link>
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="/blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact>
          Home Page
        </Route>
        <Route path="/blogs" exact>
          <div className="container">
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
        </Route>
      </Switch>
    </Router>

  )
}
export default App;