let homeScore = 0;
let guestScore = 0;
let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

// --- NEW FUNCTION ---
function highlightLeader() {
  // 1. Reset: Take the "winner" badge away from both
  homeScoreEl.classList.remove("winner");
  guestScoreEl.classList.remove("winner");

  // 2. Check: Who is actually winning right now?
  if (homeScore > guestScore) {
    homeScoreEl.classList.add("winner");
  } else if (guestScore > homeScore) {
    guestScoreEl.classList.add("winner");
  }
  // If it's a tie, the function finishes and no one has the class
}

// --- HOME FUNCTIONS ---
function add1Home() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
  highlightLeader();
}

function add2Home() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
  highlightLeader();
}

function add3Home() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
  highlightLeader();
}

// --- GUEST FUNCTIONS ---
function add1Guest() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
  highlightLeader();
}

function add2Guest() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
  highlightLeader();
}

function add3Guest() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
  highlightLeader();
}

// --- RESET FUNCTION ---
function reset() {
  homeScore = 0;
  guestScore = 0;
  homeScoreEl.textContent = homeScore;
  guestScoreEl.textContent = guestScore;
  highlightLeader(); // This will remove the gold border because it's a tie (0-0)
}

let timeLeft = 720; // 12 minutes in seconds
let timerEl = document.getElementById("timer-display");

function startTimer() {
  // This tells JS to run the 'updateTimer' function every 1000ms (1 second)
  setInterval(updateTimer, 1000);
}

function updateTimer() {
  let minutes = Math.floor(timeLeft / 60); // Get the full minutes
  let seconds = timeLeft % 60; // Get the remaining seconds

  // This makes sure 9 seconds looks like "09" instead of just "9"
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Show it on the screen
  timerEl.textContent = minutes + ":" + seconds;

  // Subtract 1 second from our memory
  if (timeLeft > 0) {
    timeLeft--;
  } else {
    timerEl.textContent = "GAME OVER";
  }
}

function changeHomeName() {
  // 1. Pop up a box and ask the user for a name
  let newName = prompt("Enter Home Team Name:");

  // 2. Find the "HOME" title on the screen
  let homeNameEl = document.getElementById("home-name");

  // 3. If the user actually typed something, change the text!
  if (newName !== "") {
    homeNameEl.textContent = newName.toUpperCase();
  }
}

function changeGuestName() {
  let newName = prompt("Enter Guest Team Name:");
  let guestNameEl = document.getElementById("guest-name");

  if (newName !== "") {
    guestNameEl.textContent = newName.toUpperCase();
  }
}
