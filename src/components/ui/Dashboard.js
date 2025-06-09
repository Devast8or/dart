import React from 'react';
import './ui.module.scss';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Dart Season Simulation Dashboard</h1>
            <p>Welcome to the Dart Season Simulation Platform!</p>
            <div className="dashboard__stats">
                <h2>Current Season Stats</h2>
                {/* Placeholder for season statistics */}
            </div>
            <div className="dashboard__upcoming-matches">
                <h2>Upcoming Matches</h2>
                {/* Placeholder for upcoming matches */}
            </div>
            <div className="dashboard__leaderboard">
                <h2>Leaderboard</h2>
                {/* Placeholder for leaderboard */}
            </div>
        </div>
    );
};

export default Dashboard;