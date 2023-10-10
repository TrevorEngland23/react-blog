import Navbar from "./Navbar"
import Home from "./Home"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from "./Create"
import BlogDetails from "./BlogDetails"
import NotFound from "./NotFound"
import './notFound.css'

function App() {

  
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          {/* All routes go inside this switch component */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            {/* catch any other routes */}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
