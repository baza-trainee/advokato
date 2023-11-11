export const getLocalStorage = (key, defaultValue) => {
	const stickyValue = localStorage.getItem(key);

	return stickyValue !== null && stickyValue !== "undefined"
		? JSON.parse(stickyValue)
		: defaultValue;
};

export const setLocalStorage = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};
