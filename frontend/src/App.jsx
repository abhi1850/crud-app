import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Form from './pages/Form';
import View from './pages/View';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Constant Header */}
        <Header />

        <div className="content">
          {/* Constant Sidebar */}
          <Sidebar />

          {/* Dynamic Main Content */}
          <main className="main-content">
            <Routes>
              <Route path="/form/:id" element={<Form />} />
              <Route path="/form" element={<Form />} />
              <Route path="/view" element={<View />} />
            </Routes>
          </main>
        </div>

        {/* Constant Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
