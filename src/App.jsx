import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import ProtectedRoute from './auth/ProtectedRoute';
import { AuthProvider } from './auth/AuthContext';
import ProcessosListagem from './components/ProcessosListagem/ProcessosListagem';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/main" element={<ProcessosListagem />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;