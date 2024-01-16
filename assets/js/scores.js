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

        // Retrieve highscores from local storage
        var highscores = JSON.parse(localStorage.getItem('highscores')) || [];

        // Display highscores
        highscores.forEach(function(score) {
        var listItem = document.createElement('li');
        listItem.textContent = score.initials + ': ' + score.score;
        highscoresList.appendChild(listItem);
        });
    }

    // Event listener for Clear Highscores button
    document.getElementById('clear').addEventListener('click', clearHighscores);
});