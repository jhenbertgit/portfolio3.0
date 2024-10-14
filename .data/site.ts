//put your own name
export const name: string = "jhenbert";

export const brand: Brand = {
  dark: "/brand-dark.svg",
  light: "/brand-light.svg",
};

interface Brand {
  dark: string;
  light: string;
}
