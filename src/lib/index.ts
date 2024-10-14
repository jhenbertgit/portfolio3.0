// place files you want to import through the `$lib` alias in this folder.
export const resetTitle = (title: string) => {
	if (typeof document !== 'undefined') {
		return (document.title = title);
	}
};
