<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>EMAS </title>
<style>
  /* Reset & basiques */
  * { box-sizing: border-box; }
  body {
    <!-- LOGO EMAS (SVG) -->
<svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 640 220"
  role="img"
  aria-label="EMAS"
  class="logo-emas"
>
  <defs>
    <style>
      .fill-blue { fill:#0a66c2; }
      .round    { stroke-linecap:round; stroke-linejoin:round; }
    </style>
  </defs>

  <!-- Wordmark simplifié, lettres fusionnées -->
  <!-- E -->
  <path class="fill-blue"
        d="M40 45
           C40 25 55 10 75 10h115c10 0 18 8 18 18s-8 18-18 18H94v28h75c10 0 18 8 18 18s-8 18-18 18H94v28h96c10 0 18 8 18 18s-8 18-18 18H75c-20 0-35-15-35-35V45z"/>
  <!-- M (arcs arrondis) -->
  <path class="fill-blue"
        d="M250 45c0-19 15-35 34-35s34 16 34 35v70l36-53c7-10 17-17 30-17
           19 0 34 16 34 35v95c0 10-8 18-18 18s-18-8-18-18v-72l-37 52c-7 10-16 15-27 15s-20-5-27-15l-37-52v72c0 10-8 18-18 18s-18-8-18-18V45z"/>
  <!-- A (sans barre médiane visible, style monogramme) -->
  <path class="fill-blue"
        d="M485 185c-18 0-28-7-35-24l-34-86c-4-9 4-17 13-17h24c8 0 15 5 18 12l14 37h36l14-37c3-7 10-12 18-12h24c9 0 17 8 13 17l-34 86c-7 17-17 24-35 24h-36zm37-43l9-25h-54l9 25c2 5 6 8 11 8h14c5 0 9-3 11-8z"/>
  <!-- S (courbe lisse) -->
  <path class="fill-blue"
        d="M590 57c0-26 22-47 50-47 24 0 40 9 58 24 7 6 7 16 1 22l-8 8c-6 6-15 6-22 1-10-8-18-13-30-13-10 0-18 6-18 14 0 11 12 15 29 20 27 8 62 18 62 53 0 31-27 54-64 54-27 0-50-10-69-27-7-6-7-16-1-22l8-8c6-6 15-6 22-1 13 10 25 16 40 16 14 0 24-7 24-16 0-10-12-15-30-20-27-7-62-17-62-58z"/>
</svg>
margin:0; padding:0;
    font-family: Arial, sans-serif;
    background-collor : #ffffff
    color: white;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  a {
    color: #3b82f6;
    cursor: pointer;
    text-decoration: underline;
  }
  a:hover {
    color: #00e5ff;
  }

  /* Header */
  header {
    background: #ffffff;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  header h1 {
    margin: 0;
    color: #3b82f6;
    font-weight: 700;
    font-size: 1.8rem;
  }
  nav {
    display: flex;
    gap: 0.6rem;
    flex-wrap: wrap;
  }
  nav button {
    background: transparent;
    border: none;
    color: white;
    font-weight: 600;
    padding: 0.5rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 1rem;
    transition: background 0.3s ease;
  }
  nav button:hover,
  nav button.active {
    background: #00e5ff;
  }

  /* Main container */
  main.container {
    flex-grow: 1;
    max-width: 960px;
    margin: 1rem auto 2rem auto;
    background: #1e293b;
    border-radius: 12px;
    padding: 1.5rem;
    box-shadow: 0 0 15px #3b82f6aa;
  }

  /* Sections */
  section {
    display: none;
  }
  section.active {
    display: block;
  }

  h2 {
    color: #3b82f6;
    margin-bottom: 1rem;
  }
  h3 {
    margin-top: 1rem;
    margin-bottom: 0.6rem;
  }

  /* Form styling */
  label {
    display: block;
    margin-bottom: 0.25rem;
    font-weight: 600;
  }
  input, select, textarea {
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border-radius: 6px;
    border: none;
    font-size: 1rem;
  }
  button.primary {
    background: #3b82f6;
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 8px;
    font-weight: 700;
    color: white;
    cursor: pointer;
    transition: background 0.3s ease;
  }
  button.primary:hover {
    background: #2563eb;
  }

  /* Tables */
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
    color: white;
  }
  th, td {
    padding: 0.5rem 0.75rem;
    border-bottom: 1px solid #334155;
    text-align: left;
  }
  th {
    background: #334155;
  }

  /* Progress bar */
  progress {
    width: 100%;
    height: 1rem;
    border-radius: 6px;
  }

  /* Message */
  .message {
    font-weight: 700;
    margin-top: 0.5rem;
  }

  /* Graphique canvas */
  #profitChart {
    width: 100% !important;
    max-width: 100%;
    height: 200px !important;
    background: #334155;
    border-radius: 12px;
    padding: 1rem;
    box-sizing: border-box;
  }

  /* Responsive */
  @media (max-width: 600px) {
    main.container {
      margin: 1rem 1rem 2rem 1rem;
      padding: 1rem;
    }
    nav {
      justify-content: center;
    }
    nav button {
      padding: 0.4rem 0.8rem;
      font-size: 0.9rem;
    }
  }
</style>
</head>
<body>

<header>
  <h1>EMAS</h1>
  <nav id="mainNav">
    <!-- Boutons mis dynamiquement -->
  </nav>
</header>

<main class="container" id="mainContent">

  <!-- Connexion -->
  <section id="connexion" class="active">
    <h2>Connexion EMAS</h2>
    <form id="loginForm">
      <label for="loginCountryCode">Code indicatif</label>
      <select id="loginCountryCode" required>
        <option value="+228" selected>Togo (+228)</option>
        <option value="+229">Bénin (+229)</option>
        <option value="+225">Côte d'Ivoire (+225)</option>
        <option value="+226">Burkina Faso (+226)</option>
        <option value="+227">Niger (+227)</option>
      </select>

      <label for="loginPhoneNumber">Numéro de téléphone</label>
      <input type="tel" id="loginPhoneNumber" pattern="[0-9]{6,15}" placeholder="Ex: 90000000" required />

      <label for="loginPassword">Mot de passe</label>
      <input type="password" id="loginPassword" required />

      <button type="submit" class="primary">Se connecter maintenant</button>
    </form>
    <p class="message" id="loginMsg"></p>
    <p>Pas encore inscrit ? <a id="showSignupLink">S'inscrire ici</a></p>
  </section>

  <!-- Inscription -->
  <section id="inscription">
    <h2>Inscription EMAS</h2>
    <form id="signupForm">
      <label for="signupCountryCode">Code indicatif</label>
      <select id="signupCountryCode" required>
        <option value="+228" selected>Togo (+228)</option>
        <option value="+229">Bénin (+229)</option>
        <option value="+225">Côte d'Ivoire (+225)</option>
        <option value="+226">Burkina Faso (+226)</option>
        <option value="+227">Niger (+227)</option>
      </select>

      <label for="signupPhoneNumber">Numéro de téléphone</label>
      <input type="tel" id="signupPhoneNumber" pattern="[0-9]{6,15}" placeholder="Ex: 90000000" required />

      <label for="signupPseudo">Pseudo</label>
      <input type="text" id="signupPseudo" placeholder="Votre pseudo" required />

      <label for="signupPassword">Mot de passe</label>
      <input type="password" id="signupPassword" minlength="6" required />

      <label for="signupPasswordConfirm">Confirmer mot de passe</label>
      <input type="password" id="signupPasswordConfirm" minlength="6" required />

      <label for="signupInviteCode">Code d'invitation (optionnel)</label>
      <input type="text" id="signupInviteCode" placeholder="Code d'invitation" />

      <label for="Email>Adresse email </label>
      <input type="email"  id="email" name="email" required>

      <button type="submit" class="primary">S'inscrire maintenant</button>
    </form>
    <p class="message" id="signupMsg"></p>
    <p>Déjà inscrit ? <a id="showLoginLink">Se connecter ici</a></p>
  </section>

  <!-- ACCUEIL -->
  <section id="accueil">
    <h2>Bienvenue, <span id="userNameDisplay"></span></h2>
    <p>Téléphone : <span id="userPhoneDisplay"></span></p>
    <p>Solde : <strong><span id="userBalance"></span></strong></p>
    <canvas id="profitChart"></canvas>
    <div style="display:flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 1rem;">
      <button class="primary" data-target="retrait">Retrait</button>
      <button class="primary" data-target="compte">Compte</button>
      <button class="primary" data-target="bonus">Bonus</button>
      <button class="primary" data-target="historique">Historique</button>
      <button class="primary" data-target="recharge">Recharge</button>
      <button class="primary" data-target="communaute">Communauté</button>
      <button class="primary" data-target="support">Support</button>
      <button id="logoutBtn" style="margin-left:auto; background:#ef4444;">Se déconnecter</button>
    </div>
  </section>

  <!-- COMPTE -->
  <section id="compte">
    <h2>Portefeuille</h2>
    <form id="walletForm">
      <label for="walletMethod">Moyen de paiement</label>
      <select id="walletMethod" required>
        <option value="">-- Choisir --</option>
        <option value="MTN">MTN</option>
        <option value="Orange">Orange</option>
        <option value="Test">Test</option>
        <option value="Wave">Wave</option>
        <option value="TMoney">TMoney</option>
        <option value="Flooz">Flooz</option>
      </select>
      <label for="walletPseudo">Pseudo</label>
      <input type="text" id="walletPseudo" required />
      <label for="walletPhone">Numéro de téléphone</label>
      <input type="tel" id="walletPhone" pattern="[0-9]{6,15}" required />
      <label for="walletPwd">Mot de transaction</label>
      <input type="password" id="walletPwd" minlength="4" required />
      <button type="submit" class="primary">Créer un portefeuille</button>
    </form>
    <div id="walletMsg" class="message" style="color:#34d399;"></div>
    <p style="font-size: 0.85rem; margin-top:1rem; color:#ffffff;">
      1. Vous pouvez uniquement ajouter un portefeuille de transfert mobile money pour le retrait.<br />
      2. Veuillez-vous assurer que le numéro du portefeuille est correct et fonctionnel.
    </p>
  </section>

  <!-- RETRAIT -->
  <section id="retrait">
    <h2>Demande de retrait</h2>
    <form id="withdrawForm">
      <label for="withdrawAmount">Montant à retirer (min 1000 FCFA)</label>
      <input type="number" id="withdrawAmount" min="1000" max="10000000" required />
      <label for="withdrawPwd">Mot de passe de transaction</label>
      <input type="password" id="withdrawPwd" minlength="4" required />
      <button type="submit" class="primary">Demander un retrait</button>
    </form>
    <p style="font-size: 0.85rem; color: #94a3b8; margin-top:1rem;">
      Rappel :<br />
      - Retrait quotidien 24h/24, 7j/7.<br />
      - Montant entre 1000 FCFA et 10 000 000 FCFA.<br />
      - Une seule demande de retrait par jour.<br />
      - Taxe de retrait : 5%.
    </p>
    <div id="withdrawMsg" class="message"></div>
  </section>

  <!-- RECHARGE -->
  <section id="recharge">
    <h2>Recharger le compte</h2>
    <p>Solde actuel : <strong id="rechargeBalance"></strong></p>
    <form id="rechargeForm">
      <label for="rechargeAmount">Montant à recharger (min 2000 FCFA)</label>
      <input type="number" id="rechargeAmount" min="2000" required />
      <label for="rechargeMethod">Moyen de recharge</label>
      <select id="rechargeMethod" required>
        <option value="">-- Choisir --</option>
        <option value="MTN">MTN</option>
        <option value="Orange">Orange</option>
        <option value="Test">Test</option>
        <option value="Wave">Wave</option>
        <option value="TMoney">TMoney</option>
        <option value="Flooz">Flooz</option>
      </select>
      <label for="rechargePhone">Numéro de téléphone</label>
      <input type="tel" id="rechargePhone" pattern="[0-9]{6,15}" required />
      <button type="submit" class="primary">Recharger maintenant</button>
    </form>
    <div id="rechargeMsg" class="message" style="color:#34d399;"></div>
  </section>

  <!-- COMMUNAUTÉ -->
  <section id="communaute">
    <h2>Communauté</h2>
    <p>Votre lien d'affiliation :</p>
    <input type="text" id="affiliateLink" readonly style="width:100%; padding:0.5rem; background:#ffffff; border:none; border-radius:6px; color:#cbd5e1; user-select: all;" />
    <h3>Parrainages</h3>
    <label>Nombre de personnes parrainées :</label>
    <progress id="referralProgress" max="10" value="0"></progress>
    <p><span id="referralCount">0</span> / 10</p>
  </section>

  <!-- HISTORIQUE -->
  <section id="historique">
    <h2>Historique</h2>
    <div style="display:flex; gap: 1rem; flex-wrap: wrap;">
      <div style="flex:1; min-width:280px;">
        <h3>Historique des retraits</h3>
        <table id="historyWithdrawTable">
          <thead>
            <tr>
              <th>Statut</th>
              <th>Montant retiré (FCFA)</th>
              <th>Montant reçu (FCFA)</th>
              <th>Taxe (5%)</th>
              <th>Date & Heure</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
      <div style="flex:1; min-width:280px;">
        <h3>Historique des recharges</h3>
        <table id="historyRechargeTable">
          <thead>
            <tr>
              <th>Montant (FCFA)</th>
              <th>Date & Heure</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- BONUS -->
  <section id="bonus">
    <h2>Bonus</h2>
    <label>Nombre de personnes parrainées : <span id="bonusReferralCount">0</span></label>
    <progress id="bonusProgress" max="10" value="0"></progress>
    <p>À chaque 10 personnes parrainées, vous gagnez un bonus de 900 FCFA ajouté automatiquement à votre solde.</p>
  </section>

  <!-- SUPPORT -->
  <section id="support">
    <h2>Support</h2>
    <p>Pour toute question, contactez le support via :</p>
    <ul>
      <li>Email : support@emas.com</li>
      <li>Téléphone : https://wa.me/22892388045?text=Bonjour%20je%20viens%20du%20site%20EMAS
      <li>Chatbot disponible prochainement.</li>
    </ul>
  </section>
</main>

<!-- Chart.js CDN pour le graphique -->
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

<script>
  /* --- VARIABLES ET INITIALISATION --- */

  // Stockage utilisateurs et session simulée (localStorage)
  const STORAGE_USERS_KEY = 'emasUsers';
  const STORAGE_SESSION_KEY = 'emasCurrentUser';

  // Objets DOM
  const nav = document.getElementById('mainNav');
  const sections = {
    connexion: document.getElementById('connexion'),
    inscription: document.getElementById('inscription'),
    accueil: document.getElementById('accueil'),
    compte: document.getElementById('compte'),
    retrait: document.getElementById('retrait'),
    recharge: document.getElementById('recharge'),
    communaute: document.getElementById('communaute'),
    historique: document.getElementById('historique'),
    bonus: document.getElementById('bonus'),
    support: document.getElementById('support'),
  };

  // Messages
  const loginMsg = document.getElementById('loginMsg');
  const signupMsg = document.getElementById('signupMsg');
  const walletMsg = document.getElementById('walletMsg');
  const withdrawMsg = document.getElementById('withdrawMsg');
  const rechargeMsg = document.getElementById('rechargeMsg');

  // User info displays
  const userNameDisplay = document.getElementById('userNameDisplay');
  const userPhoneDisplay = document.getElementById('userPhoneDisplay');
  const userBalanceDisplay = document.getElementById('userBalance');
  const rechargeBalanceDisplay = document.getElementById('rechargeBalance');

  // Input refs
  const walletForm = document.getElementById('walletForm');
  const withdrawForm = document.getElementById('withdrawForm');
  const rechargeForm = document.getElementById('rechargeForm');
  const affiliateLinkInput = document.getElementById('affiliateLink');
  const referralProgress = document.getElementById('referralProgress');
  const referralCountSpan = document.getElementById('referralCount');
  const bonusReferralCount = document.getElementById('bonusReferralCount');
  const bonusProgress = document.getElementById('bonusProgress');

  // Chart setup
  let profitChart;
  const profitDataPoints = Array(7).fill(0).map(() => Math.floor(Math.random()*500)); // exemple aléatoire

  // Utilisateur connecté
  let currentUser = null;

  /* --- FONCTIONS UTILITAIRES --- */

  // Récupérer tous les utilisateurs
  function getAllUsers() {
    return JSON.parse(localStorage.getItem(STORAGE_USERS_KEY) || '[]');
  }

  // Sauvegarder tous les utilisateurs
  function saveAllUsers(users) {
    localStorage.setItem(STORAGE_USERS_KEY, JSON.stringify(users));
  }

  // Mettre à jour session utilisateur
  function setCurrentUser(user) {
    currentUser = user;
    localStorage.setItem(STORAGE_SESSION_KEY, JSON.stringify(user));
  }

  // Charger session utilisateur
  function loadCurrentUser() {
    const u = JSON.parse(localStorage.getItem(STORAGE_SESSION_KEY));
    if(u) currentUser = u;
    return currentUser;
  }

  // Effacer session utilisateur
  function clearSession() {
    currentUser = null;
    localStorage.removeItem(STORAGE_SESSION_KEY);
  }

  // Trouver utilisateur par phone
  function findUserByPhone(phone) {
    const users = getAllUsers();
    return users.find(u => u.phone === phone);
  }

  // Mettre à jour utilisateur (remplacer dans tableau)
  function updateUser(updatedUser) {
    const users = getAllUsers();
    const idx = users.findIndex(u => u.phone === updatedUser.phone);
    if(idx !== -1) {
      users[idx] = updatedUser;
      saveAllUsers(users);
    }
  }

  // Format date simple
  function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleString('fr-FR', { dateStyle:'short', timeStyle:'short' });
  }

  /* --- GESTION DE LA NAVIGATION --- */

  function showSection(name) {
    for(const key in sections) {
      if(key === name) sections[key].classList.add('active');
      else sections[key].classList.remove('active');
    }
    updateNavActive(name);
  }

  function updateNavActive(name) {
    [...nav.children].forEach(btn => {
      if(btn.dataset.target === name) btn.classList.add('active');
      else btn.classList.remove('active');
    });
  }

  // Créer menu nav après connexion
  function buildNavMenu() {
    nav.innerHTML = '';
    const tabs = ['accueil','compte','retrait','recharge','communaute','historique','bonus','support'];
    tabs.forEach(t => {
      const btn = document.createElement('button');
      btn.textContent = t.charAt(0).toUpperCase() + t.slice(1);
      btn.dataset.target = t;
      btn.addEventListener('click', () => showSection(t));
      nav.appendChild(btn);
    });
  }

  /* --- INSCRIPTION --- */

  const signupForm = document.getElementById('signupForm');
  signupForm.addEventListener('submit', e => {
    e.preventDefault();
    signupMsg.style.color = 'red';
    signupMsg.textContent = '';

    // Récupérer valeurs
    const code = document.getElementById('signupCountryCode').value;
    const phone = document.getElementById('signupPhoneNumber').value.trim();
    const pseudo = document.getElementById('signupPseudo').value.trim();
    const password = document.getElementById('signupPassword').value;
    const passwordConfirm = document.getElementById('signupPasswordConfirm').value;
    const inviteCode = document.getElementById('signupInviteCode').value.trim();
    const email = document.getElementById('signupemail').value.trim();

    if(!phone.match(/^[0-9]{6,15}$/)) {
      signupMsg.textContent = 'Numéro de téléphone invalide.';
      return;
    }
    if(password.length < 6) {
      signupMsg.textContent = 'Mot de passe trop court (min 6 caractères).';
      return;
    }
    if(password !== passwordConfirm) {
      signupMsg.textContent = 'Les mots de passe ne correspondent pas.';
      return;
    }
    if(email() !== Adresseemail) {
      signupMsg.textContent = 'exemple@gmail.com.';
      return;
    }

    const fullPhone = code + phone;
    let users = getAllUsers();
    if(users.some(u => u.phone === fullPhone)) {
      signupMsg.textContent = 'Ce numéro est déjà inscrit.';
      return;
    }

    // Ajouter utilisateur
    const newUser = {
      phone: fullPhone,
      pseudo,
      password,
      balance: 0,
      wallet: null,
      referrals: 0,
      historyWithdraw: [],
      historyRecharge: [],
      inviteCode: inviteCode || null,
      dailyWithdrawDate: null,
      bonusesEarned: 0,
    };
    users.push(newUser);
    saveAllUsers(users);

    signupMsg.style.color = '#34d399';
    signupMsg.textContent = 'Inscription réussie ! Vous pouvez maintenant vous connecter.';
    signupForm.reset();
  });

  /* --- CONNEXION --- */

  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit', e => {
    e.preventDefault();
    loginMsg.style.color = 'red';
    loginMsg.textContent = '';

    const code = document.getElementById('loginCountryCode').value;
    const phone = document.getElementById('loginPhoneNumber').value.trim();
    const password = document.getElementById('loginPassword').value;

    if(!phone.match(/^[0-9]{6,15}$/)) {
      loginMsg.textContent = 'Numéro de téléphone invalide.';
      return;
    }
    if(!password) {
      loginMsg.textContent = 'Mot de passe requis.';
      return;
    }

    const fullPhone = code + phone;
    let users = getAllUsers();
    const user = users.find(u => u.phone === fullPhone && u.password === password);
    if(user) {
      setCurrentUser(user);
      loginMsg.style.color = '#34d399';
      loginMsg.textContent = Connexion réussie, bienvenue ${user.pseudo} !;
      setTimeout(() => {
        showDashboard();
      }, 700);
    } else {
      loginMsg.textContent = 'Identifiants incorrects.';
    }
  });

  // Basculer entre inscription et connexion
  document.getElementById('showSignupLink').addEventListener('click', e => {
    e.preventDefault();
    showSection('inscription');
  });
  document.getElementById('showLoginLink').addEventListener('click', e => {
    e.preventDefault();
    showSection('connexion');
  });

  /* --- AFFICHAGE DASHBOARD --- */

  function showDashboard() {
    buildNavMenu();
    updateUserDataUI();
    showSection('accueil');
  }

  // Met à jour affichage infos utilisateur dans dashboard
  function updateUserDataUI() {
    currentUser = loadCurrentUser();
    if(!currentUser) {
      alert('Session expirée, veuillez vous reconnecter.');
      logout();
      return;
    }
    userNameDisplay.textContent = currentUser.pseudo;
    userPhoneDisplay.textContent = currentUser.phone;
    userBalanceDisplay.textContent = currentUser.balance.toLocaleString() + ' FCFA';
    rechargeBalanceDisplay.textContent = currentUser.balance.toLocaleString() + ' FCFA';

    // Lien d'affiliation
    const baseUrl = location.origin + location.pathname;
    affiliateLinkInput.value = ${baseUrl}?ref=${encodeURIComponent(currentUser.phone)};

    // Parrainages
    referralCountSpan.textContent = currentUser.referrals || 0;
    referralProgress.value = Math.min(currentUser.referrals || 0, 10);
    bonusReferralCount.textContent = currentUser.referrals || 0;
    bonusProgress.value = Math.min(currentUser.referrals || 0, 10);

    // Afficher historique
    renderHistory();

    // Dessiner graphique profit
    drawProfitChart();

  }

  /* --- LOGOUT --- */
  document.getElementById('logoutBtn').addEventListener('click', () => {
    logout();
  });
  function logout() {
    clearSession();
    nav.innerHTML = '';
    showSection('connexion');
  }

  /* --- GESTION PORTEFEUILLE --- */

  walletForm.addEventListener('submit', e => {
    e.preventDefault();
    walletMsg.style.color = 'red';
    walletMsg.textContent = '';

    const method = document.getElementById('walletMethod').value;
    const pseudo = document.getElementById('walletPseudo').value.trim();
    const phone = document.getElementById('walletPhone').value.trim();
    const pwd = document.getElementById('walletPwd').value;

    if(!method) {
      walletMsg.textContent = 'Veuillez choisir un moyen de paiement.';
      return;
    }
    if(!phone.match(/^[0-9]{6,15}$/)) {
      walletMsg.textContent = 'Numéro de téléphone invalide.';
      return;
    }
    if(pwd.length < 4) {
      walletMsg.textContent = 'Le mot de transaction doit contenir au moins 4 caractères.';
      return;
    }

    currentUser.wallet = { method, pseudo, phone, transactionPwd: pwd };
    updateUser(currentUser);
    setCurrentUser(currentUser);

    walletMsg.style.color = '#34d399';
    walletMsg.textContent = 'Portefeuille créé avec succès.';
    walletForm.reset();
  });

  /* --- GESTION RETRAIT --- */

  withdrawForm.addEventListener('submit', e => {
    e.preventDefault();
    withdrawMsg.style.color = 'red';
    withdrawMsg.textContent = '';

    if(!currentUser.wallet) {
      withdrawMsg.textContent = 'Vous devez d\'abord créer un portefeuille dans l\'onglet Compte.';
      return;
    }

    const amount = parseInt(document.getElementById('withdrawAmount').value);
    const pwd = document.getElementById('withdrawPwd').value;

    if(isNaN(amount) || amount < 1000 || amount > 10000000) {
      withdrawMsg.textContent = 'Le montant doit être entre 1000 et 10 000 000 FCFA.';
      return;
    }

    if(pwd !== currentUser.wallet.transactionPwd) {
      withdrawMsg.textContent = 'Mot de passe de transaction incorrect.';
      return;
    }

    // Vérifier si déjà retrait aujourd'hui
    const lastDate = currentUser.dailyWithdrawDate ? new Date(currentUser.dailyWithdrawDate) : null;
    const now = new Date();
    if(lastDate) {
      const diff = now - lastDate;
      if(diff < 24*60*60*1000) {
        withdrawMsg.textContent = 'Vous ne pouvez faire qu\'un seul retrait par jour.';
        return;
      }
    }

    if(amount > currentUser.balance) {
      withdrawMsg.textContent = 'Solde insuffisant.';
      return;
    }

    // Calcul taxe 5%
    const tax = Math.round(amount * 0.05);
    const received = amount - tax;

    // Mettre à jour solde
    currentUser.balance -= amount;

    // Historique retrait
    currentUser.historyWithdraw.push({
      status: 'réussi',
      amount,
      tax,
      received,
      date: now.toISOString()
    });

    currentUser.dailyWithdrawDate = now.toISOString();

    // Bonus 5% pour toi sur retrait (enregistrement dans bonusEarned)
    currentUser.bonusesEarned += tax;

    updateUser(currentUser);
    setCurrentUser(currentUser);

    withdrawMsg.style.color = '#34d399';
    withdrawMsg.textContent = Retrait de ${amount.toLocaleString()} FCFA effectué avec succès. Montant reçu : ${received.toLocaleString()} FCFA. Taxe : ${tax.toLocaleString()} FCFA.;

    updateUserDataUI();
    withdrawForm.reset();
  });

  /* --- GESTION RECHARGE --- */

  rechargeForm.addEventListener('submit', e => {
    e.preventDefault();
    rechargeMsg.style.color = 'red';
    rechargeMsg.textContent = '';

    const amount = parseInt(document.getElementById('rechargeAmount').value);
    const method = document.getElementById('rechargeMethod').value;
    const phone = document.getElementById('rechargePhone').value.trim();

    if(isNaN(amount) || amount < 2000) {
      rechargeMsg.textContent = 'Le montant minimum de recharge est 2000 FCFA.';
      return;
    }
    if(!method) {
      rechargeMsg.textContent = 'Veuillez choisir un moyen de recharge.';
      return;
    }
    if(!phone.match(/^[0-9]{6,15}$/)) {
      rechargeMsg.textContent = 'Numéro de téléphone invalide.';
      return;
    }

    // Ajouter au solde
    currentUser.balance += amount;

    // Historique recharge
    currentUser.historyRecharge.push({
      amount,
      date: new Date().toISOString()
    });

    updateUser(currentUser);
    setCurrentUser(currentUser);

    rechargeMsg.style.color = '#34d399';
    rechargeMsg.textContent = Recharge de ${amount.toLocaleString()} FCFA effectuée avec succès.;

    updateUserDataUI();
    rechargeForm.reset();
  });

  /* --- RENDU HISTORIQUE --- */

  function renderHistory() {
    const withdrawBody = document.querySelector('#historyWithdrawTable tbody');
    const rechargeBody = document.querySelector('#historyRechargeTable tbody');
    withdrawBody.innerHTML = '';
    rechargeBody.innerHTML = '';

    if(currentUser.historyWithdraw.length === 0) {
      withdrawBody.innerHTML = '<tr><td colspan="5" style="text-align:center;">Aucun retrait enregistré</td></tr>';
    } else {
      currentUser.historyWithdraw.forEach(w => {
        const tr = document.createElement('tr');
        const statusColor = w.status === 'réussi' ? '#34d399' : '#ef4444';
        tr.innerHTML = `
          <td style="color:${statusColor}; font-weight:bold;">${w.status}</td>
          <td>${w.amount.toLocaleString()}</td>
          <td>${w.received.toLocaleString()}</td>
          <td>${w.tax.toLocaleString()}</td>
          <td>${formatDate(w.date)}</td>
        `;
        withdrawBody.appendChild(tr);
      });
    }

    if(currentUser.historyRecharge.length === 0) {
      rechargeBody.innerHTML = '<tr><td colspan="2" style="text-align:center;">Aucune recharge enregistrée</td></tr>';
    } else {
      currentUser.historyRecharge.forEach(r => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
          <td>${r.amount.toLocaleString()}</td>
          <td>${formatDate(r.date)}</td>
        `;
        rechargeBody.appendChild(tr);
      });
    }
  }

  /* --- GRAPHIQUE PROFIT --- */
  function drawProfitChart() {
    const ctx = document.getElementById('profitChart').getContext('2d');
    if(profitChart) profitChart.destroy();

    // Exemple de données simulées journalières sur 7 jours
    const labels = [];
    for(let i=6; i>=0; i--) {
      const d = new Date();
      d.setDate(d.getDate()-i);
      labels.push(d.toLocaleDateString('fr-FR', { weekday: 'short' }));
    }

    // Pour exemple, on fait varier le profit entre 0 et 100000000 FCFA
    let dataPoints = [];
    if(currentUser && currentUser.historyWithdraw) {
      // Simuler un profil aléatoire ici (ou utiliser données réelles)
      dataPoints = Array(7).fill(0).map(() => Math.floor(Math.random()*100000000));
    } else {
      dataPoints = Array(7).fill(0);
    }

    profitChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Profil journalier (FCFA)',
          data: dataPoints,
          fill: true,
          borderColor: '#3b82f6',
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          tension: 0.3,
          pointRadius: 5,
          pointHoverRadius: 7,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: true, labels: { color: 'white' } }
        },
        scales: {
          x: { ticks: { color: 'white' }},
          y: { ticks: { color: 'white' }}
        }
      }
    });
  }

  /* --- BONUS --- */
  // Bonus à chaque 10 parrainages, 900 FCFA ajouté automatiquement au solde
  function checkBonus() {
    if(!currentUser) return;
    const count = currentUser.referrals || 0;
    const bonusesGiven = currentUser.bonusesEarnedCount || 0;
    const bonusToGive = Math.floor(count / 10);

    if(bonusToGive > bonusesGiven) {
      // Donner bonus
      const newBonusCount = bonusToGive;
      const bonusDiff = (bonusToGive - bonusesGiven) * 900;

      currentUser.balance += bonusDiff;
      currentUser.bonusesEarnedCount = newBonusCount;
      updateUser(currentUser);
      setCurrentUser(currentUser);
      updateUserDataUI();
      alert(Félicitations ! Vous avez gagné un bonus de ${bonusDiff.toLocaleString()} FCFA.);
    }
  }

  /* --- INITIALISATION --- */

  window.onload = () => {
    const user = loadCurrentUser();
    if(user) {
      currentUser = user;
      buildNavMenu();
      updateUserDataUI();
      showSection('accueil');
      checkBonus();
    } else {
      showSection('connexion');
    }
  };

  // Navigation des boutons de l'accueil
  document.querySelectorAll('#accueil button[data-target]').forEach(btn => {
    btn.addEventListener('click', e => {
      const target = e.target.dataset.target;
      showSection(target);
    });
  });

</script>

</body>
</html>


