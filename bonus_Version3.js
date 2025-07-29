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