export const compileRegex = (input, flags = 'i') => {
    try {return input ? new RegExp(input, flags) : null; } catch { return null; }
};
export const highlight = (text, re) => !re ? text : String(text).replace(re, m => `<mark>${m}</mark>`);