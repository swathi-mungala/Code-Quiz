document.addEventListener('DOMContentLoaded', function() {
    // Function to clear highscores
    function clearHighscores() {
        localStorage.removeItem('highscores');
        renderHighscores();
    }
    // Function to render highscores
    function renderHighscores() {
        var highscoresList = document.getElementById('highscores');
        highscoresList.innerHTML = ''; // Clear existing entries
    }
});