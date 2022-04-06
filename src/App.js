import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import PlayersList from "./components/PlayersList/PlayersList";
import PlayerProvider from "./store/player-provider";
import CreatePlayer from "./components/CreatePlayer/CreatePlayer";
import NavBar from "./components/Layout/NavBar";
import PlayerCard from "./components/UI/PlayerCard";
import EditPlayer from "./components/EditPlayer/EditPlayer";

function App() {
  return (
    <div>
      <NavBar/>
      <PlayerProvider>
        <Routes>
          <Route path="/createPlayer"  element={<CreatePlayer />}/>
          <Route path="/"  element={<PlayersList/>}/>
          <Route path="/player/:playerId" element={<PlayerCard/>}/>
          <Route path="/editPlayer/:playerId" element={<EditPlayer/>}/>
        </Routes>
  
      </PlayerProvider>
    </div>
  );
}

export default App;

