let theme = "Light";
let observers = [];

function attach(observer) {
    observers.push(observer);
}

function detach(observer) {
    let newObservers = [];

    for (let obs of observers) {
        if (obs !== observer) {
            newObservers.push(obs);
        }
    }

    observers = newObservers;
}

function notify() {
    for (let observer of observers) {
        observer(theme);
    }
}

function toggleTheme() {
    theme = theme === "Light" ? "Dark" : "Light";
    notify();
}

function getTheme() {
    return theme;
}

const ThemeService = {
    attach,
    detach,
    notify,
    toggleTheme,
    getTheme
};

export default ThemeService;