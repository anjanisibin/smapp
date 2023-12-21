
document.getElementById('resetPasswordForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Extract user ID and token from the URL or another source
  const userId = 'exampleUserId';
  const token = 'exampleToken';

  // Add logic to handle form submission and send a request to your server
  const newPassword = document.getElementById('password').value;

  fetch('/api/reset-password', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: userId,
      token: token,
      password: newPassword,
    }),
  })
  .then(response => response.json())
  .then(data => {
    // Check if the password reset was successful
    if (data.success) {
      // Redirect to the login page
      window.location.href = 'http://localhost:3000/login'; // Adjust the path accordingly
    } else {
      // Handle errors, show a message, or take appropriate action
      console.error(data.message);
    }
  })
  .catch(error => {
    // Handle fetch or other errors
    console.error(error);
  });
});
