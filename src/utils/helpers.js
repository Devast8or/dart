// This file exports helper functions for various tasks related to the dart season simulation platform.

export const calculatePlayerAverage = (scores) => {
    if (!scores.length) return 0;
    const total = scores.reduce((acc, score) => acc + score, 0);
    return total / scores.length;
};

export const formatTournamentDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
};

export const generateUniqueId = () => {
    return 'id-' + Math.random().toString(36).substr(2, 16);
};

export const isValidScore = (score) => {
    return Number.isInteger(score) && score >= 0 && score <= 180;
};