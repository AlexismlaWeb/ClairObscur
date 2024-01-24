import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Assurez-vous d'importer les styles de Bootstrap
import Home from './pages/Home';
import EquipePage from './pages/EquipePage';
import PartenairesPage from './pages/PartenairesPage';
import ContactPage from './pages/ContactPage';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/partenaires" Component={PartenairesPage} />
          <Route path="/notre-equipe" Component={EquipePage} />
          <Route path="/contact" Component={ContactPage} />
        </Routes>
    </Router>
  );
};

export default App;
