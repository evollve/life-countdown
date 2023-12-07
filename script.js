function updateTimer() {
    var now = new Date();
    var countdownDate = new Date('February 14, 2069 00:00:00');
    var countupDate = new Date('February 14, 1992 00:00:00');
    
    var countdownTime = countdownDate - now;
    var countupTime = now - countupDate;

    var daysToGo = Math.floor(countdownTime / (1000 * 60 * 60 * 24));
    var daysSince = Math.floor(countupTime / (1000 * 60 * 60 * 24));

    document.getElementById('countdown').innerHTML = daysToGo + ' days';
    document.getElementById('countup').innerHTML = daysSince + ' days';
}

function updateLifeProgress() {
    var birthDate = new Date('February 14, 1992 00:00:00');
    var endDate = new Date('February 14, 2069 00:00:00');
    var now = new Date();

    var totalLifeSpan = endDate - birthDate;
    var livedLifeSpan = now - birthDate;

    var lifeProgress = (livedLifeSpan / totalLifeSpan) * 100;
    lifeProgress = Math.min(Math.max(lifeProgress, 0), 100); // Ensure it's between 0 and 100

    document.getElementById('lifeProgressBar').style.width = lifeProgress + '%';
    document.getElementById('lifeProgressPercentage').innerHTML = lifeProgress.toFixed(2) + '% of your life completed';
    updateLifeProgressChart(lifeProgress);
}

function updateLifeProgressChart(percentage) {
    var svg = document.getElementById('lifeProgressChart');
    svg.innerHTML = ''; // Clear existing content

    var radius = 90;
    var circumference = 2 * Math.PI * radius;
    var strokeVal = (percentage / 100) * circumference;

    svg.innerHTML = `
        <circle cx="100" cy="100" r="${radius}" stroke="#e0e0e0" stroke-width="20" fill="none" />
        <circle cx="100" cy="100" r="${radius}" stroke="#4caf50" stroke-width="20" fill="none"
                stroke-dasharray="${circumference} ${circumference}"
                stroke-dashoffset="${circumference}" 
                style="transform: rotate(-90deg); transform-origin: center; transition: stroke-dashoffset 0.5s;" />
    `;

    // Animate the stroke offset
    var progressCircle = svg.querySelector('circle:nth-child(2)');
    progressCircle.style.strokeDashoffset = circumference - strokeVal;
}

setInterval(() => {
    updateTimer();
    updateLifeProgress();
}, 1000);

updateTimer();
updateLifeProgress();
