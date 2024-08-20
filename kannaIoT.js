function controlAC(action) {
    if (action === 'on') {
        alert('AC Turned On');
    } else if (action === 'off') {
        alert('AC Turned Off');
    }
}

// Simulating sensor data updates
function updateSensorData() {
    document.getElementById('dust-level').innerText = '25%';
    document.getElementById('humidity-level').innerText = '50%';
    document.getElementById('temperature-level').innerText = '24°C';
}