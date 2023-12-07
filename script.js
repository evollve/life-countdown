function calculate() {
    let birthdateValue = document.getElementById('birthdateInput').value;
    if (!birthdateValue) {
        alert('Please enter a valid birthdate.');
        return;
    }
    birthDate = new Date(birthdateValue);
    updateTimer();
    updateLifeProgress();
    displayAge(birthDate);
    displayMilestones(birthDate);
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

let birthDate = null;

function calculate() {
    let birthdateValue = document.getElementById('birthdateInput').value;
    if (!birthdateValue) {
        alert('Please enter a valid birthdate.');
        return;
    }
    birthDate = new Date(birthdateValue);
    updateTimer();
    updateLifeProgress();
    displayAge(birthDate);
    displayMilestones(birthDate);
}

function updateTimer() {
    if (!birthDate) return;

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

// function updateLifeProgress() {
//     if (!birthDate) return;

//     const now = new Date();
//     const expectedLifespan = 77;
//     const endDate = new Date(birthDate.getFullYear() + expectedLifespan, birthDate.getMonth(), birthDate.getDate());
//     const totalLifeSpan = endDate - birthDate;
//     const livedLifeSpan = now - birthDate;
//     const lifeProgress = Math.min(Math.max((livedLifeSpan / totalLifeSpan) * 100, 0), 100);

//     const progressBar = document.getElementById('lifeProgressBar');
//     progressBar.style.width = lifeProgress + '%';
//     document.getElementById('lifeProgressPercentage').textContent = lifeProgress.toFixed(2) + '% of your life completed';

//     const svgWidth = document.getElementById('lifespanTimeline').clientWidth;
//     const progressPosition = (svgWidth * lifeProgress) / 100;

//     // Make the emoji visible and position it along the timeline
//     const icon = document.getElementById('lifeProgressIcon');
//     icon.style.display = 'block';
//     icon.setAttribute('x', progressPosition);
//     const age = now.getFullYear() - birthDate.getFullYear();
//     const currentAgeText = document.getElementById('currentAgeText');
//     currentAgeText.textContent = `${age} years old`;
//     currentAgeText.setAttribute('x', progressPosition);
// }

function displayAge(birthdate) {
    const now = new Date();
    let age = now.getFullYear() - birthdate.getFullYear();
    const m = now.getMonth() - birthdate.getMonth();
    if (m < 0 || (m === 0 && now.getDate() < birthdate.getDate())) {
        age--;
    }
    document.getElementById('age').textContent = `${age} years old`;
}

// function displayMilestones(birthdate) {
//     const now = new Date();
//     const milestones = {
//         '16th Birthday (Driving Age)': new Date(birthdate.getFullYear() + 16, birthdate.getMonth(), birthdate.getDate()),
//         '18th Birthday (Voting Age)': new Date(birthdate.getFullYear() + 18, birthdate.getMonth(), birthdate.getDate()),
//         '21st Birthday (Drinking Age)': new Date(birthdate.getFullYear() + 21, birthdate.getMonth(), birthdate.getDate()),
//         'Retirement Age (67 years)': new Date(birthdate.getFullYear() + 67, birthdate.getMonth(), birthdate.getDate())
//     };

//     let milestoneListHtml = '';
//     for (let milestone in milestones) {
//         const date = new Date(milestones[milestone]);
//         const isPast = now > date;
//         milestoneListHtml += `<strong>${milestone}:</strong> ${date.toLocaleDateString()}${isPast ? ' (Passed)' : ''}<br>`;
//     }

//     document.getElementById('milestoneList').innerHTML = milestoneListHtml;
// }
