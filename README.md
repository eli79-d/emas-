<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>EMAS - Plateforme d'investissement</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
<style>
/* Reset & basiques */
* { box-sizing: border-box; }
body { margin:0; padding:0; font-family: Arial, sans-serif; background: #f0f8ff; color: #1a202c; min-height: 100vh; display: flex; flex-direction: column; transition: background 0.3s, color 0.3s; }
a { color: #1e3a8a; cursor: pointer; text-decoration: underline; }
a:hover { color: #2563eb; }
header { background: #1e40af; padding: 1rem 2rem; display: flex; justify-content: space-between; align-items: center; color: #fff; }
header h1 { margin: 0; color: #fff; font-weight: 700; font-size: 1.8rem; }
nav { display: flex; gap: 0.6rem; flex-wrap: wrap; }
nav button { background: transparent; border: none; color: #fff; font-weight: 600; padding: 0.5rem 1rem; border-radius: 6px; cursor: pointer; font-size: 1rem; transition: background 0.3s ease; }
nav button:hover, nav button.active { background: #3b82f6; }
main.container { flex-grow: 1; max-width: 960px; margin: 1rem auto 2rem auto; background: #e0f2fe; border-radius: 12px; padding: 1.5rem; box-shadow: 0 0 15px #3b82f6aa; transition: background 0.3s; }
section { display: none; }
section.active { display: block; }
h2 { color: #1e40af; margin-bottom: 1rem; }
button.primary { background: #3b82f6; border: none; padding: 0.75rem 1rem; border-radius: 8px; font-weight: 700; color: white; cursor: pointer; transition: transform 0.2s, background 0.3s ease; }
button.primary:hover { background: #2563eb; transform: scale(1.05); }
.chatbot { position: fixed; bottom: 20px; right: 20px; background: #3b82f6; border-radius: 50%; width: 60px; height: 60px; display: flex; justify-content: center; align-items: center; cursor: pointer; box-shadow: 0 5px 15px rgba(0,0,0,0.3); transition: transform 0.2s; z-index:1000; }
.chatbot:hover { transform: scale(1.1); }
.chat-window { position: fixed; bottom: 90px; right: 20px; width: 300px; max-height: 400px; background: #fff; color: #000; border-radius: 12px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); overflow-y: auto; display: none; flex-direction: column; z-index:1000; }
.chat-window header { background: #3b82f6; color: #fff; padding: 0.5rem; border-radius: 12px 12px 0 0; }
.chat-window .messages { flex-grow:1; padding: 0.5rem; }
.chat-window input { width: calc(100% - 10px); padding: 0.5rem; margin: 5px; border-radius: 6px; border: 1px solid #ccc; }
@media (max-width: 600px) { main.container { margin: 1rem 1rem 2rem 1rem; padding: 1rem; } nav { justify-content: center; } nav button { padding: 0.4rem 0.8rem; font-size: 0.9rem; } }
</style>
</head>
<body>
<header>
<h1>EMAS</h1>
<nav id="mainNav"></nav>
</header>
<main class="container" id="mainContent">
<section id="connexion" class="active">
<h2>Connexion EMAS</h2>
<form id="loginForm">
<label for="loginPhone">Téléphone</label>
<input type="tel" id="loginPhone" placeholder="Ex: 90000000" required />
<label for="loginPassword">Mot de passe</label>
<input type="password" id="loginPassword" required />
<button type="submit" class="primary"><i class="fas fa-right-to-bracket"></i> Se connecter</button>
</form>
<p>Pas encore inscrit ? <a id="showSignupLink">S'inscrire ici</a></p>
</section>
<section id="inscription">
<h2>Inscription EMAS</h2>
<form id="signupForm">
<label for="signupPhone">Téléphone</label>
<input type="tel" id="signupPhone" placeholder="Ex: 90000000" required />
<label for="signupPseudo">Pseudo</label>
<input type="text" id="signupPseudo" placeholder="Votre pseudo" required />
<label for="signupPassword">Mot de passe</label>
<input type="password" id="signupPassword" required />
<button type="submit" class="primary"><i class="fas fa-user-plus"></i> S'inscrire</button>
</form>
<p>Déjà inscrit ? <a id="showLoginLink">Se connecter ici</a></p>
</section>
<section id="accueil">
<h2>Bienvenue, <span id="userNameDisplay"></span></h2>
<p>Solde : <span id="userBalance"></span></p>
<canvas id="profitChart"></canvas>
<div style="display:flex; flex-wrap: wrap; gap:0.8rem; margin-top:1rem;">
<button class="primary" data-target="bonus"><i class="fas fa-gift"></i> Bonus</button>
<button class="primary" data-target="compte"><i class="fas fa-wallet"></i> Compte</button>
<button id="logoutBtn" class="primary" style="background:#ef4444;"><i class="fas fa-right-from-bracket"></i> Déconnexion</button>
</div>
<div id="badgeLevel"></div>
</section>
<section id="bonus">
<h2>Bonus</h2>
<p>Votre niveau: <span id="bonusLevel">Bronze</span></p>
<p>Filleuls parrainés: <span id="bonusReferralCount">0</span></p>
<button id="bonusButton" class="primary" disabled><i class="fas fa-hand-holding-dollar"></i> Récupérer</button>
</section>
<section id="support">
<h2>Support</h2>
<p>Email : emasinvest3@gmail.com</p>
<p>Numéro : 92388045</p>
</section>
</main>
<div class="chatbot" id="chatbot"><i class="fas fa-comments"></i></div>
<div class="chat-window" id="chatWindow"><header>Support EMAS</header><div class="messages"></div><input type="text" id="chatInput" placeholder="Écrivez votre message..."/></div>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
const chatbotBtn = document.getElementById('chatbot');
const chatWindow = document.getElementById('chatWindow');
chatbotBtn.addEventListener('click', ()=>{ chatWindow.style.display = chatWindow.style.display==='flex' ? 'none':'flex'; });
const bonusButton = document.getElementById('bonusButton');
function updateBonus() {
  const referrals = parseInt(document.getElementById('bonusReferralCount').textContent);
  let level = 'Bronze';
  let enable = false;
  if(referrals>=250) { level='Diamant'; enable = referrals%20===0; }
  else if(referrals>=150) { level='Or'; enable = referrals>=250?false:true; }
  else if(referrals>=50) { level='Argent'; enable = referrals>=150?false:true; }
  document.getElementById('bonusLevel').textContent = level;
  bonusButton.disabled = !enable;
}
updateBonus();
bonusButton.addEventListener('click', ()=>{ alert('Bonus récupéré !'); });
</script>
</body>
</html>
