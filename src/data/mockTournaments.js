// This file contains mock data for tournaments.

const mockTournaments = [
    {
        id: 1,
        name: "Spring Championship",
        format: "knockout",
        prizePool: 5000,
        participants: [
            { playerId: 1, name: "John Doe", skillLevel: "intermediate" },
            { playerId: 2, name: "Jane Smith", skillLevel: "advanced" },
            { playerId: 3, name: "AI Player 1", skillLevel: "beginner" },
        ],
        matches: [
            { round: 1, player1: 1, player2: 3, winner: 1 },
            { round: 1, player1: 2, player2: 3, winner: 2 },
        ],
        winner: 2,
        date: "2023-05-15",
    },
    {
        id: 2,
        name: "Summer League",
        format: "round-robin",
        prizePool: 3000,
        participants: [
            { playerId: 4, name: "Alice Johnson", skillLevel: "advanced" },
            { playerId: 5, name: "Bob Brown", skillLevel: "intermediate" },
            { playerId: 6, name: "AI Player 2", skillLevel: "beginner" },
        ],
        matches: [
            { round: 1, player1: 4, player2: 5, winner: 4 },
            { round: 1, player1: 4, player2: 6, winner: 4 },
            { round: 1, player1: 5, player2: 6, winner: 5 },
        ],
        standings: [
            { playerId: 4, wins: 2, losses: 0 },
            { playerId: 5, wins: 1, losses: 1 },
            { playerId: 6, wins: 0, losses: 2 },
        ],
        date: "2023-07-20",
    },
];

export default mockTournaments;