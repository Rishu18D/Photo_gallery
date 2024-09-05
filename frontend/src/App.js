import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PhotoUpload from './pages/PhotoUpload';
import AboutUs from './pages/AboutUs';
import ExplorePage from './pages/ExplorePage'; // Import the ExplorePage

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<ExplorePage />} /> {/* Add ExplorePage route */}
                    <Route path="/photo-upload" element={<PhotoUpload />} />
                    <Route path="/about-us" element={<AboutUs />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
