import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import PropertyList from './components/Properties/PropertyList';
import MyProperties from './components/Properties/MyProperties';
import PropertyForm from './components/Properties/PropertyForm';

const App = () => {
    return (
        <div style={{ backgroundColor: '#3297a8', minHeight: '100vh' }}>
        <Router>
            <Navbar />
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/properties" element={<PropertyList />} />
                <Route path="/my-properties" element={<MyProperties />} />
                <Route path="/add-property" element={<PropertyForm />} />
            </Routes>
        </Router>
        </div>
    );
};

export default App;
