const loginFormHandler = async (event) => {
  event.preventDefault();
  // Collect values from the login form
  const email = document.querySelector('#email').value.trim();
  const password = document.querySelector('#password').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the homepage but with a logout button instead of login
      document.location.replace('/');
    } else {
      alert('Something went wrong.  Please try again or contact an administrator');
    }
  }
};

document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

