import {load, save } from './storage.js';

let records = load() || [
    { id: "1", description: "Campus Cafe", amount: -8.75, category: "Food", date: "2026-10-13" },
    { id: "2", description: "Work-study payroll", amount: 612.50, category: "Income" , date:"2026-10-10"}
];

export const getRecords = () => records;
export const addRecord = (r) => {records.unshift(r); save(records);};
export const deleteRecord = (id) => {records = records.filter(x => x.id !==id); save(records);};