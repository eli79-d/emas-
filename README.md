# emas-
Plateforme de gestion et de parrainage Mobile Money.
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>emas – Accueil</title>
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="nav.css">
</head>
<body>
  <nav class="emas-nav">
    <ul>
      <li><a href="index.html" id="nav-accueil">Accueil</a></li>
      <li><a href="retrait.html" id="nav-retrait">Retrait</a></li>
      <li><a href="recharge.html" id="nav-recharge">Recharge</a></li>
      <li><a href="communaute.html" id="nav-communaute">Communauté</a></li>
      <li><a href="historique.html" id="nav-historique">Historique</a></li>
      <li><a href="bonus.html" id="nav-bonus">Bonus</a></li>
      <li><a href="connexion.html" id="nav-connexion">Connexion</a></li>
    </ul>
  </nav>
  <script src="nav.js"></script>
  <main>
    <h1 style="color:#1976d2;text-align:center;">Bienvenue sur emas</h1>
    <div class="welcome">
      <p>
        emas est une plateforme de gestion et de parrainage mobile money.<br>
        Utilisez le menu ci-dessus pour accéder à vos fonctionnalités :<br>
        <strong>Retrait, Recharge, Communauté, Historique, Bonus et plus…</strong>
      </p>
      <p>
        <a class="button" href="connexion.html">Connectez-vous</a> ou <a class="button" href="inscription.html">Créez un compte</a>
      </p>
    </div>
  </main>
</body>
</html>

body {
  font-family: Arial, sans-serif;
  background: #f4f8fd;
  margin: 0;
}
main {
  max-width: 700px;
  margin: 40px auto;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(25, 118, 210, 0.08);
  padding: 2em;
  border: 1.5px solid #1976d2;
  min-height: 300px;
}
.welcome {
  text-align: center;
  margin-top: 2em;
  font-size: 1.15em;
  color: #1565c0;
}
.button {
  background: linear-gradient(90deg, #1976d2 60%, #2196f3 100%);
  color: #fff;
  border-radius: 5px;
  padding: 0.5em 1.2em;
  font-weight: bold;
  margin: 0 0.5em;
  text-decoration: none;
  box-shadow: 0 2px 8px #1976d233;
  transition: background 0.18s, transform 0.14s;
  display: inline-block;
}
.button:hover {
  background: linear-gradient(90deg, #2196f3 40%, #1976d2 100%);
  transform: scale(1.05);
}
@media (max-width: 600px) {
  main { padding: 1em; }
  .welcome { font-size: 1em; }
}

.emas-nav {
  background: #1976d2;
  padding: 0.7em 0;
  box-shadow: 0 2px 8px #1976d233;
}
.emas-nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 2em;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}
.emas-nav ul li a {
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  font-size: 1.08em;
  padding: 0.3em 0.9em;
  border-radius: 5px;
  transition: background 0.2s, color 0.2s;
}
.emas-nav ul li a.active,
.emas-nav ul li a:hover {
  background: #fff;
  color: #1976d2;
}
@media (max-width: 600px) {
  .emas-nav ul { gap: 0.6em; }
  .emas-nav ul li a { font-size: 1em; padding: 0.25em 0.7em; }
}
// Ajoute la classe 'active' au lien correspondant à la page courante
const navLinks = document.querySelectorAll('.emas-nav ul li a');
navLinks.forEach(link => {
  if (window.location.pathname.endsWith(link.getAttribute('href'))) {
    link.classList.add('active');
  }
});
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Retrait – emas</title>
  <link rel="stylesheet" href="retrait.css">
  <link rel="stylesheet" href="nav.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="emas-nav">
    <ul>
      <li><a href="index.html">Accueil</a></li>
      <li><a href="retrait.html" class="active">Retrait</a></li>
      <li><a href="recharge.html">Recharge</a></li>
      <li><a href="communaute.html">Communauté</a></li>
      <li><a href="historique.html">Historique</a></li>
      <li><a href="bonus.html">Bonus</a></li>
      <li><a href="connexion.html">Connexion</a></li>
    </ul>
  </nav>
  <script src="nav.js"></script>
  <main>
    <h2 style="text-align:center;">Retrait Mobile Money</h2>
    <div class="reminders">
      <div class="reminder-title">RAPPEL</div>
      <ul>
        <li>Retrait quotidien 24h/24 et 7j/7</li>
        <li>Montant de retrait entre <strong>1000 FCFA</strong> et <strong>10 000 000 FCFA</strong></li>
        <li>Pour faciliter le règlement financier, vous ne pouvez demander un retrait qu’une seule fois par jour</li>
        <li>Taux de retrait : <strong>5%</strong></li>
        <li>⚠️ Vous devez enregistrer votre portefeuille avant de pouvoir effectuer un retrait.</li>
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
  </main>
  <script src="retrait.js"></script>
</body>
</html>
.reminders {
  background: #e3eefd;
  border-radius: 8px;
  padding: 1em;
  margin-bottom: 2em;
  border-left: 4px solid #1976d2;
}
.reminder-title {
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 0.7em;
}
.rate-info {
  color: #1976d2;
  font-size: 1.08em;
  margin: 0.9em 0 1.5em 0;
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
input[type="number"], input[type="password"] {
  padding: 0.6em;
  border-radius: 4px;
  border: 1.5px solid #b2d4fa;
  background: #f7fbff;
  font-size: 1em;
  width: 100%;
  margin-bottom: 1em;
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
let portefeuilleEnregistre = true; // À passer à false si pas enregistré
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
checkPortefeuille();

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

  errorDiv.textContent = "";
  successDiv.style.display = 'block';
  this.reset();
  document.getElementById('net-amount').textContent = "0 FCFA";
});
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Recharge – emas</title>
  <link rel="stylesheet" href="recharge.css">
  <link rel="stylesheet" href="nav.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="emas-nav">
    <ul>
      <li><a href="index.html">Accueil</a></li>
      <li><a href="retrait.html">Retrait</a></li>
      <li><a href="recharge.html" class="active">Recharge</a></li>
      <li><a href="communaute.html">Communauté</a></li>
      <li><a href="historique.html">Historique</a></li>
      <li><a href="bonus.html">Bonus</a></li>
      <li><a href="connexion.html">Connexion</a></li>
    </ul>
  </nav>
  <script src="nav.js"></script>
  <main>
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
  </main>
  <script src="recharge.js"></script>
</body>
</html>
.solde-info {
  color: #1976d2;
  font-size: 1.08em;
  margin-bottom: 1.5em;
  text-align: center;
}
.phone-group {
  display: flex;
  gap: 0.5em;
  align-items: center;
  margin-bottom: 1em;
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
const soldeActuel = 12000;
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

  errorDiv.textContent = "";
  successDiv.style.display = 'block';
  this.reset();
});
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Communauté – emas</title>
  <link rel="stylesheet" href="communaute.css">
  <link rel="stylesheet" href="nav.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="emas-nav">
    <ul>
      <li><a href="index.html">Accueil</a></li>
      <li><a href="retrait.html">Retrait</a></li>
      <li><a href="recharge.html">Recharge</a></li>
      <li><a href="communaute.html" class="active">Communauté</a></li>
      <li><a href="historique.html">Historique</a></li>
      <li><a href="bonus.html">Bonus</a></li>
      <li><a href="connexion.html">Connexion</a></li>
    </ul>
  </nav>
  <script src="nav.js"></script>
  <main>
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
  </main>
  <script src="communaute.js"></script>
</body>
</html>
.affiliation {
  margin: 2em 0 2em 0;
  text-align: center;
}
.link-box {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7em;
  margin-top: 0.7em;
}
input#affiliation-link {
  width: 240px;
  padding: 0.5em;
  border-radius: 4px;
  border: 1.5px solid #b2d4fa;
  background: #f7fbff;
  font-size: 1em;
}
button#copy-link {
  padding: 0.5em 1.2em;
  background: linear-gradient(90deg, #1976d2 60%, #2196f3 100%);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  font-size: 1em;
  transition: background 0.18s, transform 0.14s;
}
button#copy-link:hover {
  background: linear-gradient(90deg, #2196f3 40%, #1976d2 100%);
  transform: scale(1.04);
}
.copied-msg {
  color: #1976d2;
  font-weight: bold;
  margin-top: 0.7em;
  font-size: 0.99em;
}
.parrainage label {
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
let nbParraines = 3;
const maxParrainage = 10;
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

document.getElementById('copy-link').onclick = function() {
  const input = document.getElementById('affiliation-link');
  input.select();
  document.execCommand('copy');
  const copiedMsg = document.getElementById('copied-msg');
  copiedMsg.textContent = "Lien copié !";
  setTimeout(() => copiedMsg.textContent = "", 2000);
};
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Historique – emas</title>
  <link rel="stylesheet" href="historique.css">
  <link rel="stylesheet" href="nav.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="emas-nav">
    <ul>
      <li><a href="index.html">Accueil</a></li>
      <li><a href="retrait.html">Retrait</a></li>
      <li><a href="recharge.html">Recharge</a></li>
      <li><a href="communaute.html">Communauté</a></li>
      <li><a href="historique.html" class="active">Historique</a></li>
      <li><a href="bonus.html">Bonus</a></li>
      <li><a href="connexion.html">Connexion</a></li>
    </ul>
  </nav>
  <script src="nav.js"></script>
  <main>
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
  </main>
  <script src="historique.js"></script>
</body>
</html>
.columns {
  display: flex;
  gap: 2em;
  flex-wrap: wrap;
  justify-content: space-around;
}
.column {
  flex: 1 1 220px;
  min-width: 220px;
}
.history-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1em;
  font-size: 0.98em;
  background: #f7fbff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 1px 6px #1976d233;
}
.history-table th, .history-table td {
  border: 1px solid #b2d4fa;
  padding: 0.7em 0.4em;
  text-align: center;
}
.history-table th {
  background: #e3eefd;
  color: #1976d2;
  font-weight: bold;
}
.status-success {
  color: #1976d2;
  font-weight: bold;
}
.status-failed {
  color: #d22;
  font-weight: bold;
}
@media (max-width: 900px) {
  .columns { flex-direction: column; gap: 1.5em; }
}
const retraits = [
  { statut: 'réussi', montant: 10000, taxe: 500, date: '2025-07-27 16:32' },
  { statut: 'échec', montant: 20000, taxe: 1000, date: '2025-07-28 14:18' },
  { statut: 'réussi', montant: 5000, taxe: 250, date: '2025-07-29 09:03' }
];
const recharges = [
  { montant: 5000, date: '2025-07-26 11:19' },
  { montant: 15000, date: '2025-07-28 18:54' },
  { montant: 7000, date: '2025-07-29 13:25' }
];
function formatFCFA(val) { return val.toLocaleString('fr-FR') + ' FCFA'; }
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
fillRechargeHistory();
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Bonus – emas</title>
  <link rel="stylesheet" href="bonus.css">
  <link rel="stylesheet" href="nav.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="emas-nav">
    <ul>
      <li><a href="index.html">Accueil</a></li>
      <li><a href="retrait.html">Retrait</a></li>
      <li><a href="recharge.html">Recharge</a></li>
      <li><a href="communaute.html">Communauté</a></li>
      <li><a href="historique.html">Historique</a></li>
      <li><a href="bonus.html" class="active">Bonus</a></li>
      <li><a href="connexion.html">Connexion</a></li>
    </ul>
  </nav>
  <script src="nav.js"></script>
  <main>
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
  </main>
  <script src="bonus.js"></script>
</body>
</html>
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
}
const soldeActuel = 15000;
const nbParraines = 23;
const palier = 10;
const bonusParPalier = 1000;
const bonusGagnes = Math.floor(nbParraines / palier);
const bonusTotal = bonusGagnes * bonusParPalier;
const restant = palier - (nbParraines % palier);
const pourcentage = Math.min((nbParraines % palier) / palier * 100, 100);
document.getElementById('solde').textContent = soldeActuel + " FCFA";
document.getElementById('nb-parraines').textContent = nbParraines;
document.getElementById('bonus-count').textContent = bonusGagnes;
document.getElementById('bonus-total').textContent = bonusTotal + " FCFA";
document.getElementById('bar-fill').style.width = pourcentage + "%";
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
document.getElementById('progress-msg').innerHTML = msg;
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Connexion – emas</title>
  <link rel="stylesheet" href="connexion.css">
  <link rel="stylesheet" href="nav.css">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <nav class="emas-nav">
    <ul>
      <li><a href="index.html">Accueil</a></li>
      <li><a href="retrait.html">Retrait</a></li>
      <li><a href="recharge.html">Recharge</a></li>
      <li><a href="communaute.html">Communauté</a></li>
      <li><a href="historique.html">Historique</a></li>
      <li><a href="bonus.html">Bonus</a></li>
      <li><a href="connexion.html" class="active">Connexion</a></li>
    </ul>
  </nav>
  <script src="nav.js"></script>
  <main>
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
  </main>
  <script src="connexion.js"></script>
</body>
</html>
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
  h2 { font-size: 1.1em; }
}
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
