import {getRecords, addRecord, deleteRecord } from './state.js';
import {validateDesc, validateAmount, validateDate, checkAdvanced } from './validators';
import { compileRegex } from './search.js';
import {renderTable, renderStats } from './ui.js'; 