$(document).ready(function() {
    setInterval(function() {
        document.getElementById('time').textContent = new Date();
    }, 100);
});