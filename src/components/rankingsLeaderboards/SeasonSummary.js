import React from 'react';
import './rankingsLeaderboards.module.scss';

const SeasonSummary = ({ seasonData }) => {
    return (
        <div className="season-summary">
            <h2>Season Summary</h2>
            {seasonData ? (
                <div>
                    <h3>Season: {seasonData.seasonName}</h3>
                    <p>Total Tournaments: {seasonData.totalTournaments}</p>
                    <p>Top Player: {seasonData.topPlayer.name} - Wins: {seasonData.topPlayer.wins}</p>
                    <h4>Player Rankings:</h4>
                    <ul>
                        {seasonData.playerRankings.map((player, index) => (
                            <li key={index}>
                                {player.name} - Rank: {player.rank} - Wins: {player.wins}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No season data available.</p>
            )}
        </div>
    );
};

export default SeasonSummary;