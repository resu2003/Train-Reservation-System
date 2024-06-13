function updateDateTime() {
    const now = new Date();
    const dateFormatted = now.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }).split('/').join('-');
    const timeFormatted = now.toLocaleTimeString('en-IN', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: false
    });
    const dateTimeString = `${dateFormatted} | ${timeFormatted}`;
    document.getElementById('datetime').textContent = dateTimeString;
}

updateDateTime();
setInterval(updateDateTime, 0);