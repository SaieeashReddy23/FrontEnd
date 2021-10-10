import {React} from "react";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import './App.css';
import { TeamPage } from './pages/TeamPage';
import {MatchesPage} from './pages/MatchesPage';

function App() {
  return (
  <div className="App">
      <Router>
        <Switch>
          <Route path="/teams/:teamName/matches/:year">
            <MatchesPage/>
          </Route>
          <Route path="/teams/:teamName">
            <TeamPage/>
          </Route>
        </Switch>
        
      </Router>
  </div>
   

    
  );
}

export default App;
