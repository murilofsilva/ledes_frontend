import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './components/loginForm/LoginForm';
import ProtectedRoute from './auth/ProtectedRoute';
import { AuthProvider } from './auth/AuthContext';
import ProcessosListagem from './components/processosListagem/ProcessosListagem';
import ProcessosVisualizacao from './components/processosVisualizacao/ProcessosVisualizacao';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/processos" element={<ProcessosListagem />} />
            <Route path="/processos/:id" element={<ProcessosVisualizacao />} />
          </Route>
          <Route path="*" element={<Navigate to="/processos" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;