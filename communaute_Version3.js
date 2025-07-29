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