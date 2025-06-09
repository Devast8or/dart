// PlayerAnalytics.js
import React from 'react';
import PropTypes from 'prop-types';
import './analyticsReporting.module.scss';

const PlayerAnalytics = ({ playerData }) => {
    return (
        <div className="player-analytics">
            <h2>{playerData.name}'s Analytics</h2>
            <p>Wins: {playerData.wins}</p>
            <p>Losses: {playerData.losses}</p>
            <p>Average Score: {playerData.averageScore}</p>
            <p>Ranking: {playerData.ranking}</p>
            {/* Additional analytics can be added here */}
        </div>
    );
};

PlayerAnalytics.propTypes = {
    playerData: PropTypes.shape({
        name: PropTypes.string.isRequired,
        wins: PropTypes.number.isRequired,
        losses: PropTypes.number.isRequired,
        averageScore: PropTypes.number.isRequired,
        ranking: PropTypes.number.isRequired,
    }).isRequired,
};

export default PlayerAnalytics;