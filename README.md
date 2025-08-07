# emas-
body {
  font-family: Arial, sans-serif;
  background: #f0f8ff;
  margin: 0;
  color: #333;
}
header {
  background: #1e90ff;
  color: white;
  padding: 1rem;
  text-align: center;
}
.logo {
  height: 50px;
  margin-bottom: 10px;
}
.form-container {
  background: white;
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(30,144,255,0.3);
}
form label {
  display: block;
  margin-top: 1rem;
  font-weight: bold;
}
form input {
  width: 100%;
  padding: 8px;
  margin-top: 0.3rem;
  border: 1px solid #ccc;
  border-radius: 5px;
}
form button {
  margin-top: 1.5rem;
  width: 100%;
  padding: 10px;
  background: #1e90ff;
  border: none;
  color: white;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
}
form button:hover {
  background: #187bcd;
}
p {
  text-align: center;
  margin-top: 1rem;
}
p a {
  color: #1e90ff;
  text-decoration: none;
}
p a:hover {
  text-decoration: underline;
}
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>EMAS - Inscription</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <img src="assets/logo.png" alt="Logo EMAS" class="logo" />
    <h1>Créer un compte EMAS 📝</h1>
  </header>

  <main class="form-container">
    <form action="dashboard.html" method="POST" id="registerForm">
      <label for="phone">📞 Numéro de téléphone :</label>
      <input type="tel" id="phone" name="phone" placeholder="+228 90 00 00 00" required />

      <label for="username">👤 Pseudo :</label>
      <input type="text" id="username" name="username" required />

      <label for="password">🔑 Mot de passe :</label>
      <input type="password" id="password" name="password" required />

      <label for="confirmPassword">🔑 Confirmer mot de passe :</label>
      <input type="password" id="confirmPassword" name="confirmPassword" required />

      <label for="invitationCode">📝 Code d’invitation (facultatif) :</label>
      <input type="text" id="invitationCode" name="invitationCode" />

      <label for="captcha">🛡️ Code Captcha :</label>
      <input type="text" id="captcha" name="captcha" required />

      <button type="submit">🚀 S'inscrire maintenant</button>
    </form>
    <p>Déjà un compte ? <a href="index.html">Connectez-vous ici 🔐</a></p>
  </main>

  <script>
    const form = document.getElementById('registerForm');
    form.addEventListener('submit', e => {
      e.preventDefault();
      const pwd = form.password.value;
      const pwdConfirm = form.confirmPassword.value;
      if(pwd !== pwdConfirm){
        alert('Les mots de passe ne correspondent pas!');
        return;
      }
      alert('Inscription réussie !');
      // Ici, logique d'inscription réelle à intégrer (backend ou stockage local)
      window.location.href = 'dashboard.html';
    });
  </script>
</body>
</html>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>EMAS - Connexion</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header>
    <img src="assets/logo.png" alt="Logo EMAS" class="logo" />
    <h1>Bienvenue sur <strong>EMAS</strong> 🚀</h1>
  </header>

  <main class="form-container">
    <h2>Connexion 🔐</h2>
    <form action="dashboard.html" method="POST" id="loginForm">
      <label for="phone">📞 Téléphone :</label>
      <input type="tel" id="phone" name="phone" placeholder="+228 90 00 00 00" required />

      <label for="password">🔑 Mot de passe :</label>
      <input type="password" id="password" name="password" required />

      <button type="submit">Se connecter</button>
    </form>
    <p>Pas encore de compte ? <a href="register.html">Inscrivez-vous ici ✍️</a></p>
  </main>

  <script>
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      // Ici, logique de connexion (à compléter selon backend)
      alert('Connexion réussie !');
      window.location.href = 'dashboard.html';
    });
  </script>
</body>
</html>
<!-- PAGE DE CONNEXION - login.html -->
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Connexion - EMAS</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="auth-container">
    <h1>🔐 Connexion à EMAS</h1>
    <form id="loginForm">
      <input type="email" id="loginEmail" placeholder="Adresse e-mail" required>
      <input type="password" id="loginPassword" placeholder="Mot de passe" required>
      <button type="submit">Se connecter</button>
    </form>
    <p>Pas encore inscrit ? <a href="register.html">Inscrivez-vous ici</a></p>
  </div>

  <script>
    document.getElementById("loginForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const email = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;
      const user = JSON.parse(localStorage.getItem(email));
      if (user && user.password === password) {
        sessionStorage.setItem("emas_user", JSON.stringify(user));
        window.location.href = "home.html";
      } else {
        alert("Email ou mot de passe incorrect");
      }
    });
  </script>
</body>
</html>

<!-- PAGE D'INSCRIPTION - register.html -->
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inscription - EMAS</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <div class="auth-container">
    <h1>📝 Inscription à EMAS</h1>
    <form id="registerForm">
      <input type="text" id="username" placeholder="Nom complet" required>
      <input type="email" id="email" placeholder="Adresse e-mail" required>
      <input type="password" id="password" placeholder="Mot de passe" required>
      <input type="text" id="parrain" placeholder="Code de parrainage (facultatif)">
      <button type="submit">S'inscrire</button>
    </form>
    <p>Déjà un compte ? <a href="login.html">Connectez-vous ici</a></p>
  </div>

  <script>
    document.getElementById("registerForm").addEventListener("submit", function(e) {
      e.preventDefault();
      const user = {
        username: document.getElementById("username").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        parrain: document.getElementById("parrain").value || null,
        bonus: 0,
        invites: 0
      };
      localStorage.setItem(user.email, JSON.stringify(user));
      sessionStorage.setItem("emas_user", JSON.stringify(user));
      window.location.href = "home.html";
    });
  </script>
</body>
</html>

<!-- PAGE D'ACCUEIL - home.html (déjà générée) -->
<!-- Le fichier home.html existant servira de tableau de bord après connexion/inscription -->
<script>
  const user = sessionStorage.getItem("emas_user");
  if (!user) {
    // Si l'utilisateur n'est pas connecté, rediriger vers la page de connexion
    window.location.href = "login.html";
  }
</script>
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>Accueil - EMAS</title>
<style>
  body {
    background: #f0f8ff; /* bleu très clair */
    color: #003366; /* bleu foncé */
    font-family: Arial, sans-serif;
    margin: 20px;
  }
  header h1 {
    margin-bottom: 20px;
    color: #002244;
  }
  .user-info div {
    margin-bottom: 8px;
    font-weight: 600;
  }
  #balance {
    font-weight: bold;
    color: #0055cc;
    font-size: 1.3em;
  }
  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 30px 0;
  }
  button {
    flex: 1 1 130px;
    background: #0073e6;
    border: none;
    padding: 15px;
    color: white;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  button:hover {
    background: #005bb5;
  }
  #support-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background: #0073e6;
    border-radius: 50%;
    font-size: 28px;
    line-height: 60px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 0 10px #005bb5;
    color: white;
  }
  #chart-container {
    max-width: 600px;
    margin: 0 auto 40px;
    background: white;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 0 10px #b3d1ff;
  }
</style>
</head>
<body>

<header><h1>Bienvenue sur EMAS</h1></header>

<section class="user-info">
  <div>Nom : <span id="user-name">Jean Dupont</span></div>
  <div>Téléphone : <span id="user-phone">+228 90000000</span></div>
  <div>Solde : <span id="balance">10 000 FCFA</span></div>
</section>

<section id="chart-container">
  <canvas id="profitChart"></canvas>
</section>

<nav>
  <button id="btn-retrait">Retrait</button>
  <button id="btn-compte">Compte</button>
  <button id="btn-bonus">Bonus</button>
  <button id="btn-historique">Historique</button>
  <button id="btn-recharge">Recharge</button>
  <button id="btn-communaute">Communauté</button>
</nav>

<div id="support-btn" title="Support">💬</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
  const ctx = document.getElementById('profitChart').getContext('2d');
  const profitChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['J-6','J-5','J-4','J-3','J-2','J-1','Aujourd’hui'],
      datasets: [{
        label: 'Profit journalier (FCFA)',
        data: [500, 700, 600, 900, 850, 1000, 1200],
        borderColor: '#0073e6',
        backgroundColor: 'rgba(0,115,230,0.3)',
        fill: true,
        tension: 0.3,
        pointRadius: 5
      }]
    },
    options: {
      responsive: true,
      scales: { 
        y: { beginAtZero: true, grid: {color:'#cce0ff'} },
        x: { grid: {color:'#cce0ff'} }
      },
      plugins: { legend: { labels: { color: '#003366' } } }
    }
  });

  // Boutons
  document.getElementById('btn-retrait').onclick = () => alert('Onglet Retrait');
  document.getElementById('btn-compte').onclick = () => alert('Onglet Compte');
  document.getElementById('btn-bonus').onclick = () => alert('Onglet Bonus');
  document.getElementById('btn-historique').onclick = () => alert('Onglet Historique');
  document.getElementById('btn-recharge').onclick = () => alert('Onglet Recharge');
  document.getElementById('btn-communaute').onclick = () => alert('Onglet Communauté');

  document.getElementById('support-btn').onclick = () => alert('Support ouvert');
</script>

</body>
</html>
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>EMAS - Accueil & Portefeuille</title>
<style>
  body {
    background: #f0f8ff;
    color: #003366;
    font-family: Arial, sans-serif;
    margin: 20px;
  }
  h1 { color: #002244; }
  nav {
    margin: 20px 0;
  }
  button.nav-btn {
    background: #0073e6;
    border: none;
    padding: 12px 18px;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 10px;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  button.nav-btn:hover {
    background: #005bb5;
  }
  section {
    display: none;
    margin-top: 20px;
  }
  section.active {
    display: block;
  }
  label {
    display: block;
    margin: 10px 0 5px;
    font-weight: 600;
  }
  select, input[type=text], input[type=password], input[type=tel] {
    width: 300px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #0073e6;
    font-size: 1em;
  }
  #create-wallet-btn {
    margin-top: 20px;
    background: #009900;
    padding: 12px 20px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    color: white;
    cursor: pointer;
  }
  #create-wallet-btn:hover {
    background: #007700;
  }
  .warning {
    margin-top: 20px;
    background: #ffe6e6;
    border: 1px solid #cc0000;
    color: #990000;
    padding: 15px;
    max-width: 600px;
    border-radius: 8px;
  }
  .success {
    margin-top: 15px;
    background: #d4edda;
    border: 1px solid #28a745;
    color: #155724;
    padding: 15px;
    max-width: 600px;
    border-radius: 8px;
  }
</style>
</head>
<body>

<header><h1>EMAS</h1></header>

<nav>
  <button class="nav-btn" id="btn-accueil">Accueil</button>
  <button class="nav-btn" id="btn-compte">Compte</button>
  <!-- autres boutons comme Bonus, Historique, etc peuvent être ajoutés ici -->
</nav>

<!-- Section Accueil -->
<section id="accueil" class="active">
  <h2>Bienvenue sur EMAS</h2>
  <p>Voici la page d'accueil.</p>
  <!-- Tu peux insérer ici les infos utilisateur, graphique, etc -->
</section>

<!-- Section Portefeuille -->
<section id="portefeuille">
  <h2>Enregistrer votre portefeuille</h2>
  
  <div class="warning">
    <p><strong>Attention :</strong></p>
    <ol>
      <li>Vous pouvez uniquement ajouter un portefeuille de transfert mobile money pour le retrait.</li>
      <li>Veuillez-vous assurer que le numéro du portefeuille de transfert mobile money est correct et fonctionnel.</li>
    </ol>
  </div>
  
  <form id="wallet-form">
    <label for="wallet-type">Portefeuille (mobile money) :</label>
    <select id="wallet-type" required>
      <option value="" disabled selected>-- Choisissez un portefeuille --</option>
      <option value="MTN">MTN</option>
      <option value="ORANGE">ORANGE</option>
      <option value="TEST">TEST</option>
      <option value="TMONEY">TMONEY</option>
      <option value="WAVE">WAVE</option>
      <option value="FLOOZ">FLOOZ</option>
    </select>
    
    <label for="pseudo">Pseudo :</label>
    <input type="text" id="pseudo" placeholder="Votre pseudo" required />
    
    <label for="phone">Numéro de téléphone :</label>
    <input type="tel" id="phone" placeholder="+228 ..." pattern="\+?\d{8,15}" required />
    
    <label for="transaction-pass">Mot de transaction :</label>
    <input type="password" id="transaction-pass" placeholder="Mot de transaction" required />
    
    <button type="submit" id="create-wallet-btn">Créer un portefeuille</button>
  </form>
  
  <div id="msg-success" class="success" style="display:none;">
    Portefeuille enregistré avec succès !
  </div>
</section>

<script>
  // Navigation simple entre Accueil et Portefeuille
  const btnAccueil = document.getElementById('btn-accueil');
  const btnCompte = document.getElementById('btn-compte');
  const sectionAccueil = document.getElementById('accueil');
  const sectionPortefeuille = document.getElementById('portefeuille');

  btnAccueil.addEventListener('click', () => {
    sectionAccueil.classList.add('active');
    sectionPortefeuille.classList.remove('active');
  });

  btnCompte.addEventListener('click', () => {
    sectionPortefeuille.classList.add('active');
    sectionAccueil.classList.remove('active');
  });

  // Gestion formulaire portefeuille
  const walletForm = document.getElementById('wallet-form');
  const msgSuccess = document.getElementById('msg-success');

  walletForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const walletType = document.getElementById('wallet-type').value;
    const pseudo = document.getElementById('pseudo').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const transactionPass = document.getElementById('transaction-pass').value;

    if (!walletType || !pseudo || !phone || !transactionPass) {
      alert("Merci de remplir tous les champs.");
      return;
    }

    // Ici, on peut valider le format du téléphone, mot de transaction, etc
    // Exemple simple: sauvegarde en localStorage (à remplacer par backend)
    const walletData = {
      walletType,
      pseudo,
      phone,
      transactionPass
    };
    localStorage.setItem('emasWallet', JSON.stringify(walletData));

    msgSuccess.style.display = 'block';
    walletForm.reset();
  });
</script>

</body>
</html>
<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>EMAS - Accueil, Portefeuille & Retrait</title>
<style>
  body {
    background: #f0f8ff;
    color: #003366;
    font-family: Arial, sans-serif;
    margin: 20px;
  }
  h1, h2 {
    color: #002244;
  }
  nav {
    margin: 20px 0;
  }
  button.nav-btn {
    background: #0073e6;
    border: none;
    padding: 12px 18px;
    color: white;
    border-radius: 6px;
    cursor: pointer;
    margin-right: 10px;
    font-weight: bold;
    transition: background-color 0.3s;
  }
  button.nav-btn:hover {
    background: #005bb5;
  }
  section {
    display: none;
    margin-top: 20px;
  }
  section.active {
    display: block;
  }
  label {
    display: block;
    margin: 10px 0 5px;
    font-weight: 600;
  }
  select, input[type=text], input[type=password], input[type=tel], input[type=number] {
    width: 300px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid #0073e6;
    font-size: 1em;
  }
  button.action-btn {
    margin-top: 20px;
    background: #009900;
    padding: 12px 20px;
    font-weight: bold;
    border: none;
    border-radius: 6px;
    color: white;
    cursor: pointer;
  }
  button.action-btn:hover {
    background: #007700;
  }
  .warning {
    margin-top: 20px;
    background: #ffe6e6;
    border: 1px solid #cc0000;
    color: #990000;
    padding: 15px;
    max-width: 600px;
    border-radius: 8px;
  }
  .success {
    margin-top: 15px;
    background: #d4edda;
    border: 1px solid #28a745;
    color: #155724;
    padding: 15px;
    max-width: 600px;
    border-radius: 8px;
  }
  #retreat-rappel {
    margin-top: 20px;
    background: #cce0ff;
    border-radius: 8px;
    padding: 15px;
    max-width: 600px;
    color: #003366;
  }
</style>
</head>
<body>

<header><h1>EMAS</h1></header>

<nav>
  <button class="nav-btn" id="btn-accueil">Accueil</button>
  <button class="nav-btn" id="btn-compte">Compte</button>
  <button class="nav-btn" id="btn-retrait">Retrait</button>
</nav>

<!-- Section Accueil -->
<section id="accueil" class="active">
  <h2>Bienvenue sur EMAS</h2>
  <p>Voici la page d'accueil.</p>
  <!-- Ici tu peux insérer infos utilisateur, graphique, etc -->
</section>

<!-- Section Portefeuille -->
<section id="portefeuille">
  <h2>Enregistrer votre portefeuille</h2>
  
  <div class="warning">
    <p><strong>Attention :</strong></p>
    <ol>
      <li>Vous pouvez uniquement ajouter un portefeuille de transfert mobile money pour le retrait.</li>
      <li>Veuillez-vous assurer que le numéro du portefeuille de transfert mobile money est correct et fonctionnel.</li>
    </ol>
  </div>
  
  <form id="wallet-form">
    <label for="wallet-type">Portefeuille (mobile money) :</label>
    <select id="wallet-type" required>
      <option value="" disabled selected>-- Choisissez un portefeuille --</option>
      <option value="MTN">MTN</option>
      <option value="ORANGE">ORANGE</option>
      <option value="TEST">TEST</option>
      <option value="TMONEY">TMONEY</option>
      <option value="WAVE">WAVE</option>
      <option value="FLOOZ">FLOOZ</option>
    </select>
    
    <label for="pseudo">Pseudo :</label>
    <input type="text" id="pseudo" placeholder="Votre pseudo" required />
    
    <label for="phone">Numéro de téléphone :</label>
    <input type="tel" id="phone" placeholder="+228 ..." pattern="\+?\d{8,15}" required />
    
    <label for="transaction-pass">Mot de transaction :</label>
    <input type="password" id="transaction-pass" placeholder="Mot de transaction" required />
    
    <button type="submit" id="create-wallet-btn">Créer un portefeuille</button>
  </form>
  
  <div id="msg-success-wallet" class="success" style="display:none;">
    Portefeuille enregistré avec succès !
  </div>
</section>

<!-- Section Retrait -->
<section id="retrait">
  <h2>Demander un retrait</h2>

  <form id="retrait-form">
    <label for="montant">Montant à retirer (FCFA) :</label>
    <input type="number" id="montant" min="1000" max="10000000" placeholder="1000 - 10 000 000" required />
    
    <label for="retreat-pass">Mot de transaction :</label>
    <input type="password" id="retreat-pass" placeholder="Mot de transaction" required />
    
    <button type="submit" class="action-btn">Demander un retrait</button>
  </form>
  
  <div id="msg-success-retrait" class="success" style="display:none;"></div>
  <div id="msg-error-retrait" class="warning" style="display:none;"></div>

  <div id="retreat-rappel">
    <p><strong>Rappel :</strong></p>
    <ol>
      <li>Retrait quotidien 24h/24 et 7j/7.</li>
      <li>Montant de retrait entre 1000 FCFA et 10 000 000 FCFA.</li>
      <li>Pour faciliter le règlement financier, vous ne pouvez demander un retrait qu'une seule fois par jour.</li>
      <li>Taux de retrait : 5% (commission).</li>
    </ol>
  </div>
</section>

<script>
  // Navigation simple entre sections
  const btnAccueil = document.getElementById('btn-accueil');
  const btnCompte = document.getElementById('btn-compte');
  const btnRetrait = document.getElementById('btn-retrait');
  const sectionAccueil = document.getElementById('accueil');
  const sectionPortefeuille = document.getElementById('portefeuille');
  const sectionRetrait = document.getElementById('retrait');

  function showSection(section) {
    [sectionAccueil, sectionPortefeuille, sectionRetrait].forEach(s => s.classList.remove('active'));
    section.classList.add('active');
  }

  btnAccueil.addEventListener('click', () => showSection(sectionAccueil));
  btnCompte.addEventListener('click', () => showSection(sectionPortefeuille));
  btnRetrait.addEventListener('click', () => showSection(sectionRetrait));

  // Gestion formulaire portefeuille
  const walletForm = document.getElementById('wallet-form');
  const msgSuccessWallet = document.getElementById('msg-success-wallet');

  walletForm.addEventListener('submit', e => {
    e.preventDefault();

    const walletType = document.getElementById('wallet-type').value;
    const pseudo = document.getElementById('pseudo').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const transactionPass = document.getElementById('transaction-pass').value;

    if (!walletType || !pseudo || !phone || !transactionPass) {
      alert("Merci de remplir tous les champs.");
      return;
    }

    // Sauvegarde simple en localStorage (à remplacer par backend)
    const walletData = { walletType, pseudo, phone, transactionPass };
    localStorage.setItem('emasWallet', JSON.stringify(walletData));

    msgSuccessWallet.style.display = 'block';
    walletForm.reset();
  });

  // Gestion formulaire retrait
  const retraitForm = document.getElementById('retrait-form');
  const msgSuccessRetrait = document.getElementById('msg-success-retrait');
  const msgErrorRetrait = document.getElementById('msg-error-retrait');

  retraitForm.addEventListener('submit', e => {
    e.preventDefault();

    msgSuccessRetrait.style.display = 'none';
    msgErrorRetrait.style.display = 'none';

    const montant = parseInt(document.getElementById('montant').value, 10);
    const retraitPass = document.getElementById('retreat-pass').value;

    if (isNaN(montant) || montant < 1000 || montant > 10000000) {
      msgErrorRetrait.textContent = "Le montant doit être entre 1 000 et 10 000 000 FCFA.";
      msgErrorRetrait.style.display = 'block';
      return;
    }

    if (!retraitPass) {
      msgErrorRetrait.textContent = "Veuillez saisir votre mot de transaction.";
      msgErrorRetrait.style.display = 'block';
      return;
    }

    // Récupérer les données portefeuille
    const walletData = JSON.parse(localStorage.getItem('emasWallet'));
    if (!walletData) {
      msgErrorRetrait.textContent = "Vous devez d'abord créer un portefeuille dans l'onglet Compte.";
      msgErrorRetrait.style.display = 'block';
      return;
    }

    if (retraitPass !== walletData.transactionPass) {
      msgErrorRetrait.textContent = "Mot de transaction incorrect.";
      msgErrorRetrait.style.display = 'block';
      return;
    }

    // Vérifier la dernière demande de retrait (une seule fois par jour)
    const lastRequestStr = localStorage.getItem('lastRetraitRequest');
    if (lastRequestStr) {
      const lastRequest = new Date(lastRequestStr);
      const now = new Date();
      const diffHours = (now - lastRequest) / (1000 * 60 * 60);
      if (diffHours < 24) {
        msgErrorRetrait.textContent = "Vous ne pouvez demander un retrait qu'une seule fois par jour.";
        msgErrorRetrait.style.display = 'block';
        return;
      }
    }

    // Calculer montant net après commission 5%
    const commission = montant * 0.05;
    const montantNet = montant - commission;

    // Simuler le transfert mobile money ici (à remplacer par API)
    // Exemple :
    // transferMobileMoney(walletData.walletType, walletData.phone, montantNet);

    // Sauvegarder la date de la demande de retrait
    localStorage.setItem('lastRetraitRequest', new Date().toISOString());

    msgSuccessRetrait.innerHTML = `Retrait de <strong>${montant.toLocaleString('fr-FR')} FCFA</strong> demandé.<br>
      Commission 5% : <strong>${commission.toLocaleString('fr-FR')} FCFA</strong><br>
      Montant net transféré : <strong>${montantNet.toLocaleString('fr-FR')} FCFA</strong><br>
      Transfert effectué sur <strong>${walletData.walletType}</strong>, numéro <strong>${walletData.phone}</strong>.`;
    msgSuccessRetrait.style.display = 'block';

    retraitForm.reset();
  });
</script>

</body>
</html>
<!-- ... (reste inchangé) ... -->

<section id="retrait">
  <h2>Demander un retrait</h2>

  <div id="no-wallet-msg" class="warning" style="display:none;">
    Vous devez d'abord <strong>enregistrer votre portefeuille</strong> dans l'onglet <em>Compte</em> avant de pouvoir demander un retrait.
  </div>

  <form id="retrait-form" style="display:none;">
    <label for="montant">Montant à retirer (FCFA) :</label>
    <input type="number" id="montant" min="1000" max="10000000" placeholder="1000 - 10 000 000" required />
    
    <label for="retreat-pass">Mot de transaction :</label>
    <input type="password" id="retreat-pass" placeholder="Mot de transaction" required />
    
    <button type="submit" class="action-btn">Demander un retrait</button>
  </form>
  
  <div id="msg-success-retrait" class="success" style="display:none;"></div>
  <div id="msg-error-retrait" class="warning" style="display:none;"></div>

  <div id="retreat-rappel">
    <p><strong>Rappel :</strong></p>
    <ol>
      <li>Retrait quotidien 24h/24 et 7j/7.</li>
      <li>Montant de retrait entre 1000 FCFA et 10 000 000 FCFA.</li>
      <li>Pour faciliter le règlement financier, vous ne pouvez demander un retrait qu'une seule fois par jour.</li>
      <li>Taux de retrait : 5% (commission).</li>
    </ol>
  </div>
</section>

<script>
  // ... navigation et walletForm inchangés ...

  btnRetrait.addEventListener('click', () => {
    showSection(sectionRetrait);

    const walletData = JSON.parse(localStorage.getItem('emasWallet'));
    const retraitForm = document.getElementById('retrait-form');
    const noWalletMsg = document.getElementById('no-wallet-msg');
    const msgSuccessRetrait = document.getElementById('msg-success-retrait');
    const msgErrorRetrait = document.getElementById('msg-error-retrait');

    msgSuccessRetrait.style.display = 'none';
    msgErrorRetrait.style.display = 'none';

    if (!walletData) {
      retraitForm.style.display = 'none';
      noWalletMsg.style.display = 'block';
    } else {
      noWalletMsg.style.display = 'none';
      retraitForm.style.display = 'block';
    }
  });

  // Gestion formulaire retrait
  // (idem que précédemment, inchangé)

</script>

</body>
</html>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Recharge | EMAS</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body class="recharge-page">
  <div class="container">
    <h1>🔋 Recharger mon compte</h1>

    <form action="recharge_success.html" method="POST" class="recharge-form">
      <label for="montant">💵 Montant à recharger :</label>
      <input type="number" id="montant" name="montant" required placeholder="Ex: 5000 FCFA" />

      <label for="numero">📱 Numéro Mobile Money :</label>
      <input type="tel" id="numero" name="numero" required placeholder="Ex: 92396480" />

      <button type="submit">🚀 Recharger maintenant</button>
    </form>

    <p class="back-home">
      🔙 <a href="accueil.html">Retour à l’accueil</a>
    </p>
  </div>
</body>
</html>
body.recharge-page {
  background-color: #f4f9ff;
  font-family: 'Segoe UI', sans-serif;
  color: #004488;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.container {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 68, 136, 0.1);
  width: 90%;
  max-width: 400px;
  text-align: center;
}

h1 {
  margin-bottom: 1.5rem;
  color: #004488;
}

.recharge-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #ccc;
  font-size: 1rem;
}

button {
  background-color: #007bff;
  color: white;
  padding: 0.9rem;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.3s ease;
}

button:hover {
  background-color: #0056b3;
}

.back-home {
  margin-top: 1.5rem;
}

.back-home a {
  text-decoration: none;
  color: #004488;
  font-weight: bold;
}
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>Recharge réussie</title>
  <link rel="stylesheet" href="style.css">
</head>
<body class="recharge-page">
  <div class="container">
    <h1>✅ Recharge réussie !</h1>
    <p>Merci d’avoir rechargé votre compte EMAS.</p>
    <a href="accueil.html">🏠 Retour à l’accueil</a>
  </div>
</body>
</html>
<a href="communaute.html">🌍 Communauté</a>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Communauté EMAS</title>
  <style>
    body {
      margin: 0;
      font-family: 'Segoe UI', sans-serif;
      background: #e9f2ff;
      color: #003366;
    }

    header {
      background: #007BFF;
      color: white;
      padding: 15px;
      text-align: center;
      font-size: 1.6em;
    }

    nav {
      display: flex;
      justify-content: center;
      background-color: #0056b3;
    }

    nav a {
      color: white;
      padding: 15px 25px;
      text-decoration: none;
      display: inline-block;
      transition: background 0.3s;
    }

    nav a:hover {
      background-color: #003d80;
    }

    .container {
      padding: 20px;
      max-width: 900px;
      margin: auto;
    }

    .temoignage {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .temoignage img {
      width: 100%;
      max-width: 400px;
      border-radius: 10px;
      margin-top: 20px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }

    .btn-contact {
      background-color: #25D366;
      color: white;
      border: none;
      padding: 12px 25px;
      font-size: 16px;
      margin-top: 25px;
      border-radius: 8px;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
    }

    .btn-contact:hover {
      background-color: #1da851;
    }

    footer {
      background: #003366;
      color: white;
      padding: 15px;
      text-align: center;
      margin-top: 40px;
    }

    @media screen and (max-width: 600px) {
      .temoignage img {
        width: 90%;
      }

      nav {
        flex-direction: column;
        align-items: center;
      }

      nav a {
        padding: 10px 15px;
      }
    }
  </style>
</head>
<body>

  <header>🌐 Bienvenue dans la Communauté EMAS</header>

  <nav>
    <a href="accueil.html">🏠 Accueil</a>
    <a href="connexion.html">🔐 Connexion</a>
    <a href="inscription.html">📝 Inscription</a>
    <a href="communaute.html">🤝 Communauté</a>
  </nav>

  <div class="container">
    <h2>🤗 Rejoignez notre communauté active !</h2>
    <p>Des milliers de membres partagent chaque jour leurs expériences et réussites sur EMAS.</p>
    
    <div class="temoignage">
      <img src="images/temoignage1.jpg" alt="Témoignage EMAS">
      <p>💬 "Grâce à EMAS, j’ai pu faire fructifier mon argent en toute sécurité. Merci à toute l’équipe !" - Adjoa T.</p>
    </div>

    <a class="btn-contact" href="https://wa.me/22892396480" target="_blank">💬 Rejoindre la communauté WhatsApp</a>
  </div>

  <footer>
    © 2025 EMAS. Tous droits réservés.
  </footer>

</body>
</html>
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Historique | EMAS</title>
  <link rel="stylesheet" href="style.css">
</head>
<body class="historique-page">
  <header>
    <h1>📊 Mon Historique</h1>
    <nav>
      <a href="index.html">🏠 Accueil</a>
      <a href="connexion.html">🔐 Connexion</a>
      <a href="inscription.html">📝 Inscription</a>
      <a href="recharge.html">💳 Recharge</a>
      <a href="historique.html" class="active">📊 Historique</a>
      <a href="communaute.html">👥 Communauté</a>
    </nav>
  </header>

  <main>
    <section class="historique-container">
      <h2>💼 Historique des Transactions</h2>
      
      <div class="historique-table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Montant</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>06/08/2025</td>
              <td>Investissement</td>
              <td>10 000 FCFA</td>
              <td class="valide">✅ Confirmé</td>
            </tr>
            <tr>
              <td>05/08/2025</td>
              <td>Retrait</td>
              <td>5 000 FCFA</td>
              <td class="attente">⏳ En attente</td>
            </tr>
            <tr>
              <td>03/08/2025</td>
              <td>Bonus</td>
              <td>2 000 FCFA</td>
              <td class="valide">✅ Confirmé</td>
            </tr>
            <tr>
              <td>01/08/2025</td>
              <td>Recharge</td>
              <td>20 000 FCFA</td>
              <td class="valide">✅ Confirmé</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="info-box">
        📌 Astuce : consulte régulièrement cette page pour suivre tes investissements et retraits !
      </div>
    </section>
  </main>

  <footer>
    <p>&copy; 2025 EMAS. Tous droits réservés.</p>
  </footer>
</body>
</html>
body.historique-page {
  background: #f0f8ff;
  color: #000;
  font-family: Arial, sans-serif;
}

header {
  background: #007BFF;
  color: white;
  padding: 1rem;
  text-align: center;
}

header nav a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
  font-weight: bold;
}

header nav a.active {
  text-decoration: underline;
}

.historique-container {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px #ccc;
}

.historique-table table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
}

.historique-table th, .historique-table td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: center;
}

.historique-table .valide {
  color: green;
  font-weight: bold;
}

.historique-table .attente {
  color: orange;
  font-weight: bold;
}

.info-box {
  background: #e6f2ff;
  padding: 10px;
  margin-top: 20px;
  border-left: 5px solid #007BFF;
  font-size: 0.95rem;
}

footer {
  background: #007BFF;
  color: white;
  padding: 1rem;
  text-align: center;
  margin-top: 2rem;
}
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Mes Bonus - EMAS</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body class="emas-body">
  <header class="emas-header">
    <h1>🎁 Mes Bonus</h1>
    <nav>
      <a href="accueil.html">🏠 Accueil</a>
      <a href="historique.html">📜 Historique</a>
      <a href="bonus.html" class="active">🎁 Bonus</a>
      <a href="recharge.html">💳 Recharge</a>
      <a href="communaute.html">👥 Communauté</a>
      <a href="logout.html">🚪 Déconnexion</a>
    </nav>
  </header>

  <main class="emas-main">
    <section class="bonus-section">
      <h2>💰 Vos Gains de Bonus</h2>

      <div class="bonus-card">
        <h3>Bonus de parrainage</h3>
        <p>🔗 Total parrainés : <strong>12 personnes</strong></p>
        <p>🎉 Bonus reçu : <strong>18 000 FCFA</strong></p>
      </div>

      <div class="bonus-card">
        <h3>Bonus de niveau 2 et 3</h3>
        <p>🌟 Niveau 2 : <strong>6 000 FCFA</strong></p>
        <p>🌟 Niveau 3 : <strong>3 000 FCFA</strong></p>
      </div>

      <div class="bonus-total">
        <h3>💎 Total des bonus reçus : <span>27 000 FCFA</span></h3>
      </div>
    </section>
  </main>

  <footer class="emas-footer">
    <p>&copy; 2025 EMAS Invest. Tous droits réservés.</p>
  </footer>
</body>
</html>
body.emas-body {
  font-family: 'Segoe UI', sans-serif;
  background: #f0f8ff;
  color: #003366;
  margin: 0;
  padding: 0;
}

.emas-header {
  background: #007bff;
  color: white;
  padding: 20px;
  text-align: center;
}

.emas-header nav a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.emas-header nav a.active {
  text-decoration: underline;
}

.emas-main {
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

.bonus-section h2 {
  text-align: center;
  margin-bottom: 20px;
}

.bonus-card {
  background: white;
  border-left: 5px solid #007bff;
  padding: 15px;
  margin: 10px 0;
  border-radius: 6px;
  box-shadow: 0 0 6px rgba(0,0,0,0.1);
}

.bonus-total {
  background: #e0f0ff;
  text-align: center;
  padding: 15px;
  border-radius: 8px;
  margin-top: 20px;
}

footer.emas-footer {
  background: #003366;
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 14px;
}
