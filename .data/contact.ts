export const heading: string = "Let's Connect";

export const subheading: string =
  "If you want to work together or just to say hi. Get in touch!";

export const emails: Email[] = [
  {
    url: "hello@jhenbert.com",
  },
];

export const social: Social[] = [
  {
    img: {
      dark: "/images/social/linkedin-dark.svg",
      light: "/images/social/linkedin-light.svg",
    },
    url: "https://www.linkedin.com/in/jhenbert/",
  },
  {
    img: {
      dark: "/images/social/github-dark.svg",
      light: "/images/social/github-light.svg",
    },
    url: "https://github.com/jhenbertgit",
  },
  {
    img: {
      dark: "/images/social/facebook-dark.svg",
      light: "/images/social/facebook-light.svg",
    },
    url: "https://www.facebook.com/jhenbertvil",
  },
];

interface Email {
  url: string;
}

interface Social {
  url: string;
  img: {
    dark: string;
    light: string;
  };
}
