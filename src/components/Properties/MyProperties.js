import React, { useState, useEffect } from 'react';
import PropertyService from '../../services/PropertyService';

const MyProperties = () => {
    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetchMyProperties();
    }, []);

    const fetchMyProperties = async () => {
        try {
            const response = await PropertyService.getMyProperties();
            setProperties(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await PropertyService.deleteProperty(id);
            fetchMyProperties();
        } catch (error) {
            console.error(error);
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
            <h2>My Properties</h2>
            </center>
            {properties.map(property => (
                <div key={property.id}>
                    <h3>{property.place}</h3>
                    <p>{property.area}</p>
                    <button onClick={() => handleDelete(property.id)}>Delete</button>
                </div>
            ))}
        </div>
        </div>
    );
};

export default MyProperties;
