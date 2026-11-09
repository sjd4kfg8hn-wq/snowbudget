const defaultStats = {
    bestTime: null,
    wins: 0,
    currentStreak: 0,
    bestStreak: 0
};

function loadStats() {
    const saved = localStorage.getItem("solitaireStats");

    return saved
        ? JSON.parse(saved)
        : { ...defaultStats };
}

function saveStats() {
    localStorage.setItem(
        "solitaireStats",
        JSON.stringify(stats)
    );
}

let stats = loadStats();
