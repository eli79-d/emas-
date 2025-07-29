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