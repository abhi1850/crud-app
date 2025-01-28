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

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Render Header and Sidebar only for authenticated routes */}
        <Routes>
          {/* Default Login Route */}
          <Route path="/" element={<Login />} />

          {/* Protected Routes */}
          <Route
            path="*"
            element={
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
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
