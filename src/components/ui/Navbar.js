// This file exports a component for the navigation bar.

import React from 'react';
import { Link } from 'react-router-dom';
import './ui.module.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar__brand">
                <Link to="/">Dart Season Simulator</Link>
            </div>
            <ul className="navbar__links">
                <li>
                    <Link to="/user-management">User Management</Link>
                </li>
                <li>
                    <Link to="/player-database">Player Database</Link>
                </li>
                <li>
                    <Link to="/tournament-management">Tournament Management</Link>
                </li>
                <li>
                    <Link to="/match-simulation">Match Simulation</Link>
                </li>
                <li>
                    <Link to="/rankings">Rankings & Leaderboards</Link>
                </li>
                <li>
                    <Link to="/analytics">Analytics & Reporting</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;