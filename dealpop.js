document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("dealPopup").style.display = "block"; // Show popup when page loads
});

function closeDeal() {
    document.getElementById("dealPopup").style.display = "none"; // Hide popup when close button is clicked
}

function startOrder() {
    window.location.href = "selection.html"; // Link to the order page
}

function startSubscribe() {
    window.location.href = "special.html"; // Link to the subscription page
}
