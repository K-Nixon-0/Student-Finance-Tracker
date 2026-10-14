import { highlight } from './search.js';
export const renderTable = (records, tbody, re) => {
    tbody.innerHTML = records.length ? records.map(r => `
        <tr>
          <td>${highlight(r.description, re)}</td>
          <td>${r.category}</td>
          <td>${r.date}</td>
          <td style="color:${r.amount > 0 ? '#10b981' : 'inherit'}; font-weight:500;">${r.amount > 0 ? '+' : ''}$${Number(r.amount).toFixed(2)}</td>
          <td><button data-id="${r.id}" class="del-btn" style="background: none; color: #ef4444; border:none; cursor: pointer;">Delete</button></td>
        </tr>
    `).join('') : `<tr><td colspan="5" style="text-align:center; color:#6b7280;">No records found.</td></tr>`;
};

export const renderStats = (records, capInput, elements) => {
    const inc = records.filter(r => r.amount > 0).reduce((a,b) => a + b.amount, 0);
    const sp = records.filter(r => r.amount < 0).reduce((a, b) => a + Math.abs(b.amount), 0);

    elements.income.textContent = `$${inc.toFixed(2)}`;
    elements.expenses.textContent = `$${sp.toFixed(2)}`;
    elements.balance.textContent = `$${(inc - sp).toFixed(2)}`;

    const cap = parseFloat(capInput.value) || 1500;
    const diff = cap - sp;
    elements.liveMsg.setAttribute('aria-live', diff >= 0 ? 'polite' : 'assertive');
    elements.liveMsg.textContent = diff >= 0 ? `You are on track ($${diff.toFixed(2)} remaining)` : `Budget exceeded by $${Math.abs(diff).toFixed(2)}!`;
    elements.liveMsg.style.color = diff >= 0 ? '#1b4d3e' : '#ef4444';
};