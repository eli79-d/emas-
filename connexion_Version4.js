document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const login = document.getElementById('login').value.trim();
  const password = document.getElementById('password').value;
  const errorDiv = document.getElementById('form-error');
  const successDiv = document.getElementById('success-message');
  errorDiv.textContent = "";
  successDiv.style.display = 'none';
  if (!login) {
    errorDiv.textContent = "Veuillez entrer votre identifiant ou numéro.";
    return false;
  }
  if (!password) {
    errorDiv.textContent = "Veuillez entrer votre mot de passe.";
    return false;
  }
  if (login === "eli79-d" && password === "monmotdepasse") {
    errorDiv.textContent = "";
    successDiv.style.display = 'block';
    setTimeout(() => window.location.href = "index.html", 1200);
  } else {
    errorDiv.textContent = "Identifiant ou mot de passe incorrect.";
    return false;
  }
});