// Guarda la clave usada en localStorage
const STORAGE_KEY = 'theme-preference';
const DARK_CLASS = 'dark-theme';

function applyTheme(isDark) {
    const root = document.documentElement;
    if (isDark) {
        root.classList.add(DARK_CLASS);
    } else {
        root.classList.remove(DARK_CLASS);
    }
}

function updateButton(button, isDark) {
    button.setAttribute('aria-pressed', String(isDark));
    button.textContent = isDark ? '☀️' : '🌙';
}

function getStoredPreference() {
    try {
        return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
        return null;
    }
}

function storePreference(value) {
    try {
        localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
        // ignore
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('themeToggle');
    if (!btn) return;

    // Resolve initial preference: stored -> user media -> default light
    const stored = getStoredPreference();
    let isDark;
    if (stored === 'dark') {
        isDark = true;
    } else if (stored === 'light') {
        isDark = false;
    } else {
        isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    applyTheme(isDark);
    updateButton(btn, isDark);

    btn.addEventListener('click', () => {
        isDark = !document.documentElement.classList.contains(DARK_CLASS);
        applyTheme(isDark);
        updateButton(btn, isDark);
        storePreference(isDark ? 'dark' : 'light');
    });

    // Listen to system preference changes; only apply if user hasn't explicitly stored a choice
    if (window.matchMedia) {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        mq.addEventListener ? mq.addEventListener('change', e => {
            const storedNow = getStoredPreference();
            if (storedNow === null) {
                applyTheme(e.matches);
                updateButton(btn, e.matches);
            }
        }) : mq.addListener(e => {
            const storedNow = getStoredPreference();
            if (storedNow === null) {
                applyTheme(e.matches);
                updateButton(btn, e.matches);
            }
        });
    }
});
