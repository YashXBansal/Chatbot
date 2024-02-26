import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const Navbar = lazy(() => import('./components/Navbar'));
const Landing = lazy(() => import('./Pages/Landing'));
const Footer = lazy(() => import('./components/Footer'));
const Chat = lazy(() => import('./Pages/Chat'));

// Import other pages using lazy loading if needed

function App() {
  return (
    <div className="bg-black"> {/* Apply background color here */}
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/chat" element={<Chat />} />
            {/* Define other routes here */}
          </Routes>
          <Footer />
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
