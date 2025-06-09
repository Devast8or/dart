// This file exports a component for simulating matches between players.

import React, { useState } from 'react';
import { simulateMatch } from '../../utils/helpers';
import './matchSimulation.module.scss';

const MatchSimulator = ({ player1, player2 }) => {
    const [result, setResult] = useState(null);

    const handleSimulateMatch = () => {
        const matchResult = simulateMatch(player1, player2);
        setResult(matchResult);
    };

    return (
        <div className="match-simulator">
            <h2>Match Simulator</h2>
            <button onClick={handleSimulateMatch}>Simulate Match</button>
            {result && (
                <div className="match-result">
                    <h3>Match Result:</h3>
                    <p>{result}</p>
                </div>
            )}
        </div>
    );
};

export default MatchSimulator;