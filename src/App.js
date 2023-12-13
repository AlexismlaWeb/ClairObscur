import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer les styles de Bootstrap
import Home from './pages/Home';
import EquipePage from './pages/EquipePage';
import PartenairesPage from './pages/PartenairesPage';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/partenaires" Component={PartenairesPage} />
          <Route path="/notre-equipe" Component={EquipePage} />
        </Routes>
    </Router>
  );
};

export default App;
