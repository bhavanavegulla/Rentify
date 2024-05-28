import React, { useState } from 'react';
import PropertyService from '../../services/PropertyService';

const PropertyForm = ({ history }) => {
  const [place, setPlace] = useState('');
  const [area, setArea] = useState('');
  const [bedrooms, setBedrooms] = useState('');
  const [bathrooms, setBathrooms] = useState('');
  const [nearbyHospitals, setNearbyHospitals] = useState('');
  const [nearbyColleges, setNearbyColleges] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await PropertyService.createProperty({ place, area, bedrooms, bathrooms, nearbyHospitals, nearbyColleges });
      history.push('/my-properties');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
    className="property-form-page"
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#3297a8', 
    }}
  >
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#f4f0ee', 
        padding: '20px',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        width: '400px',
      }}
    >
    
      <h2>Add Property</h2>
      <input
        type="text"
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        placeholder="Place"
        required
        style={{ margin: '5px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <input
        type="text"
        value={area}
        onChange={(e) => setArea(e.target.value)}
        placeholder="Area"
        required
        style={{ margin: '5px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <input
        type="number"
        value={bedrooms}
        onChange={(e) => setBedrooms(e.target.value)}
        placeholder="Bedrooms"
        required
        style={{ margin: '5px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <input
        type="number"
        value={bathrooms}
        onChange={(e) => setBathrooms(e.target.value)}
        placeholder="Bathrooms"
        required
        style={{ margin: '5px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <input
        type="text"
        value={nearbyHospitals}
        onChange={(e) => setNearbyHospitals(e.target.value)}
        placeholder="Nearby Hospitals"
        style={{ margin: '5px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <input
        type="text"
        value={nearbyColleges}
        onChange={(e) => setNearbyColleges(e.target.value)}
        placeholder="Nearby Colleges"
        style={{ margin: '5px 0', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
      />
      <button type="submit" style={{ background: '#007bff', color: '#fff', padding: '10px 20px', borderRadius: '5px', margin: '10px 0' }}>
        Add Property
      </button>
    </form>
    </div>
  );
};

export default PropertyForm;
