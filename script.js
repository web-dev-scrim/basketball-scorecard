let homeScore = 0;
let guestScore = 0;

function incrementScore(team, points) {
  if (team === "home") {
    homeScore += points;
    document.getElementById("home-score").innerText = `${homeScore}`;
  } else {
    guestScore += points;
    document.getElementById("guest-score").innerText = `${guestScore}`;
  }
}

function resetScores() {
  homeScore = 0;
  guestScore = 0;
  document.getElementById("home-score").innerText = "0";
  document.getElementById("guest-score").innerText = "0";
}

// Make functions globally available for onclick handlers
window.incrementScore = incrementScore;
window.resetScores = resetScores;
