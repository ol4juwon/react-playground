import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './pages/create/Create';
import Home from './pages/home/Home';
import Recipe from './pages/recipe/Recipe';
import { Search } from './pages/search/Search';
import Navbar from './pages/components/Navbar'

function App() {
  return (
    <div className="App">
      
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/create" component={Create} />
          <Route path="/recipe/:id" component={Recipe} />
          <Route path="/search" component={Search} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
