import React from 'react';
import './rankingsLeaderboards.module.scss';

const Leaderboard = ({ rankings }) => {
    return (
        <div className="leaderboard">
            <h2>Player Rankings</h2>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Player</th>
                        <th>Prize Money</th>
                    </tr>
                </thead>
                <tbody>
                    {rankings.map((player, index) => (
                        <tr key={player.id}>
                            <td>{index + 1}</td>
                            <td>{player.name}</td>
                            <td>${player.prizeMoney.toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Leaderboard;