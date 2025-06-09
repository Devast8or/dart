import React from 'react';
import PropTypes from 'prop-types';
import './playerDatabase.module.scss';

const HumanPlayerProfile = ({ player }) => {
    return (
        <div className="human-player-profile">
            <h2>{player.name}</h2>
            <p>Age: {player.age}</p>
            <p>Country: {player.country}</p>
            <p>Wins: {player.stats.wins}</p>
            <p>Losses: {player.stats.losses}</p>
            <p>Average Score: {player.stats.averageScore}</p>
        </div>
    );
};

HumanPlayerProfile.propTypes = {
    player: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number.isRequired,
        country: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            wins: PropTypes.number.isRequired,
            losses: PropTypes.number.isRequired,
            averageScore: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};

export default HumanPlayerProfile;