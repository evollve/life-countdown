document.getElementById('calculateButton').addEventListener('click', calculate);

function calculate() {
    let birthdateValue = document.getElementById('birthdateInput').value;
    if (!birthdateValue) {
        alert('Please enter a valid birthdate.');
        return;
    }
    let birthDate = new Date(birthdateValue);
    updateTimer(birthDate);
    updateLifeProgress(birthDate);
    displayAge(birthDate);
    displayMilestones(birthDate);
}

function updateTimer(birthDate) {
    const now = new Date();
    const countupTime = now - birthDate;
    const daysSince = Math.floor(countupTime / (1000 * 60 * 60 * 24));
    document.getElementById('countup').textContent = numberWithCommas(daysSince) + ' days';

    const expectedLifespan = 77;
    const endDate = new Date(birthDate.getFullYear() + expectedLifespan, birthDate.getMonth(), birthDate.getDate());
    const countdownTime = endDate - now;
    const daysToGo = Math.floor(countdownTime / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').textContent = numberWithCommas(daysToGo) + ' days';
}

function updateLifeProgress(birthDate) {
    const now = new Date();
    const expectedLifespan = 77;
    const endDate = new Date(birthDate.getFullYear() + expectedLifespan, birthDate.getMonth(), birthDate.getDate());
    const totalLifeSpan = endDate - birthDate;
    const livedLifeSpan = now - birthDate;
    const lifeProgress = Math.min(Math.max((livedLifeSpan / totalLifeSpan) * 100, 0), 100);

    const progressBar = document.getElementById('lifeProgressBar');
    progressBar.style.width = lifeProgress + '%';
    document.getElementById('lifeProgressPercentage').textContent = lifeProgress.toFixed(2) + '% of your life completed';
}

function displayAge(birthDate) {
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();
    const m = now.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birthDate.getDate())) {
        age--;
    }
    document.getElementById('age').textContent = `${age} years old`;
}

function displayMilestones(birthDate) {
    const now = new Date();
    const milestones = {
        '16th Birthday (Driving Age)': new Date(birthDate.getFullYear() + 16, birthDate.getMonth(), birthDate.getDate()),
        '18th Birthday (Voting Age)': new Date(birthDate.getFullYear() + 18, birthDate.getMonth(), birthDate.getDate()),
        '21st Birthday (Drinking Age)': new Date(birthDate.getFullYear() + 21, birthDate.getMonth(), birthDate.getDate()),
        'Retirement Age (67 years)': new Date(birthDate.getFullYear() + 67, birthDate.getMonth(), birthDate.getDate())
    };

    let milestoneListHtml = '';
    for (let milestone in milestones) {
        const date = milestones[milestone];
        const isPast = now > date;
        milestoneListHtml += `<strong>${milestone}:</strong> ${date.toLocaleDateString()}${isPast ? ' (Passed)' : ''}<br>`;
    }

    document.getElementById('milestoneList').innerHTML = milestoneListHtml;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
