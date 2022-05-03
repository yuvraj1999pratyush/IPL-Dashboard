import './App.scss';
import { TeamPage } from './pages/TeamPage';
import {Route, Routes} from 'react-router-dom';
import { MatchPage } from './pages/MatchPage';
import {HomePage} from './pages/HomePage';

function App() {
  return (
    <div className="App">
      
    
      <Routes>
              <Route exact path="/teams/:teamName" element={<TeamPage/>} />
      </Routes>    

      <Routes>
              <Route exact path="/teams/:teamName/matches/:year" element={<MatchPage/>} />
      </Routes>     

      <Routes>
              <Route exact path="/" element={<HomePage/>} />
      </Routes> 
    
    
    </div>
  );
}

export default App;
