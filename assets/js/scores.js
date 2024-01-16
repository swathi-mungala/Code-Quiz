document.addEventListener('DOMContentLoaded', function() {
    // Function to clear highscores
    function clearHighscores() {
      localStorage.removeItem('highscores');
      renderHighscores();
    }
  

  });
  