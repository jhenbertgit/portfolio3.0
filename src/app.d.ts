// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}

	type MetaDefault = { title: string; description: string; image: string };

	type Meta = MetaDefault & {
		twitter: MetaDefault;
	};
}

export {};
