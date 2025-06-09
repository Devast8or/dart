// This file exports a component for managing seasons, including resetting and aggregating results.

import React, { useState } from 'react';
import './seasonManagement.module.scss';

const SeasonManager = () => {
    const [seasons, setSeasons] = useState([]);
    const [currentSeason, setCurrentSeason] = useState(null);

    const createSeason = () => {
        const newSeason = { id: seasons.length + 1, results: [] };
        setSeasons([...seasons, newSeason]);
        setCurrentSeason(newSeason);
    };

    const resetSeason = () => {
        if (currentSeason) {
            setCurrentSeason({ ...currentSeason, results: [] });
        }
    };

    const aggregateResults = () => {
        // Logic to aggregate results from all matches in the current season
        if (currentSeason) {
            // Example aggregation logic
            const aggregatedResults = currentSeason.results.reduce((acc, result) => {
                // Aggregate logic here
                return acc;
            }, {});
            return aggregatedResults;
        }
        return null;
    };

    return (
        <div className="season-manager">
            <h2>Season Manager</h2>
            <button onClick={createSeason}>Create New Season</button>
            <button onClick={resetSeason} disabled={!currentSeason}>Reset Current Season</button>
            <div>
                <h3>Current Season: {currentSeason ? `Season ${currentSeason.id}` : 'None'}</h3>
                <pre>{JSON.stringify(aggregateResults(), null, 2)}</pre>
            </div>
        </div>
    );
};

export default SeasonManager;