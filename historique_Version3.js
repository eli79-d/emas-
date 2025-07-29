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