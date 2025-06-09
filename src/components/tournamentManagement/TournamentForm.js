import React, { useState } from 'react';
import './tournamentManagement.module.scss';

const TournamentForm = ({ onSubmit }) => {
    const [tournamentName, setTournamentName] = useState('');
    const [tournamentFormat, setTournamentFormat] = useState('knockout');
    const [prizePool, setPrizePool] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ tournamentName, tournamentFormat, prizePool });
        setTournamentName('');
        setTournamentFormat('knockout');
        setPrizePool('');
    };

    return (
        <form onSubmit={handleSubmit} className="tournament-form">
            <div>
                <label htmlFor="tournamentName">Tournament Name:</label>
                <input
                    type="text"
                    id="tournamentName"
                    value={tournamentName}
                    onChange={(e) => setTournamentName(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="tournamentFormat">Tournament Format:</label>
                <select
                    id="tournamentFormat"
                    value={tournamentFormat}
                    onChange={(e) => setTournamentFormat(e.target.value)}
                >
                    <option value="knockout">Knockout</option>
                    <option value="round-robin">Round Robin</option>
                    <option value="league">League</option>
                </select>
            </div>
            <div>
                <label htmlFor="prizePool">Prize Pool:</label>
                <input
                    type="number"
                    id="prizePool"
                    value={prizePool}
                    onChange={(e) => setPrizePool(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Tournament</button>
        </form>
    );
};

export default TournamentForm;