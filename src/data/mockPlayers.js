// This file contains mock data for player profiles.

const mockPlayers = [
    {
        id: 1,
        name: "John Doe",
        skillLevel: "Intermediate",
        stats: {
            wins: 10,
            losses: 5,
            averageScore: 75.5,
        },
        history: [
            { tournamentId: 1, position: 2 },
            { tournamentId: 2, position: 1 },
        ],
    },
    {
        id: 2,
        name: "Jane Smith",
        skillLevel: "Advanced",
        stats: {
            wins: 15,
            losses: 3,
            averageScore: 85.0,
        },
        history: [
            { tournamentId: 1, position: 1 },
            { tournamentId: 3, position: 3 },
        ],
    },
    {
        id: 3,
        name: "Bob Johnson",
        skillLevel: "Beginner",
        stats: {
            wins: 5,
            losses: 10,
            averageScore: 60.0,
        },
        history: [
            { tournamentId: 2, position: 4 },
            { tournamentId: 3, position: 2 },
        ],
    },
];

export default mockPlayers;