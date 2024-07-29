import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import ProtectedRoute from './auth/ProtectedRoute';
import { AuthProvider } from './auth/AuthContext';
import ProcessosListagem from './components/ProcessosListagem/ProcessosListagem';
import ProcessosVisualizacao from './components/ProcessosVisualizacao/ProcessosVisualizacao';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/main" element={<ProcessosListagem />} />
            <Route path="/processos/:id" element={<ProcessosVisualizacao />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;