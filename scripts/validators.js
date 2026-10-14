export const validateDesc = (v) => /^\S(?:.*\S)?$/.test(v) && !/\S{2,}/.test(v);
export const validateAmount = (v) => /^(0|[1-9]\d*)(\.\d{1,2})?$/.test(v);
export const validateDate = (v) => /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/.test(v);
export const checkAdvanced = (v) => /\b(\w+)\s+\1\b/i.test(v);