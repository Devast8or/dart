import React from 'react';
import './tournamentManagement.module.scss';

const TournamentList = ({ tournaments }) => {
    return (
        <div className="tournament-list">
            <h2>Tournament List</h2>
            {tournaments.length === 0 ? (
                <p>No tournaments available.</p>
            ) : (
                <ul>
                    {tournaments.map(tournament => (
                        <li key={tournament.id}>
                            <h3>{tournament.name}</h3>
                            <p>Format: {tournament.format}</p>
                            <p>Participants: {tournament.participants.length}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TournamentList;