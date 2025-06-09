// This file exports a module containing the rules for dart scoring and gameplay.

const DartRules = {
    scoring: {
        single: 1,
        double: 2,
        triple: 3,
        bullseye: 50,
        outerBull: 25,
    },
    gameTypes: {
        501: {
            description: "Players start with 501 points and aim to reach zero.",
            rules: [
                "Players take turns throwing three darts.",
                "The score of each turn is subtracted from the total.",
                "A player must finish on a double."
            ],
        },
        '301': {
            description: "Similar to 501 but starts with 301 points.",
            rules: [
                "Players take turns throwing three darts.",
                "The score of each turn is subtracted from the total.",
                "A player must finish on a double."
            ],
        },
        'Cricket': {
            description: "Players aim to hit numbers 15-20 and the bullseye.",
            rules: [
                "Players take turns throwing three darts.",
                "A player must hit a number three times to close it.",
                "The game ends when a player closes all numbers and has a higher score."
            ],
        },
    },
};

export default DartRules;