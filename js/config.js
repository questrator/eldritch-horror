const ancients = {
    azathoth: {
        id: 'azathoth',
        name: 'Azathoth',
        cardFace: `./assets/Ancients/azathoth.png`,
        pack: {
            green: [1, 2, 2],
            yellow: [2, 3, 4],
            blue: [1, 1, 0],
        }
    },
    cthulhu: {
        id: 'cthulhu',
        name: 'Cthulhu',
        cardFace: "./assets/Ancients/cthulhu.png",
        pack: {
            green: [0, 1, 3],
            yellow: [2, 3, 4],
            blue: [2, 0, 0],
        }
    },
    iogSothoth: {
        id: 'iogSothoth',
        name: 'Yog-Sothoth',
        cardFace: "./assets/Ancients/iogSothoth.png",
        pack: {
            green: [0, 2, 3],
            yellow: [2, 3, 4],
            blue: [1, 1, 0],
        }
    },
    shubNiggurath: {
        id: 'shubNiggurath',
        name: 'Shub-Niggurath',
        cardFace: "./assets/Ancients/shubNiggurath.png",
        pack: {
            green: [1, 3, 2],
            yellow: [2, 2, 4],
            blue: [1, 1, 0],
        }
    },
};

const difficulties = {
    supereasy: {
        id: "supereasy",
        required: "easy",
        remaining: "medium",
        forbidden: "hard"
    },
    easy: {
        id: "easy",
        required: null,
        remaining: null,
        forbidden: "hard"
    },
    standart: {
        id: "standart",
        required: null,
        remaining: null,
        forbidden: null
    },
    hard: {
        id: "hard",
        required: null,
        remaining: null,
        forbidden: "easy"
    },
    superhard: {
        id: "superhard",
        required: "hard",
        remaining: "medium",
        forbidden: "easy"
    }
};

const cards = {
    green: {
        easy: [1, 12, 16, 17, 18],
        medium: [7, 8, 9, 10, 11, 13, 14, 15],
        hard: [2, 3, 4, 5, 6]
    },
    yellow: {
        easy: [11, 12, 13, 14, 21],
        medium: [1, 2, 3, 4, 5, 15, 16, 17, 18, 19, 20],
        hard: [6, 7, 8, 9, 10]
    },
    blue: {
        easy: [3, 4, 5, 10],
        medium: [7, 9, 11, 12],
        hard: [1, 2, 6, 8]
    }
};

export { ancients, difficulties, cards };