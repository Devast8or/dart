// This file exports a component for managing prize pools for tournaments.

import React, { useState } from 'react';
import './prizeMoneyManagement.module.scss';

const PrizePool = ({ tournamentId }) => {
    const [prizePool, setPrizePool] = useState(0);
    const [prizeDistribution, setPrizeDistribution] = useState([]);

    const handlePrizePoolChange = (e) => {
        setPrizePool(e.target.value);
    };

    const distributePrizes = () => {
        // Logic to distribute prizes based on the prize pool
        // This is a placeholder for the actual distribution logic
        const distribution = [
            { position: 1, amount: prizePool * 0.5 },
            { position: 2, amount: prizePool * 0.3 },
            { position: 3, amount: prizePool * 0.2 },
        ];
        setPrizeDistribution(distribution);
    };

    return (
        <div className="prize-pool">
            <h2>Prize Pool Management</h2>
            <input
                type="number"
                value={prizePool}
                onChange={handlePrizePoolChange}
                placeholder="Enter prize pool amount"
            />
            <button onClick={distributePrizes}>Distribute Prizes</button>
            <div className="prize-distribution">
                <h3>Prize Distribution</h3>
                <ul>
                    {prizeDistribution.map((prize, index) => (
                        <li key={index}>
                            Position {prize.position}: ${prize.amount.toFixed(2)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PrizePool;