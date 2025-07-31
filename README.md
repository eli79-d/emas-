# emas-
Plateforme de gestion et de parrainage Mobile Money.
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Inscription</title>
  <link rel="stylesheet" href="inscription.css">
</head>
<body>
  <div class="container">
    <h2>Inscription</h2>
    <form>
      <label for="country-code">Numéro de téléphone :</label>
      <div class="phone-group">
        <select id="country-code" name="country-code" required>
          <option value="+225">+225 (Côte d’Ivoire)</option>
          <option value="+229">+229 (Bénin)</option>
          <option value="+226">+226 (Burkina Faso)</option>
          <option value="+245">+245 (Guinée-Bissau)</option>
          <option value="+224">+224 (Guinée)</option>
          <option value="+223">+223 (Mali)</option>
          <option value="+227">+227 (Niger)</option>
          <option value="+234">+234 (Nigéria)</option>
          <option value="+221">+221 (Sénégal)</option>
          <option value="+228">+228 (Togo)</option>
        </select>
        <input type="text" id="phone" name="phone" placeholder="Numéro" pattern="[0-9]{8,10}" required>
      </div>

      <label for="password">Mot de passe :</label>
      <input type="password" id="password" name="password" required>

      <label for="confirm-password">Confirmation du mot de passe :</label>
      <input type="password" id="confirm-password" name="confirm-password" required>

      <label for="pseudo">Pseudo :</label>
      <input type="text" id="pseudo" name="pseudo" required>

      <label for="invite-code">Code d’invitation :</label>
      <input type="text" id="invite-code" name="invite-code">

      <label for="captcha">Code captcha <span class="captcha-code">ab442</span> :</label>
      <input type="text" id="captcha" name="captcha" placeholder="Entrez le code affiché" required>

      <button type="submit">S’inscrire maintenant</button>
    </form>
  </div>
</body>
</html>
body {
  font-family: Arial, sans-serif;
  background: #f5f8ff;
}

.container {
  max-width: 400px;
  margin: 40px auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.10);
  padding: 2em;
}

h2 {
  text-align: center;
  color: #2e4a79;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

label {
  font-weight: bold;
  margin-bottom: 0.2em;
}

input[type="text"],
input[type="password"],
select {
  padding: 0.6em;
  border-radius: 4px;
  border: 1px solid #bfcbe1;
  font-size: 1em;
  background: #f9fbfe;
}

.phone-group {
  display: flex;
  gap: 0.5em;
}

.captcha-code {
  background: #e3e3e3;
  font-family: monospace;
  padding: 0.1em 0.5em;
  border-radius: 3px;
  margin-left: 0.4em;
  color: #2e4a79;
}

button[type="submit"] {
  margin-top: 1em;
  padding: 0.8em;
  background: #2e4a79;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.1em;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.2s;
}

button[type="submit"]:hover {
  background: #4362a6;
}<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Inscription – emas</title>
  <link rel="stylesheet" href="inscription.css">
</head>
<body>
  <div class="container">
    <h1 style="text-align:center; color:#1976d2; font-size:2em; margin-bottom:0.5em;">emas</h1>
    <h2>Inscription</h2>
    <form id="registerForm">
      <label for="country-code">Numéro de téléphone :</label>
      <div class="phone-group">
        <select id="country-code" name="country-code" required>
          <option value="+225">+225 (Côte d’Ivoire)</option>
          <option value="+229">+229 (Bénin)</option>
          <option value="+226">+226 (Burkina Faso)</option>
          <option value="+245">+245 (Guinée-Bissau)</option>
          <option value="+224">+224 (Guinée)</option>
          <option value="+223">+223 (Mali)</option>
          <option value="+227">+227 (Niger)</option>
          <option value="+234">+234 (Nigéria)</option>
          <option value="+221">+221 (Sénégal)</option>
          <option value="+228">+228 (Togo)</option>
        </select>
        <input type="text" id="phone" name="phone" placeholder="Numéro" pattern="[0-9]{8,10}" required>
      </div>

      <label for="password">Mot de passe :</label>
      <input type="password" id="password" name="password" required>

      <label for="confirm-password">Confirmation du mot de passe :</label>
      <input type="password" id="confirm-password" name="confirm-password" required>

      <label for="pseudo">Pseudo :</label>
      <input type="text" id="pseudo" name="pseudo" required>

      <label for="invite-code">Code d’invitation :</label>
      <input type="text" id="invite-code" name="invite-code">

      <label for="captcha">Code captcha <span class="captcha-code">ab442</span> :</label>
      <input type="text" id="captcha" name="captcha" placeholder="Entrez le code affiché" required>

      <div id="form-error" class="form-error"></div>
      <button type="submit">S’inscrire maintenant</button>
    </form>
  </div>
  <script src="inscription.js"></script>
</body>
</html>document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Empêche l’envoi du formulaire par défaut

  const password = document.getElementById('password').value;
  const confirm = document.getElementById('confirm-password').value;
  const captcha = document.getElementById('captcha').value.trim();
  const errorDiv = document.getElementById('form-error');
  errorDiv.textContent = "";

  if (password !== confirm) {
    errorDiv.textContent = "Les mots de passe ne correspondent pas.";
    return false;
  }
  if (captcha.toLowerCase() !== "ab442") {
    errorDiv.textContent = "Le code captcha est incorrect.";
    return false;
  }

  // Si tout est correct, affiche le message de bienvenue
  const container = document.querySelector('.container');
  container.innerHTML = `
    <h1 style="color:#1976d2; text-align:center;">emas</h1>
    <h2 style="color:#1976d2; text-align:center;">Inscription réussie !</h2>
    <p style="font-size:1.2em; text-align:center; color:#144e88; margin-top:2em;">
      Bienvenu sur <strong>emas invest</strong>
    </p>
  `;
});<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Connexion – emas</title>
  <link rel="stylesheet" href="connexion.css">
</head>
<body>
  <div class="container">
    <h1 style="text-align:center; color:#1976d2; font-size:2em; margin-bottom:0.5em;">emas</h1>
    <h2>Connexion</h2>
    <form id="loginForm">
      <label for="country-code">Numéro de téléphone :</label>
      <div class="phone-group">
        <select id="country-code" name="country-code" required>
          <option value="+225">+225 (Côte d’Ivoire)</option>
          <option value="+229">+229 (Bénin)</option>
          <option value="+226">+226 (Burkina Faso)</option>
          <option value="+245">+245 (Guinée-Bissau)</option>
          <option value="+224">+224 (Guinée)</option>
          <option value="+223">+223 (Mali)</option>
          <option value="+227">+227 (Niger)</option>
          <option value="+234">+234 (Nigéria)</option>
          <option value="+221">+221 (Sénégal)</option>
          <option value="+228">+228 (Togo)</option>
        </select>
        <input type="text" id="phone" name="phone" placeholder="Numéro" pattern="[0-9]{8,10}" required>
      </div>

      <label for="password">Mot de passe :</label>
      <input type="password" id="password" name="password" required>

      <div id="form-error" class="form-error"></div>
      <button type="submit">Se connecter maintenant</button>
    </form>
    <p style="text-align:center; margin-top:2em;">
      Pas encore de compte ? <a href="inscription.html" style="color:#1976d2;">Inscrivez-vous</a>
    </p>
  </div>
  <script src="connexion.js"></script>
</body>
</html>body {
  font-family: Arial, sans-serif;
  background: #f4f8fd;
}

.container {
  max-width: 400px;
  margin: 40px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(18, 65, 145, 0.08);
  padding: 2em;
  border: 1.5px solid #1976d2;
}

h2 {
  text-align: center;
  color: #1976d2;
  margin-bottom: 1em;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1em;
}

label {
  font-weight: bold;
  margin-bottom: 0.2em;
  color: #144e88;
}

input[type="text"],
input[type="password"],
select {
  padding: 0.6em;
  border-radius: 4px;
  border: 1.5px solid #b2d4fa;
  font-size: 1em;
  background: #f7fbff;
  transition: border 0.2s;
}

input[type="text"]:focus,
input[type="password"]:focus,
select:focus {
  border: 1.5px solid #1976d2;
  outline: none;
}

.phone-group {
  display: flex;
  gap: 0.5em;
}

.form-error {
  color: #d22;
  font-size: 0.98em;
  margin-top: -0.8em;
  margin-bottom: 0.5em;
  min-height: 1.2em;
}

button[type="submit"] {
  margin-top: 1em;
  padding: 0.8em;
  background: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.1em;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.05em;
  transition: background 0.2s;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.10);
}

button[type="submit"]:hover {
  background: #1565c0;
}

@media (max-width: 500px) {
  .container {
    padding: 1em;
  }
  h2 {
    font-size: 1.2em;
  }
}document.getElementById('loginForm').addEventListener('submit', function(e) {
  const phone = document.getElementById('phone').value.trim();
  const password = document.getElementById('password').value;
  const errorDiv = document.getElementById('form-error');
  errorDiv.textContent = "";

  if (!phone || !password) {
    errorDiv.textContent = "Veuillez remplir tous les champs.";
    e.preventDefault();
    return false;
  }

  // Ici, ajoute ton code pour vérifier les identifiants auprès du serveur (AJAX, API, etc.)
  // Pour la démo, on affiche simplement une alerte.
  // e.preventDefault(); // à enlever si tu fais appel à un vrai backend
  // alert("Connexion réussie !");
});<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Accueil – emas</title>
  <link rel="stylesheet" href="accueil.css">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body>
  <div class="container">
    <header>
      <h1 style="color:#1976d2;">emas</h1>
      <div class="user-info">
        <span id="user-name">Nom Utilisateur</span>
        <span id="user-phone">+22512345678</span>
      </div>
      <div class="solde">
        Solde : <span id="solde">10 000 FCFA</span>
      </div>
    </header>

    <section class="profile-curve">
      <h2>Courbe de profil journalière</h2>
      <canvas id="profilChart" height="150"></canvas>
    </section>

    <section class="actions">
      <button id="btn-retrait">Retrait</button>
      <button id="btn-compte">Compte</button>
      <button id="btn-bonus">Bonus</button>
      <button id="btn-historique">Historique</button>
      <button id="btn-recharge">Recharge</button>
      <button id="btn-communaute">Communauté</button>
    </section>

    <footer>
      <button id="support-btn" class="support">Support</button>
    </footer>
  </div>

  <!-- Modales (exemple pour Retrait et Support) -->
  <div id="modal-retrait" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal('modal-retrait')">&times;</span>
      <h3>Retrait</h3>
      <p>Ici, ajoute le formulaire de retrait…</p>
    </div>
  </div>
  <div id="modal-support" class="modal">
    <div class="modal-content">
      <span class="close" onclick="closeModal('modal-support')">&times;</span>
      <h3>Support</h3>
      <p>Contacte-nous : <a href="mailto:support@emas.com">support@emas.com</a></p>
    </div>
  </div>

  <script src="accueil.js"></script>
</body>
</html>body {
  font-family: Arial, sans-serif;
  background: #f4f8fd;
  margin: 0;
  min-height: 100vh;
}
.container {
  max-width: 480px;
  margin: 30px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(25, 118, 210, 0.08);
  padding: 1.5em;
  border: 1.5px solid #1976d2;
  display: flex;
  flex-direction: column;
  gap: 2em;
}
header {
  text-align: center;
}
.user-info {
  margin: 1em 0 0.5em 0;
  color: #144e88;
  font-size: 1.1em;
  display: flex;
  justify-content: space-between;
  gap: 2em;
}
.solde {
  color: #1976d2;
  font-size: 1.2em;
  margin-bottom: 1em;
}
.profile-curve {
  background: #f7fbff;
  border-radius: 8px;
  padding: 1em;
  border: 1px solid #b2d4fa;
  margin-bottom: 1em;
}
.profile-curve h2 {
  color: #1976d2;
  font-size: 1.02em;
  margin-bottom: 0.5em;
  text-align:center;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7em;
  justify-content: center;
}
.actions button {
  flex: 1 1 40%;
  padding: 0.7em 0.5em;
  border: none;
  border-radius: 5px;
  background: #1976d2;
  color: #fff;
  font-weight: bold;
  font-size: 1.05em;
  cursor: pointer;
  margin-bottom: 0.2em;
  transition: background 0.2s;
  min-width: 120px;
}
.actions button:hover {
  background: #1565c0;
}
footer {
  text-align: center;
  margin-top: 2em;
}
.support {
  background: #fff;
  color: #1976d2;
  border: 1.5px solid #1976d2;
  padding: 0.6em 1.5em;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s, color 0.2s;
}
.support:hover {
  background: #1976d2;
  color: #fff;
}

/* Modale */
.modal {
  display: none;
  position: fixed;
  z-index: 10;
  left: 0; top: 0; width: 100%; height: 100%;
  overflow: auto;
  background-color: rgba(25, 118, 210, 0.18);
}
.modal-content {
  background: #fff;
  margin: 10% auto;
  padding: 2em;
  border-radius: 10px;
  max-width: 360px;
  box-shadow: 0 2px 12px #1976d280;
  position: relative;
}
.close {
  position: absolute;
  right: 1em; top: 1em;
  font-size: 1.3em;
  color: #1976d2;
  cursor: pointer;
}
@media (max-width: 600px) {
  .container { padding: 0.5em; }
}// Remplace ces valeurs par les infos utilisateur réelles depuis ton backend ou localStorage !
document.getElementById('user-name').textContent = "Jean Koffi";
document.getElementById('user-phone').textContent = "+2250700123456";
document.getElementById('solde').textContent = "15 000 FCFA";

// Courbe journalière avec Chart.js (exemple)
const ctx = document.getElementById('profilChart').getContext('2d');
const profilChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"],
    datasets: [{
      label: "Profil",
      data: [12, 19, 14, 20, 18, 21, 17], // Remplace par les vraies données
      backgroundColor: "rgba(25, 118, 210, 0.10)",
      borderColor: "#1976d2",
      borderWidth: 2,
      pointBackgroundColor: "#1976d2",
      tension: 0.3
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true }
    }
  }
});

// Gestion des modales (Retrait, Support)
function openModal(id) {
  document.getElementById(id).style.display = 'block';
}
function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}
document.getElementById('btn-retrait').onclick = () => openModal('modal-retrait');
document.getElementById('support-btn').onclick = () => openModal('modal-support');

// Tu peux compléter les autres boutons avec des fonctions similaires pour ouvrir d’autres onglets/pages.
.actions button {
  flex: 1 1 40%;
  padding: 0.7em 0.5em;
  border: none;
  border-radius: 5px;
  background: linear-gradient(90deg, #1976d2 60%, #2196f3 100%);
  color: #fff;
  font-weight: bold;
  font-size: 1.05em;
  cursor: pointer;
  margin-bottom: 0.2em;
  min-width: 120px;
  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.09);
  transition: 
    background 0.22s cubic-bezier(.4,0,.2,1),
    box-shadow 0.18s cubic-bezier(.4,0,.2,1),
    transform 0.18s cubic-bezier(.4,0,.2,1)
  ;
  position: relative;
  overflow: hidden;
}

.actions button:hover, .actions button:focus {
  background: linear-gradient(90deg, #2196f3 40%, #1976d2 100%);
  box-shadow: 0 6px 24px rgba(25, 118, 210, 0.18), 0 2px 8px rgba(33, 150, 243, 0.08);
  transform: translateY(-2px) scale(1.04);
  outline: none;
}

.actions button:active {
  transform: scale(0.97);
  box-shadow: 0 1px 3px rgba(25, 118, 210, 0.13);
}

/* Ripple effect */
.actions button .ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 0.6s linear;
  background-color: rgba(255,255,255,0.5);
  pointer-events: none;
}

@keyframes ripple {
  to {
    transform: scale(2.4);
    opacity: 0;
  }
}// ... (ton code existant)
// Ajout de l'effet ripple sur tous les boutons de .actions
document.querySelectorAll('.actions button').forEach(btn => {
  btn.addEventListener('click', function(e) {
    // Supprimer une éventuelle précédente ripple
    const oldRipple = btn.querySelector('.ripple');
    if (oldRipple) oldRipple.remove();

    const circle = document.createElement('span');
    circle.classList.add('ripple');
    const rect = btn.getBoundingClientRect();
    circle.style.width = circle.style.height = Math.max(rect.width, rect.height) + 'px';
    circle.style.left = (e.clientX - rect.left - rect.width/2) + 'px';
    circle.style.top = (e.clientY - rect.top - rect.height/2) + 'px';
    btn.appendChild(circle);

    // Supprimer le span après l'animation
    circle.addEventListener('animationend', () => circle.remove());
  });
});<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Portefeuille – emas</title>
  <link rel="stylesheet" href="portefeuille.css">
</head>
<body>
  <div class="container">
    <h1 style="color:#1976d2; text-align:center;">emas</h1>
    <h2 style="text-align:center;">Créer mon portefeuille</h2>
    <div class="warnings">
      <div class="warning-title">⚠️ AVERTISSEMENT</div>
      <ul>
        <li>Vous pouvez uniquement ajouter un portefeuille de transfert mobile money pour le retrait.</li>
        <li>Veuillez-vous assurer que le numéro du portefeuille de transfert mobile money est correct et fonctionnel.</li>
      </ul>
    </div>
    <form id="walletForm">
      <label for="provider">Portefeuille :</label>
      <select id="provider" name="provider" required>
        <option value="">-- Choisissez un moyen de paiement --</option>
        <option value="MTN">MTN</option>
        <option value="ORANGE">Orange</option>
        <option value="TMONEY">TMoney</option>
        <option value="WAVE">Wave</option>
        <option value="FLOOZ">Flooz</option>
        <option value="TEST">Test</option>
      </select>

      <label for="pseudo">Pseudo :</label>
      <input type="text" id="pseudo" name="pseudo" required>

      <label for="wallet-phone">Numéro de téléphone :</label>
      <input type="text" id="wallet-phone" name="wallet-phone" pattern="[0-9]{8,15}" required placeholder="ex: 0700123456">

      <label for="transaction-password">Mot de transaction :</label>
      <input type="password" id="transaction-password" name="transaction-password" required>

      <div id="form-error" class="form-error"></div>
      <button type="submit">Créer un portefeuille</button>
    </form>
    <div id="success-message" class="success-message" style="display:none;">
      ✅ Portefeuille enregistré avec succès !
    </div>
  </div>
  <script src="portefeuille.js"></script>
</body>
</html>body {
  font-family: Arial, sans-serif;
  background: #f4f8fd;
  margin: 0;
}
.container {
  max-width: 400px;
  margin: 40px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(25, 118, 210, 0.08);
  padding: 2em;
  border: 1.5px solid #1976d2;
}
h2 {
  margin-bottom: 1em;
  color: #1976d2;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 1em;
}
label {
  font-weight: bold;
  color: #144e88;
}
input[type="text"], input[type="password"], select {
  padding: 0.6em;
  border-radius: 4px;
  border: 1.5px solid #b2d4fa;
  background: #f7fbff;
  font-size: 1em;
  transition: border 0.2s;
}
input[type="text"]:focus, input[type="password"]:focus, select:focus {
  border: 1.5px solid #1976d2;
  outline: none;
}
button[type="submit"] {
  margin-top: 1em;
  padding: 0.8em;
  background: linear-gradient(90deg, #1976d2 60%, #2196f3 100%);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.1em;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.10);
  transition: background 0.18s, transform 0.14s;
}
button[type="submit"]:hover {
  background: linear-gradient(90deg, #2196f3 40%, #1976d2 100%);
  transform: scale(1.04);
}
.form-error {
  color: #d22;
  margin-top: -0.7em;
  min-height: 1.2em;
  text-align: center;
}
.success-message {
  color: #1976d2;
  font-weight: bold;
  margin-top: 2em;
  text-align: center;
  background: #e3eefd;
  border-radius: 4px;
  padding: 1em;
}
.warnings {
  background: #fffbe6;
  border: 1px solid #ffe082;
  border-radius: 6px;
  padding: 1em;
  margin-bottom: 1.5em;
}
.warning-title {
  font-weight: bold;
  color: #c09800;
  margin-bottom: 0.5em;
}
.warnings ul {
  margin: 0;
  padding-left: 1.2em;
  color: #c09800;
  font-size: 0.96em;
}
@media (max-width: 500px) {
  .container { padding: 1em; }
  h2 { font-size: 1.1em; }
}document.getElementById('walletForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const provider = document.getElementById('provider').value;
  const pseudo = document.getElementById('pseudo').value.trim();
  const phone = document.getElementById('wallet-phone').value.trim();
  const txPass = document.getElementById('transaction-password').value;
  const errorDiv = document.getElementById('form-error');
  const successDiv = document.getElementById('success-message');
  errorDiv.textContent = "";
  successDiv.style.display = 'none';

  if (!provider) {
    errorDiv.textContent = "Veuillez choisir un moyen de paiement.";
    return false;
  }
  if (!pseudo) {
    errorDiv.textContent = "Le pseudo est obligatoire.";
    return false;
  }
  if (!/^[0-9]{8,15}$/.test(phone)) {
    errorDiv.textContent = "Numéro de téléphone invalide.";
    return false;
  }
  if (!txPass) {
    errorDiv.textContent = "Mot de transaction requis.";
    return false;
  }

  // Ici, tu peux enregistrer le portefeuille (API, localStorage, etc.)
  // Afficher un message de succès
  errorDiv.textContent = "";
  successDiv.style.display = 'block';
  this.reset();
});<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Retrait – emas</title>
  <link rel="stylesheet" href="retrait.css">
</head>
<body>
  <div class="container">
    <h1 style="color:#1976d2; text-align:center;">emas</h1>
    <h2 style="text-align:center;">Retrait Mobile Money</h2>
    <div class="reminders">
      <div class="reminder-title">RAPPEL</div>
      <ul>
        <li>Retrait quotidien 24h/24 et 7j/7</li>
        <li>Montant de retrait entre <strong>1000 FCFA</strong> et <strong>10 000 000 FCFA</strong></li>
        <li>Pour faciliter le règlement financier, vous ne pouvez demander un retrait qu’une seule fois par jour</li>
        <li>Taux de retrait : <strong>5%</strong></li>
      </ul>
    </div>
    <form id="withdrawForm">
      <label for="withdraw-amount">Montant à retirer :</label>
      <input type="number" id="withdraw-amount" name="withdraw-amount" min="1000" max="10000000" required placeholder="ex: 10000">
      <div class="rate-info" id="rate-info">
        Montant net après retrait (5 % de frais) : <span id="net-amount">0 FCFA</span>
      </div>
      <label for="tx-password">Mot de passe de transaction :</label>
      <input type="password" id="tx-password" name="tx-password" required>
      <div id="form-error" class="form-error"></div>
      <button type="submit">Demander un retrait</button>
    </form>
    <div id="success-message" class="success-message" style="display:none;">
      ✅ Retrait demandé ! Le montant sera transféré sur votre compte Mobile Money.
    </div>
  </div>
  <script src="retrait.js"></script>
</body>
</html>body {
  font-family: Arial, sans-serif;
  background: #f4f8fd;
}
.container {
  max-width: 400px;
  margin: 40px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(25, 118, 210, 0.08);
  padding: 2em;
  border: 1.5px solid #1976d2;
}
h2 {
  margin-bottom: 1em;
  color: #1976d2;
}
.reminders {
  background: #e3eefd;
  border: 1px solid #90caf9;
  border-radius: 6px;
  padding: 1em;
  margin-bottom: 1.5em;
}
.reminder-title {
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 0.5em;
}
.reminders ul {
  margin: 0;
  padding-left: 1.2em;
  color: #144e88;
  font-size: 0.98em;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 1em;
}
label {
  font-weight: bold;
  color: #144e88;
}
input[type="number"], input[type="password"] {
  padding: 0.6em;
  border-radius: 4px;
  border: 1.5px solid #b2d4fa;
  background: #f7fbff;
  font-size: 1em;
  transition: border 0.2s;
}
input[type="number"]:focus, input[type="password"]:focus {
  border: 1.5px solid #1976d2;
  outline: none;
}
button[type="submit"] {
  margin-top: 1em;
  padding: 0.8em;
  background: linear-gradient(90deg, #1976d2 60%, #2196f3 100%);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.1em;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.10);
  transition: background 0.18s, transform 0.14s;
}
button[type="submit"]:hover {
  background: linear-gradient(90deg, #2196f3 40%, #1976d2 100%);
  transform: scale(1.04);
}
.form-error {
  color: #d22;
  margin-top: -0.7em;
  min-height: 1.2em;
  text-align: center;
}
.success-message {
  color: #1976d2;
  font-weight: bold;
  margin-top: 2em;
  text-align: center;
  background: #e3eefd;
  border-radius: 4px;
  padding: 1em;
}
.rate-info {
  color: #1976d2;
  font-size: 0.98em;
  margin-bottom: 0.5em;
}
#net-amount {
  font-weight: bold;
  color: #1565c0;
}
@media (max-width: 500px) {
  .container { paddi// Simuler le mot de passe de transaction enregistré (à remplacer par la vraie vérif côté serveur !)
const storedTxPassword = "monsecret"; // Doit être récupéré lors de la création du portefeuille

// Calcul automatique du montant net après frais
document.getElementById('withdraw-amount').addEventListener('input', function() {
  const montant = parseInt(this.value, 10) || 0;
  if (montant >= 1000 && montant <= 10000000) {
    const net = Math.floor(montant * 0.95);
    document.getElementById('net-amount').textContent = net + " FCFA";
  } else {
    document.getElementById('net-amount').textContent = "0 FCFA";
  }
});

document.getElementById('withdrawForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const montant = parseInt(document.getElementById('withdraw-amount').value, 10);
  const txPass = document.getElementById('tx-password').value;
  const errorDiv = document.getElementById('form-error');
  const successDiv = document.getElementById('success-message');
  errorDiv.textContent = "";
  successDiv.style.display = 'none';

  if (!montant || montant < 1000 || montant > 10000000) {
    errorDiv.textContent = "Le montant doit être entre 1000 et 10 000 000 FCFA.";
    return false;
  }
  if (!txPass) {
    errorDiv.textContent = "Mot de passe de transaction requis.";
    return false;
  }
  if (txPass !== storedTxPassword) {
    errorDiv.textContent = "Mot de passe de transaction incorrect.";
    return false;
  }

  // Ici, tu ajoutes la logique pour envoyer la demande de retrait à ton serveur
  // Afficher le message de succès
  errorDiv.textContent = "";
  successDiv.style.display = 'block';
  this.reset();
  document.getElementById('net-amount').textContent = "0 FCFA";
});ng: 1em; }
  h2 { font-size: 1.1em; }
}// Simuler si le portefeuille est enregistré (à remplacer par ta vraie logique !)
let portefeuilleEnregistre = false; // ← À passer à true si l'utilisateur a bien créé son portefeuille
const storedTxPassword = "monsecret"; // À récupérer depuis le portefeuille

function checkPortefeuille() {
  if (!portefeuilleEnregistre) {
    document.getElementById('withdrawForm').style.display = 'none';
    document.getElementById('form-error').textContent =
      "⚠️ Vous devez enregistrer votre portefeuille avant de pouvoir effectuer un retrait.";
  } else {
    document.getElementById('withdrawForm').style.display = '';
    document.getElementById('form-error').textContent = '';
  }
}

// Appel au chargement de la page
checkPortefeuille();

// Calcul automatique du montant net après frais
document.getElementById('withdraw-amount').addEventListener('input', function() {
  const montant = parseInt(this.value, 10) || 0;
  if (montant >= 1000 && montant <= 10000000) {
    const net = Math.floor(montant * 0.95);
    document.getElementById('net-amount').textContent = net + " FCFA";
  } else {
    document.getElementById('net-amount').textContent = "0 FCFA";
  }
});

document.getElementById('withdrawForm').addEventListener('submit', function(e) {
  e.preventDefault();
  if (!portefeuilleEnregistre) {
    document.getElementById('form-error').textContent =
      "⚠️ Vous devez enregistrer votre portefeuille avant de pouvoir effectuer un retrait.";
    return false;
  }

  const montant = parseInt(document.getElementById('withdraw-amount').value, 10);
  const txPass = document.getElementById('tx-password').value;
  const errorDiv = document.getElementById('form-error');
  const successDiv = document.getElementById('success-message');
  errorDiv.textContent = "";
  successDiv.style.display = 'none';

  if (!montant || montant < 1000 || montant > 10000000) {
    errorDiv.textContent = "Le montant doit être entre 1000 et 10 000 000 FCFA.";
    return false;
  }
  if (!txPass) {
    errorDiv.textContent = "Mot de passe de transaction requis.";
    return false;
  }
  if (txPass !== storedTxPassword) {
    errorDiv.textContent = "Mot de passe de transaction incorrect.";
    return false;
  }

  // Ici, tu ajoutes la logique pour envoyer la demande de retrait à ton serveur
  // Afficher le message de succès
  errorDiv.textContent = "";
  successDiv.style.display = 'block';
  this.reset();
  document.getElementById('net-amount').textContent = "0 FCFA";
});<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Recharge – emas</title>
  <link rel="stylesheet" href="recharge.css">
</head>
<body>
  <div class="container">
    <h1 style="color:#1976d2; text-align:center;">emas</h1>
    <h2 style="text-align:center;">Recharge Mobile Money</h2>
    <div class="solde-info">
      Solde actuel : <span id="solde">0 FCFA</span>
    </div>
    <form id="rechargeForm">
      <label for="amount">Montant à recharger :</label>
      <input type="number" id="amount" name="amount" min="3000" required placeholder="ex: 5000">

      <label for="provider">Moyen de recharge :</label>
      <select id="provider" name="provider" required>
        <option value="">-- Sélectionnez un moyen --</option>
        <option value="MTN">MTN</option>
        <option value="ORANGE">Orange</option>
        <option value="TMONEY">TMoney</option>
        <option value="WAVE">Wave</option>
        <option value="FLOOZ">Flooz</option>
        <option value="TEST">Test</option>
      </select>

      <label for="country-code">Numéro de téléphone :</label>
      <div class="phone-group">
        <select id="country-code" name="country-code" required>
          <option value="+225">+225 (Côte d’Ivoire)</option>
          <option value="+229">+229 (Bénin)</option>
          <option value="+226">+226 (Burkina Faso)</option>
          <option value="+245">+245 (Guinée-Bissau)</option>
          <option value="+224">+224 (Guinée)</option>
          <option value="+223">+223 (Mali)</option>
          <option value="+227">+227 (Niger)</option>
          <option value="+234">+234 (Nigéria)</option>
          <option value="+221">+221 (Sénégal)</option>
          <option value="+228">+228 (Togo)</option>
        </select>
        <input type="text" id="phone" name="phone" pattern="[0-9]{8,15}" required placeholder="Numéro">
      </div>

      <div id="form-error" class="form-error"></div>
      <button type="submit">Recharger maintenant</button>
    </form>
    <div id="success-message" class="success-message" style="display:none;">
      ✅ Recharge en cours ! Veuillez suivre les instructions pour finaliser le paiement Mobile Money.
    </div>
  </div>
  <script src="recharge.js"></script>
</body>
</html>body {
  font-family: Arial, sans-serif;
  background: #f4f8fd;
  margin: 0;
}
.container {
  max-width: 400px;
  margin: 40px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(25, 118, 210, 0.08);
  padding: 2em;
  border: 1.5px solid #1976d2;
}
h2 {
  margin-bottom: 1em;
  color: #1976d2;
}
.solde-info {
  color: #1976d2;
  font-size: 1.1em;
  margin-bottom: 1em;
  text-align: center;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 1em;
}
label {
  font-weight: bold;
  color: #144e88;
}
input[type="number"], input[type="text"], select {
  padding: 0.6em;
  border-radius: 4px;
  border: 1.5px solid #b2d4fa;
  background: #f7fbff;
  font-size: 1em;
  transition: border 0.2s;
}
input[type="number"]:focus, input[type="text"]:focus, select:focus {
  border: 1.5px solid #1976d2;
  outline: none;
}
.phone-group {
  display: flex;
  gap: 0.5em;
}
button[type="submit"] {
  margin-top: 1em;
  padding: 0.8em;
  background: linear-gradient(90deg, #1976d2 60%, #2196f3 100%);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.1em;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.10);
  transition: background 0.18s, transform 0.14s;
}
button[type="submit"]:hover {
  background: linear-gradient(90deg, #2196f3 40%, #1976d2 100%);
  transform: scale(1.04);
}
.form-error {
  color: #d22;
  margin-top: -0.7em;
  min-height: 1.2em;
  text-align: center;
}
.success-message {
  color: #1976d2;
  font-weight: bold;
  margin-top: 2em;
  text-align: center;
  background: #e3eefd;
  border-radius: 4px;
  padding: 1em;
}
@media (max-width: 500px) {
  .container { padding: 1em; }
  h2 { font-size: 1.1em; }
}// Simule le solde actuel (à remplacer par la vraie valeur du backend !)
const soldeActuel = 12000; // Ex: 12 000 FCFA

document.getElementById('solde').textContent = soldeActuel + " FCFA";

document.getElementById('rechargeForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const amount = parseInt(document.getElementById('amount').value, 10);
  const provider = document.getElementById('provider').value;
  const countryCode = document.getElementById('country-code').value;
  const phone = document.getElementById('phone').value.trim();
  const errorDiv = document.getElementById('form-error');
  const successDiv = document.getElementById('success-message');
  errorDiv.textContent = "";
  successDiv.style.display = 'none';

  if (!amount || amount < 3000) {
    errorDiv.textContent = "Le montant minimum de recharge est de 3000 FCFA.";
    return false;
  }
  if (!provider) {
    errorDiv.textContent = "Veuillez sélectionner un moyen de recharge.";
    return false;
  }
  if (!countryCode) {
    errorDiv.textContent = "Veuillez choisir l’indicatif téléphonique.";
    return false;
  }
  if (!/^[0-9]{8,15}$/.test(phone)) {
    errorDiv.textContent = "Numéro de téléphone invalide.";
    return false;
  }

  // Ici, tu ajoutes la logique pour lancer la procédure de paiement Mobile Money
  // Afficher le message de succès
  errorDiv.textContent = "";
  successDiv.style.display = 'block';
  this.reset();
});<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Communauté – emas</title>
  <link rel="stylesheet" href="communaute.css">
</head>
<body>
  <div class="container">
    <h1 style="color:#1976d2; text-align:center;">emas</h1>
    <h2 style="text-align:center;">Mon espace communauté</h2>

    <div class="affiliation">
      <label for="affiliation-link">Votre lien d’affiliation :</label>
      <div class="link-box">
        <input type="text" id="affiliation-link" readonly value="https://emas.com/invite/eli79-d">
        <button id="copy-link">Copier</button>
      </div>
      <div id="copied-msg" class="copied-msg"></div>
    </div>

    <div class="parrainage">
      <label>Parrainage : <span id="nb-parraines">3</span>/10 personnes</label>
      <div class="progress-bar">
        <div id="bar-fill" class="bar-fill" style="width: 30%;"></div>
      </div>
      <div class="progress-text">
        <span id="progress-msg">Encore <strong>7</strong> personnes à parrainer pour atteindre votre objectif !</span>
      </div>
    </div>
  </div>
  <script src="communaute.js"></script>
</body>
</html>body {
  font-family: Arial, sans-serif;
  background: #f4f8fd;
  margin: 0;
}
.container {
  max-width: 400px;
  margin: 40px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(25, 118, 210, 0.08);
  padding: 2em;
  border: 1.5px solid #1976d2;
}
h2 {
  margin-bottom: 1.5em;
  color: #1976d2;
}
.affiliation label {
  font-weight: bold;
  color: #144e88;
}
.link-box {
  display: flex;
  gap: 0.5em;
  margin: 0.5em 0 1em 0;
}
#affiliation-link {
  flex: 1;
  padding: 0.6em;
  border-radius: 4px;
  border: 1.5px solid #b2d4fa;
  background: #f7fbff;
  font-size: 0.97em;
}
#copy-link {
  background: linear-gradient(90deg, #1976d2 60%, #2196f3 100%);
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5em 1em;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.18s, transform 0.14s;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.10);
}
#copy-link:hover {
  background: linear-gradient(90deg, #2196f3 40%, #1976d2 100%);
  transform: scale(1.04);
}
.copied-msg {
  color: #1976d2;
  font-size: 0.98em;
  margin-top: 0.2em;
  text-align: center;
  min-height: 1.2em;
}
.parrainage {
  margin-top: 2em;
}
.parrainage label {
  font-weight: bold;
  color: #144e88;
  margin-bottom: 0.6em;
  display: block;
}
.progress-bar {
  width: 100%;
  background: #e3eefd;
  border-radius: 8px;
  height: 24px;
  margin-bottom: 0.7em;
  box-shadow: 0 1px 6px #1976d21a;
  overflow: hidden;
}
.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #1976d2 60%, #2196f3 100%);
  border-radius: 8px 0 0 8px;
  transition: width 0.5s;
}
.progress-text {
  color: #1976d2;
  font-size: 0.99em;
  text-align: center;
}
@media (max-width: 500px) {
  .container { padding: 1em; }
  h2 { font-size: 1.1em; }
}// Simule le nombre de personnes parrainées (à remplacer par la vraie donnée utilisateur !)
let nbParraines = 3; // Exemple: 3 personnes parrainées
const maxParrainage = 10;

// Barre de progression dynamique
function updateParrainage() {
  document.getElementById('nb-parraines').textContent = nbParraines;
  const pourcentage = Math.min((nbParraines / maxParrainage) * 100, 100);
  document.getElementById('bar-fill').style.width = pourcentage + "%";
  const restant = maxParrainage - nbParraines;
  let msg = "";
  if (restant > 0) {
    msg = `Encore <strong>${restant}</strong> personne${restant > 1 ? "s" : ""} à parrainer pour atteindre votre objectif !`;
  } else {
    msg = `<strong>Objectif atteint ! Félicitations 🎉</strong>`;
  }
  document.getElementById('progress-msg').innerHTML = msg;
}
updateParrainage();

// Copie du lien d’affiliation
document.getElementById('copy-link').onclick = function() {
  const input = document.getElementById('affiliation-link');
  input.select();
  document.execCommand('copy');
  const copiedMsg = document.getElementById('copied-msg');
  copiedMsg.textContent = "Lien copié !";
  setTimeout(() => copiedMsg.textContent = "", 2000);
};<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Historique – emas</title>
  <link rel="stylesheet" href="historique.css">
</head>
<body>
  <div class="container">
    <h1 style="color:#1976d2; text-align:center;">emas</h1>
    <h2 style="text-align:center;">Mon historique</h2>
    <div class="columns">
      <div class="column">
        <h3>Historique des retraits</h3>
        <table class="history-table">
          <thead>
            <tr>
              <th>Statut</th>
              <th>Montant retiré</th>
              <th>Montant reçu</th>
              <th>Taxe (5%)</th>
              <th>Date/heure</th>
            </tr>
          </thead>
          <tbody id="withdraw-history"></tbody>
        </table>
      </div>
      <div class="column">
        <h3>Historique des recharges</h3>
        <table class="history-table">
          <thead>
            <tr>
              <th>Montant rechargé</th>
              <th>Date/heure</th>
            </tr>
          </thead>
          <tbody id="recharge-history"></tbody>
        </table>
      </div>
    </div>
  </div>
  <script src="historique.js"></script>
</body>
</html>body {
  font-family: Arial, sans-serif;
  background: #f4f8fd;
  margin: 0;
}
.container {
  max-width: 900px;
  margin: 40px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(25, 118, 210, 0.08);
  padding: 2em;
  border: 1.5px solid #1976d2;
}
h2 {
  margin-bottom: 2em;
  color: #1976d2;
}
.columns {
  display: flex;
  gap: 2em;
  justify-content: center;
}
.column {
  flex: 1 1 0;
  min-width: 320px;
}
h3 {
  color: #144e88;
  margin-bottom: 1em;
  text-align: center;
}
.history-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.99em;
  background: #f7fbff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 6px #1976d21a;
}
.history-table th, .history-table td {
  padding: 0.7em;
  border-bottom: 1px solid #b2d4fa;
  text-align: center;
}
.history-table th {
  background: #e3eefd;
  color: #1976d2;
  font-weight: bold;
}
.status-success {
  color: #fff;
  background: #2ecc40;
  border-radius: 8px;
  padding: 0.25em 0.7em;
  font-weight: bold;
  font-size: 0.96em;
}
.status-failed {
  color: #fff;
  background: #e74c3c;
  border-radius: 8px;
  padding: 0.25em 0.7em;
  font-weight: bold;
  font-size: 0.96em;
}
@media (max-width: 900px) {
  .columns {
    flex-direction: column;
    gap: 1.5em;
  }
  .container {
    padding: 1em;
  }
}// Simulations pour démo, à remplacer par tes vraies données !
const retraits = [
  {
    statut: 'réussi',
    montant: 10000,
    taxe: 500,
    date: '2025-07-27 16:32',
  },
  {
    statut: 'échec',
    montant: 20000,
    taxe: 1000,
    date: '2025-07-28 14:18',
  },
  {
    statut: 'réussi',
    montant: 5000,
    taxe: 250,
    date: '2025-07-29 09:03',
  }
];

const recharges = [
  {
    montant: 5000,
    date: '2025-07-26 11:19',
  },
  {
    montant: 15000,
    date: '2025-07-28 18:54',
  },
  {
    montant: 7000,
    date: '2025-07-29 13:25',
  }
];

function formatFCFA(val) {
  return val.toLocaleString('fr-FR') + ' FCFA';
}

function fillWithdrawHistory() {
  const tbody = document.getElementById('withdraw-history');
  tbody.innerHTML = '';
  retraits.forEach(r => {
    const montantRecu = r.montant - r.taxe;
    const statusClass = r.statut === 'réussi' ? 'status-success' : 'status-failed';
    tbody.innerHTML += `
      <tr>
        <td><span class="${statusClass}">${r.statut}</span></td>
        <td>${formatFCFA(r.montant)}</td>
        <td>${formatFCFA(montantRecu)}</td>
        <td>${formatFCFA(r.taxe)}</td>
        <td>${r.date}</td>
      </tr>
    `;
  });
}

function fillRechargeHistory() {
  const tbody = document.getElementById('recharge-history');
  tbody.innerHTML = '';
  recharges.forEach(r => {
    tbody.innerHTML += `
      <tr>
        <td>${formatFCFA(r.montant)}</td>
        <td>${r.date}</td>
      </tr>
    `;
  });
}

fillWithdrawHistory();
fillRechargeHistory();<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Bonus – emas</title>
  <link rel="stylesheet" href="bonus.css">
</head>
<body>
  <div class="container">
    <h1 style="color:#1976d2; text-align:center;">emas</h1>
    <h2 style="text-align:center;">Mes bonus de parrainage</h2>
    <div class="solde-info">
      Solde actuel : <span id="solde">0 FCFA</span>
    </div>
    <div class="bonus-progress">
      <label>Parrainés : <span id="nb-parraines">23</span>/10</label>
      <div class="progress-bar">
        <div id="bar-fill" class="bar-fill" style="width: 0%;"></div>
      </div>
      <div class="progress-text" id="progress-msg"></div>
    </div>
    <div class="bonus-info">
      <div>Nombre de bonus gagnés : <span id="bonus-count">0</span></div>
      <div>Montant total des bonus : <span id="bonus-total">0 FCFA</span></div>
    </div>
  </div>
  <script src="bonus.js"></script>
</body>
</html>body {
  font-family: Arial, sans-serif;
  background: #f4f8fd;
  margin: 0;
}
.container {
  max-width: 400px;
  margin: 40px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(25, 118, 210, 0.08);
  padding: 2em;
  border: 1.5px solid #1976d2;
}
h2 {
  margin-bottom: 1em;
  color: #1976d2;
}
.solde-info {
  color: #1976d2;
  font-size: 1.08em;
  margin-bottom: 1.5em;
  text-align: center;
}
.bonus-progress label {
  font-weight: bold;
  color: #144e88;
  margin-bottom: 0.6em;
  display: block;
  text-align: center;
}
.progress-bar {
  width: 100%;
  background: #e3eefd;
  border-radius: 8px;
  height: 24px;
  margin-bottom: 0.7em;
  box-shadow: 0 1px 6px #1976d21a;
  overflow: hidden;
}
.bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #1976d2 60%, #2196f3 100%);
  border-radius: 8px 0 0 8px;
  transition: width 0.5s;
}
.progress-text {
  color: #1976d2;
  font-size: 0.99em;
  text-align: center;
  margin-bottom: 1.2em;
}
.bonus-info {
  text-align: center;
  font-size: 1.1em;
  color: #144e88;
  margin-top: 2em;
}
.bonus-info span {
  font-weight: bold;
  color: #1976d2;
}
@media (max-width: 500px) {
  .container { padding: 1em; }
  h2 { font-size: 1.1em; }
}// Simule les données utilisateur (à remplacer par ton backend)
const soldeActuel = 15000; // Exemple : solde utilisateur
const nbParraines = 23;    // Exemple : nombre de personnes parrainées
const palier = 10;         // Palier pour chaque bonus
const bonusParPalier = 1000; // Montant du bonus

// Calcul des bonus gagnés et du reste jusqu'au prochain bonus
const bonusGagnes = Math.floor(nbParraines / palier);
const bonusTotal = bonusGagnes * bonusParPalier;
const restant = palier - (nbParraines % palier);
const pourcentage = Math.min((nbParraines % palier) / palier * 100, 100);

// Mise à jour des infos
document.getElementById('solde').textContent = soldeActuel + " FCFA";
document.getElementById('nb-parraines').textContent = nbParraines;
document.getElementById('bonus-count').textContent = bonusGagnes;
document.getElementById('bonus-total').textContent = bonusTotal + " FCFA";
document.getElementById('bar-fill').style.width = pourcentage + "%";

// Texte dynamique
let msg = "";
if (bonusGagnes > 0) {
  msg = `Vous avez gagné <strong>${bonusGagnes} bonus</strong> de 1000 FCFA !`;
}
if (restant > 0) {
  msg += ` Encore <strong>${restant}</strong> personne${restant > 1 ? "s" : ""} à parrainer pour le prochain bonus.`;
}
if (nbParraines === 0) {
  msg = "Parrainez 10 personnes pour obtenir votre premier bonus !";
}
document.getElementById('progress-msg').innerHTML = msg;def repartir_fonds(montant, avec_affiliation):
    parts = {}
    if avec_affiliation:
        parts["mobile_money"] = 0.5 * montant
        parts["bonus"] = 0.03 * montant
        parts["niveau_1"] = 0.3 * montant
        parts["niveau_2"] = 0.1 * montant
        parts["niveau_3"] = 0.07 * montant
    else:
        parts["mobile_money"] = 0.97 * montant
        parts["bonus"] = 0.03 * montant
        parts["niveau_1"] = 0
        parts["niveau_2"] = 0
        parts["niveau_3"] = 0
    return parts/**
 * Répartition des fonds lors d'une recharge sur emas
 * @param {number} montant - Montant de la recharge en FCFA
 * @param {boolean} avecAffiliation - true si l'utilisateur a utilisé un code d'affiliation, false sinon
 * @param {Object} niveaux - (optionnel) Les identifiants des parrains pour chaque niveau
 * @returns {Object} - Les montants à verser à chaque compte
 */
function repartirFondsRecharge(montant, avecAffiliation, niveaux = {}) {
  const result = {};
  if (avecAffiliation) {
    result.mobileMoneyPrincipal = {
      compte: "92396480",
      montant: Math.round(montant * 0.5)
    };
    result.bonus = Math.round(montant * 0.03);
    result.niveau_1 = {
      parrain: niveaux.niveau_1 || null,
      montant: Math.round(montant * 0.3)
    };
    result.niveau_2 = {
      parrain: niveaux.niveau_2 || null,
      montant: Math.round(montant * 0.1)
    };
    result.niveau_3 = {
      parrain: niveaux.niveau_3 || null,
      montant: Math.round(montant * 0.07)
    };
    // Pour vérification, somme des parts :
    result.totalDistribue = 
      result.mobileMoneyPrincipal.montant +
      result.bonus +
      result.niveau_1.montant +
      result.niveau_2.montant +
      result.niveau_3.montant;
  } else {
    result.mobileMoneyPrincipal = {
      compte: "92396480",
      montant: Math.round(montant * 0.97)
    };
    result.bonus = Math.round(montant * 0.03);
    result.niveau_1 = { parrain: null, montant: 0 };
    result.niveau_2 = { parrain: null, montant: 0 };
    result.niveau_3 = { parrain: null, montant: 0 };
    result.totalDistribue = result.mobileMoneyPrincipal.montant + result.bonus;
  }
  result.reste = montant - result.totalDistribue; // Pour vérifier s'il y a des centimes non distribués
  return result;
}

// Exemple d'utilisation :
const montantRecharge = 10000;
const avecAffiliation = true;
const niveaux = {
  niveau_1: "user123", // ID ou login du parrain direct
  niveau_2: "user456", // ID ou login du parrain du niveau 1
  niveau_3: "user789", // ID ou login du parrain du niveau 2
};

console.log(repartirFondsRecharge(montantRecharge, avecAffiliation, niveaux));
// Recharge sans affiliation
console.log(repartirFondsRecharge(montantRecharge, false));{
  "mobileMoneyPrincipal": { "compte": "92396480", "montant": 9700 },
  "bonus": 300,
  "niveau_1": { "parrain": null, "montant": 0 },
  "niveau_2": { "parrain": null, "montant": 0 },
  "niveau_3": { "parrain": null, "montant": 0 },
  "totalDistribue": 10000,
  "reste": 0
}<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Connexion – emas</title>
  <link rel="stylesheet" href="connexion.css">
</head>
<body>
  <div class="container">
    <h1 style="color:#1976d2; text-align:center;">emas</h1>
    <h2 style="text-align:center;">Connexion à mon compte</h2>
    <form id="loginForm">
      <label for="login">Identifiant ou numéro de téléphone :</label>
      <input type="text" id="login" name="login" required placeholder="Votre identifiant ou numéro">

      <label for="password">Mot de passe :</label>
      <input type="password" id="password" name="password" required placeholder="Votre mot de passe">

      <div id="form-error" class="form-error"></div>
      <button type="submit">Se connecter</button>
    </form>
    <div id="success-message" class="success-message" style="display:none;">
      ✅ Connexion réussie ! Redirection en cours...
    </div>
    <div class="links">
      <a href="inscription.html">Créer un compte</a> | <a href="reset.html">Mot de passe oublié ?</a>
    </div>
  </div>
  <script src="connexion.js"></script>
</body>
</html>body {
  font-family: Arial, sans-serif;
  background: #f4f8fd;
  margin: 0;
}
.container {
  max-width: 400px;
  margin: 40px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(25, 118, 210, 0.08);
  padding: 2em;
  border: 1.5px solid #1976d2;
}
h2 {
  margin-bottom: 1em;
  color: #1976d2;
}
form {
  display: flex;
  flex-direction: column;
  gap: 1em;
  margin-top: 1em;
}
label {
  font-weight: bold;
  color: #144e88;
}
input[type="text"], input[type="password"] {
  padding: 0.6em;
  border-radius: 4px;
  border: 1.5px solid #b2d4fa;
  background: #f7fbff;
  font-size: 1em;
  transition: border 0.2s;
}
input[type="text"]:focus, input[type="password"]:focus {
  border: 1.5px solid #1976d2;
  outline: none;
}
button[type="submit"] {
  margin-top: 1em;
  padding: 0.8em;
  background: linear-gradient(90deg, #1976d2 60%, #2196f3 100%);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.1em;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 0.05em;
  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.10);
  transition: background 0.18s, transform 0.14s;
}
button[type="submit"]:hover {
  background: linear-gradient(90deg, #2196f3 40%, #1976d2 100%);
  transform: scale(1.04);
}
.form-error {
  color: #d22;
  margin-top: -0.7em;
  min-height: 1.2em;
  text-align: center;
}
.success-message {
  color: #1976d2;
  font-weight: bold;
  margin-top: 2em;
  text-align: center;
  background: #e3eefd;
  border-radius: 4px;
  padding: 1em;
}
.links {
  text-align: center;
  margin-top: 2em;
}
.links a {
  color: #1976d2;
  text-decoration: underline;
  font-size: 0.98em;
}
@media (max-width: 500px) {
  .container { padding: 1em; }
  h2 { font-size: 1.1em; }
}document.getElementById('loginForm').addEventListener('submit', function(e) {
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

  // Ici tu dois appeler ton API/backend pour vérifier l'identifiant et le mot de passe
  // Exemple fictif : login == "eli79-d" && password == "monmotdepasse"
  if (login === "eli79-d" && password === "monmotdepasse") {
    errorDiv.textContent = "";
    successDiv.style.display = 'block';
    setTimeout(() => window.location.href = "dashboard.html", 1200); // Redirection fictive
  } else {
    errorDiv.textContent = "Identifiant ou mot de passe incorrect.";
    return false;
  }
});
