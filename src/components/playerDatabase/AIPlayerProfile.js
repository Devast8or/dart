// This file contains the AIPlayerProfile component for displaying AI player profiles.
// It includes the necessary imports and defines the component structure.

import React from 'react';
import PropTypes from 'prop-types';
import './playerDatabase.module.scss';

const AIPlayerProfile = ({ player }) => {
    return (
        <div className="ai-player-profile">
            <h2>{player.name}</h2>
            <p>Skill Level: {player.skillLevel}</p>
            <p>Wins: {player.stats.wins}</p>
            <p>Losses: {player.stats.losses}</p>
            <p>Average Score: {player.stats.averageScore}</p>
            <p>Match History: {player.matchHistory.join(', ')}</p>
        </div>
    );
};

AIPlayerProfile.propTypes = {
    player: PropTypes.shape({
        name: PropTypes.string.isRequired,
        skillLevel: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            wins: PropTypes.number.isRequired,
            losses: PropTypes.number.isRequired,
            averageScore: PropTypes.number.isRequired,
        }).isRequired,
        matchHistory: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
};

export default AIPlayerProfile;