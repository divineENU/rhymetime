function enterSite() {
    // Show the modal with animation
    const modal = document.getElementById('nameModal');
    modal.style.display = 'block';
    // Trigger the animation by adding the show class after a small delay
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function submitName() {
    const userNameInput = document.getElementById('userNameInput');
    const userName = userNameInput.value.trim();
    
    if (userName) {
        // Save the name in localStorage for use across the site
        localStorage.setItem("userName", userName);
        
        // Close the modal with animation
        closeModal();
        
        // Show welcome message and redirect
        alert(`Welcome, ${userName}!`);
        window.location.href = "home.html";
    } else {
        // Add shake animation to input
        userNameInput.classList.add('shake');
        setTimeout(() => {
            userNameInput.classList.remove('shake');
        }, 300);
        alert("Please enter your name to proceed.");
    }
}

function closeModal() {
    const modal = document.getElementById('nameModal');
    modal.classList.remove('show');
    // Wait for the animation to complete before hiding the modal
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('nameModal');
    if (event.target === modal) {
        closeModal();
    }
}

// Handle Enter key press in the input field
document.getElementById('userNameInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        submitName();
    }
});