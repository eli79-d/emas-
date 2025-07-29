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