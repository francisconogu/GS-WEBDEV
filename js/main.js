function setTheme(theme) {
    document.body.classList.remove('light', 'dark', 'blue');
    document.body.classList.add(theme);
    localStorage.setItem('selectedTheme', theme);
}

// Aplica o tema salvo ao carregar a página
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('selectedTheme') || 'light';
    setTheme(savedTheme);
});