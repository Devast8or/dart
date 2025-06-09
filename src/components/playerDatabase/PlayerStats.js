import React from 'react';
import PropTypes from 'prop-types';
import './playerDatabase.module.scss';

const PlayerStats = ({ player }) => {
    return (
        <div className="player-stats">
            <h2>{player.name}'s Statistics</h2>
            <ul>
                <li>Wins: {player.stats.wins}</li>
                <li>Losses: {player.stats.losses}</li>
                <li>Average Score: {player.stats.averageScore}</li>
                <li>Highest Score: {player.stats.highestScore}</li>
                <li>Matches Played: {player.stats.matchesPlayed}</li>
            </ul>
        </div>
    );
};

PlayerStats.propTypes = {
    player: PropTypes.shape({
        name: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            wins: PropTypes.number.isRequired,
            losses: PropTypes.number.isRequired,
            averageScore: PropTypes.number.isRequired,
            highestScore: PropTypes.number.isRequired,
            matchesPlayed: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};

export default PlayerStats;