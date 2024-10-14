//put your own name
export const name: string = 'Jhenbert';

export const brand: Brand = {
	dark: '/brand-dark.svg',
	light: '/brand-light.svg'
};

interface Brand {
	dark: string;
	light: string;
}
