<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Accueil - EmaInvest</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body class="light-mode">
    <header>
        <h1>Bienvenue sur EmaInvest</h1>
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="bonus.html">Bonus</a></li>
                <li><a href="recharge.html">Recharge</a></li>
                <li><a href="retrait.html">Retrait</a></li>
                <li><a href="communaute.html">Communauté</a></li>
                <li><a href="historique.html">Historique</a></li>
                <li><a href="support.html">Support</a></li>
            </ul>
        </nav>
        <button id="themeToggle">Mode Sombre/Clair</button>
    </header>

    <section id="auth">
        <h2>Connexion</h2>
        <form id="loginForm">
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Mot de passe" required>
            <button type="submit">Se connecter</button>
        </form>

        <h2>Inscription</h2>
        <form id="signupForm">
            <input type="text" placeholder="Nom complet" required>
            <input type="email" placeholder="Email" required>
            <input type="password" placeholder="Mot de passe" required>
            <button type="submit">S'inscrire</button>
        </form>
    </section>

    <section id="stats">
        <h2>Progrès réalisés</h2>
        <canvas id="performanceChart"></canvas>
        <div>
            <label for="filter">Filtrer par :</label>
            <select id="filter">
                <option value="semaine">Semaine</option>
                <option value="mois">Mois</option>
            </select>
        </div>
    </section>

    <section id="badges">
        <h2>Vos badges</h2>
        <ul>
            <li>Bronze : 50 personnes parrainées</li>
            <li>Argent : 150 personnes parrainées</li>
            <li>Or : 250 personnes parrainées</li>
            <li>Diamant : 250+ personnes parrainées</li>
        </ul>
    </section>

    <div id="chatbot">
        <button id="chatToggle">Support</button>
        <div id="chatWindow">
            <p>Bonjour ! Comment puis-je vous aider ?</p>
            <input type="text" placeholder="Écrire un message...">
            <button>Envoyer</button>
        </div>
    </div>

    <footer>
        <p>&copy; 2025 EmaInvest. Tous droits réservés.</p>
    </footer>
</body>
</html>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bonus - EmaInvest</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <h1>Bonus</h1>
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="bonus.html">Bonus</a></li>
                <li><a href="recharge.html">Recharge</a></li>
                <li><a href="retrait.html">Retrait</a></li>
                <li><a href="communaute.html">Communauté</a></li>
                <li><a href="historique.html">Historique</a></li>
                <li><a href="support.html">Support</a></li>
            </ul>
        </nav>
    </header>

    <section id="bonusSection">
        <h2>Récupérer vos bonus</h2>
        <p>Votre titre actuel : <span id="userTitle">Bronze</span></p>
        <button id="recupererBtn">Récupérer</button>
    </section>

    <footer>
        <p>&copy; 2025 EmaInvest. Tous droits réservés.</p>
    </footer>
</body>
</html>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recharge - EmaInvest</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <h1>Recharge</h1>
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="bonus.html">Bonus</a></li>
                <li><a href="recharge.html">Recharge</a></li>
                <li><a href="retrait.html">Retrait</a></li>
                <li><a href="communaute.html">Communauté</a></li>
                <li><a href="historique.html">Historique</a></li>
                <li><a href="support.html">Support</a></li>
            </ul>
        </nav>
    </header>

    <section id="rechargeSection">
        <h2>Ajouter des fonds</h2>
        <input type="number" placeholder="Montant à recharger">
        <button>Recharger</button>
    </section>

    <footer>
        <p>&copy; 2025 EmaInvest. Tous droits réservés.</p>
    </footer>
</body>
</html>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Retrait - EmaInvest</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <h1>Retrait</h1>
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="bonus.html">Bonus</a></li>
                <li><a href="recharge.html">Recharge</a></li>
                <li><a href="retrait.html">Retrait</a></li>
                <li><a href="communaute.html">Communauté</a></li>
                <li><a href="historique.html">Historique</a></li>
                <li><a href="support.html">Support</a></li>
            </ul>
        </nav>
    </header>

    <section id="retraitSection">
        <h2>Retirer vos fonds</h2>
        <input type="number" placeholder="Montant à retirer">
        <button>Retirer</button>
    </section>

    <footer>
        <p>&copy; 2025 EmaInvest. Tous droits réservés.</p>
    </footer>
</body>
</html>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Communauté - EmaInvest</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <h1>Communauté</h1>
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="bonus.html">Bonus</a></li>
                <li><a href="recharge.html">Recharge</a></li>
                <li><a href="retrait.html">Retrait</a></li>
                <li><a href="communaute.html">Communauté</a></li>
                <li><a href="historique.html">Historique</a></li>
                <li><a href="support.html">Support</a></li>
            </ul>
        </nav>
    </header>

    <section id="communitySection">
        <h2>Membres et Parrainages</h2>
        <p>Liste des membres et parrainages sera affichée ici.</p>
    </section>

    <footer>
        <p>&copy; 2025 EmaInvest. Tous droits réservés.</p>
    </footer>
</body>
</html>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Support - EmaInvest</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <h1>Support</h1>
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="bonus.html">Bonus</a></li>
                <li><a href="recharge.html">Recharge</a></li>
                <li><a href="retrait.html">Retrait</a></li>
                <li><a href="communaute.html">Communauté</a></li>
                <li><a href="historique.html">Historique</a></li>
                <li><a href="support.html">Support</a></li>
            </ul>
        </nav>
    </header>

    <section id="supportSection">
        <h2>Contactez-nous</h2>
        <p>Email : emasinvest3@gmail.com</p>
        <p>Numéro : 92388045</p>
    </section>

    <footer>
        <p>&copy; 2025 EmaInvest. Tous droits réservés.</p>
    </footer>
</body>
</html>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Historique - EmaInvest</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js" defer></script>
</head>
<body>
    <header>
        <h1>Historique</h1>
        <nav>
            <ul>
                <li><a href="index.html">Accueil</a></li>
                <li><a href="bonus.html">Bonus</a></li>
                <li><a href="recharge.html">Recharge</a></li>
                <li><a href="retrait.html">Retrait</a></li>
                <li><a href="communaute.html">Communauté</a></li>
                <li><a href="historique.html">Historique</a></li>
                <li><a href="support.html">Support</a></li>
            </ul>
        </nav>
    </header>

    <section id="historySection">
        <h2>Historique des transactions</h2>
        <p>Liste des recharges, retraits et gains sera affichée ici.</p>
    </section>

    <footer>
        <p>&copy; 2025 EmaInvest. Tous droits réservés.</p>
    </footer>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f0f4f8;
    color: #333;
}

header, footer {
    background-color: #004aad;
    color: white;
    padding: 15px;
    text-align: center;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 20px;
    padding: 0;
}

nav a {
    color: white;
    text-decoration: none;
}

section {
    padding: 20px;
}

#chatbot {
    position: fixed;
    bottom: 20px;
    right: 20px;
}

#chatWindow {
    display: none;
    background-color: white;
    border: 1px solid #ccc;
    padding: 10px;
}

.light-mode {
    background-color: #f0f4f8;
    color: #333;
}

.dark-mode {
    background-color: #121212;
    color: #f0f4f8;
}
// Mode clair / sombre
const themeToggle = document.getElementById("themeToggle");
if(themeToggle){
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        document.body.classList.toggle("light-mode");
    });
}

// Chatbot flottant
const chatToggle = document.getElementById("chatToggle");
const chatWindow = document.getElementById("chatWindow");
if(chatToggle && chatWindow){
    chatToggle.addEventListener("click", () => {
        chatWindow.style.display = chatWindow.style.display === "block" ? "none" : "block";
    });
}

// Bonus : activation bouton selon titre
const recupererBtn = document.getElementById("recupererBtn");
const userTitle = document.getElementById("userTitle");

function updateBonusButton(title) {
    if(title){
        recupererBtn.disabled = false;
    }
}

if(userTitle){
    updateBonusButton(userTitle.textContent);
}



