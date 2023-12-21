
//get the message parameter from the url
const urlParams = new URLSearchParams(window.location.search);
const message = urlParams.get('message');
const status = urlParams.get('status');
//get the card,statusicon,and status message elements
const card = document.querySelector('.card');
const statusIcon = document.getElementById('statusIcon');
const statusMessage = document.getElementById('statusMessage');
const btn = document.getElementById('btn');
const resetFormContainer = document.getElementById('resetFormContainer');

//display appropriate content and set background color based on the message parameter
if (status === "success") {
    statusIcon.innerHTML = "✔";
    statusMessage.textContent = message;
    card.classList.add("success");
    statusIcon.classList.add("success");
    statusMessage.classList.add("success");
    btn.textContent = "Login";
    btn.classList.add("showBtn");
    resetFormContainer.style.display = 'block';
} else if (status === "error") {
    statusIcon.innerHTML = "❌";
    statusMessage.textContent = message;
    card.classList.add("error");
    statusIcon.classList.add("error");
    statusMessage.classList.add("error");
    btn.classList.add("hideBtn");
    resetFormContainer.style.display = 'none';
} else {
    statusIcon.innerHTML = "❓";
    statusMessage.textContent = message;
    card.classList.add("error");
    statusIcon.classList.add("error");
    statusMessage.classList.add("error");
    btn.classList.add("error");
    resetFormContainer.style.display = 'none';
}

// document.getElementById('resetForm').addEventListener('submit', function (event) {
//     event.preventDefault();

//     var newPassword = document.getElementById('newPassword').value;
//     var confirmPassword = document.getElementById('confirmPassword').value;

//     if (newPassword === confirmPassword) {
//         // Passwords match, it's a valid reset
//         alert('Password successfully reset. Redirecting to login page.');
//         // Redirect to login page
//         window.location.href = 'http://localhost:8800/login';
//     } else {
//         // Passwords don't match
//         alert('Passwords do not match. Please try again.');
//     }
// });

document.addEventListener('DOMContentLoaded', function () {
    // Rest of your existing code

    document.getElementById('resetPasswordBtn').addEventListener('click', function () {
        var newPassword = document.getElementById('newPassword').value;
        var confirmPassword = document.getElementById('confirmPassword').value;

        if (newPassword === confirmPassword) {
            // Passwords match, it's a valid reset
            alert('Password successfully reset. Redirecting to login page.');
            // Redirect to login page
            window.location.href = 'http://localhost:8800/login';
        } else {
            // Passwords don't match
            alert('Passwords do not match. Please try again.');
        }
    });
});
