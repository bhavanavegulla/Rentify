import React from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../services/AuthService';

const Navbar = () => {
    const handleLogout = () => {
        AuthService.logout();
    };

    return (
        <header>
            <h1 style={styles.heading}>Rentify</h1>
            <nav style={styles.navbar}>
                <ul style={styles.navbarList}>
                    <li style={styles.navbarItem}><Link to="/register" style={styles.navLink}>Register</Link></li>
                    <li style={styles.navbarItem}><Link to="/login" style={styles.navLink}>Login</Link></li>
                    <li style={styles.navbarItem}><Link to="/properties" style={styles.navLink}>Properties</Link></li>
                    <li style={styles.navbarItem}><Link to="/my-properties" style={styles.navLink}>My Properties</Link></li>
                    <li style={styles.navbarItem}><Link to="/add-property" style={styles.navLink}>Add Property</Link></li>
                </ul>
            </nav>
        </header>
    );
};

const styles = {
    heading: {
        textAlign: 'center',
        color: 'white',
        margin: '0',
        padding: '1rem',
        backgroundColor: '#333',
    },
    navbar: {
        backgroundColor: '#333',
        padding: '1rem',
    },
    navbarList: {
        listStyle: 'none',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 0,
        padding: 0,
    },
    navbarItem: {
        margin: '0 1rem',
    },
    navLink: {
        color: 'white',
        textDecoration: 'none',
        fontWeight: 'bold',
        padding: '0.5rem 1rem',
        borderRadius: '4px',
        transition: 'background-color 0.3s ease',
    },
    navLinkHover: {
        backgroundColor: '#575757',
    }
};

export default Navbar;
