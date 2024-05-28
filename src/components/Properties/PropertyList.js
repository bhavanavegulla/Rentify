import React, { useState, useEffect } from 'react';
import PropertyService from '../../services/PropertyService';

const PropertyList = () => {
    const [properties, setProperties] = useState([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(5);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchProperties();
    }, [page, size]);

    const fetchProperties = async () => {
        try {
            const response = await PropertyService.getAllProperties(page, size);
            setProperties(response.data);
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 403) {
                setError('Access denied. Please log in.');
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    const handleLike = async (id) => {
        try {
            await PropertyService.likeProperty(id);
            fetchProperties();
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 403) {
                setError('Access denied. Please log in.');
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div
      className="register-page"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#3297a8', 
      }}
    >
        <div>
            <center>
            <h2>Properties</h2>
            {error && <p>{error}</p>}
            {properties.map(property => (
                <div key={property.id}>
                    <h3>{property.place}</h3>
                    <p>{property.area}</p>
                    <button onClick={() => handleLike(property.id)}>Like {property.likes}</button>
                </div>
            ))}
            <button onClick={() => setPage(page - 1)} disabled={page === 0}>Previous</button>
            <button onClick={() => setPage(page + 1)}>Next</button>
            <label>
                Page Size:
                <select value={size} onChange={(e) => setSize(e.target.value)}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="20">20</option>
                </select>
            </label>
            </center>
        </div>
        </div>
    );
};

export default PropertyList;