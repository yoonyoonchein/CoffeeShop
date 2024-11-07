
function openPopup(eventName) {
    document.getElementById("popupForm").style.display = "block";
    document.getElementById("event").value = eventName; // Pre-select event name
}

function closePopup() {
    document.getElementById("popupForm").style.display = "none";
}
