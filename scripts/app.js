import {getRecords, addRecord, deleteRecord } from './state.js';
import {validateDesc, validateAmount, validateDate, checkAdvanced } from './validators.js';
import { compileRegex } from './search.js';
import {renderTable, renderStats } from './ui.js';

const tbody = document.getElementById('tbody');
const searchInput = document.getElementById('search');
const capInput = document.getElementById('cap');
const form = document.getElementById('form');
const modal = document.getElementById('modal');
const errSpan = document.getElementById('error');

const elements = {
    income: document.getElementById('income'),
    expenses: document.getElementById('expenses'),
    balance: document.getElementById('balance'),
    liveMsg: document.getElementById('live-msg')
};

function updateView() {
    const re = compileRegex(searchInput.value);
    const records = getRecords();
    const filtered = records.filter(r => !re || re.test(r.description) || re.test(r.category));

    renderTable(filtered, tbody, re);
    renderStats(records, capInput, elements);
}

window.toggleModal = (show) => modal.classList.toggle('active', show);

form.onsubmit = (e) => {
    e.preventDefault();
    const desc = document.getElementById('desc').value.trim();
    const rawAmt = document.getElementById('amount').value.trim();
    const cat = document.getElementById('cat').value;
    const date = document.getElementById('date').value;

    if (!validateDesc(desc) || checkAdvanced(desc)) { errSpan.textContent = 'Invalid description or duplicate words.'; return; }
    if (!validateAmount(rawAmt)) {errSpan.textContent = 'Invalid amount format.'; return; }
    if (!validateDate(date)) { errSpan.textContent = 'Invalid date format (YYYY-MM-DD).'; return; }
    errSpan.textContent = '';

    const amount = cat === 'Income' ? Math.abs(parseFloat(rawAmt)) : -Math.abs(parseFloat(rawAmt));
    addRecord({ id: 'txn_' + Date.now(), description: desc, amount, category: cat, date });

    toggleModal(false);
    form.reset();
    updateView();
};

tbody.onclick = (e) => {
    if (e.target.classList.contains('del-btn')) {
        deleteRecord(e.target.dataset.id);
        updateView();
    }
};

searchInput.oninput = updateView;
capInput.oninput = updateView;

window.exportJSON = () => {
    const blob = new Blob([JSON.stringify(getRecords(), null, 2)], {type: 'application/json'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'seed.json'; a.click();
};

updateView();