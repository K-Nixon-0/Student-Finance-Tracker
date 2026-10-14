# My MoneyBud - Student Finance Tracker

Hey! This is my vanilla HTML/CSS/JS finance tracker built for the UI assignment. It runs entirely locally

## Features
- **Dashboard:** Live tracking for balance, income, expenses, and a monthly budget cap with ARIA live alerts.
- **Records Table:** Add, delete, and search transactions instantly.
- **Regex Search & Highlight:** Live search using regex with `<mark>` text highlighting.
- **Data Persistence:** Automatically saves everything to `localStorage`. JSON import/export supported.

## Regex Catalog
1. **Description:** `/^\S(?:.*\S)?$/` (no leading/trailing spaces)
2. **Amount:** `/^(0|[1-9]\d*)(\.\d{1,2})?$/` (valid currency numbers)
3. **Date:** `/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/` (YYYY-MM-DD format)
4. **Advanced Rule:** `/\b(\w+)\s+\1\b/i` (catches accidental duplicate words like "coffee coffee")

## Keyboard & A11y
- Use `Tab` to navigate through inputs, buttons, and table rows.
- Screen readers announce budget changes automatically using `aria-live`.
- Skip link included at the top for easy keyboard navigation.

## How to Run Tests
Open `tests.html` in your browser to run the validator checks.

## Video
./Kooha-2026-10-14-23-12-59.mp4
