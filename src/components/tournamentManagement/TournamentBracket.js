import React from 'react';
import './tournamentManagement.module.scss';

const TournamentBracket = ({ tournaments }) => {
    return (
        <div className="tournament-bracket">
            <h2>Tournament Bracket</h2>
            {tournaments.length === 0 ? (
                <p>No tournaments available.</p>
            ) : (
                <ul>
                    {tournaments.map((tournament, index) => (
                        <li key={index}>
                            <h3>{tournament.name}</h3>
                            {/* Render bracket visualization here */}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TournamentBracket;