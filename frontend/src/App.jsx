import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Form from './pages/Form';
import View from './pages/View';
import Login from './auth/Login';
import ProtectedRoute from './auth/ProtectedRoute'; // Import the ProtectedRoute component

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* Public Route: Login */}
          <Route path="/" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="*"
            element={
              <ProtectedRoute>
                <div>
                  <Header />
                  <div className="content">
                    <Sidebar />
                    <main className="main-content">
                      <Routes>
                        <Route path="/form/:id" element={<Form />} />
                        <Route path="/form" element={<Form />} />
                        <Route path="/view" element={<View />} />
                        <Route path="*" element={<Navigate to="/" />} />{' '}
                        {/* Redirect invalid paths */}
                      </Routes>
                    </main>
                  </div>
                  <Footer />
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
