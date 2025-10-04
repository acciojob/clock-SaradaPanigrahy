//your JS code here. If required.
function updateTimer() {
    const timerElement = document.getElementById("timer");
    const now = new Date();
    // Format the date and time
    const formattedTime = now.toLocaleString();
    timerElement.textContent = formattedTime;
}

// Update the timer immediately
updateTimer();

// Update every second
setInterval(updateTimer, 1000);
