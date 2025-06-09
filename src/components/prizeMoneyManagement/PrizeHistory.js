import React from 'react';
import './prizeMoneyManagement.module.scss';

const PrizeHistory = ({ prizeHistory }) => {
    return (
        <div className="prize-history">
            <h2>Prize History</h2>
            <ul>
                {prizeHistory.map((entry, index) => (
                    <li key={index}>
                        <span>{entry.date}: </span>
                        <span>${entry.amount}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PrizeHistory;