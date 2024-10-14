export const avatar: string = "images/home/avatar.png";

export const fullname: string = "Jhenbert";

export const hello: string = "Hi, I am " + fullname;

export const position: string = "Full Stack Web Developer";

export const statement: string =
  "Excited about delving into web development, I bring a robust skill set to the table. Committed to crafting exceptional solutions tailored to your requirements, I'm eager to collaborate and expand my knowledge along the way. Let's embark on this journey together and build something remarkable!";

type Button = {
  text: string;
  url: string;
};

export const buttonLeft: Button = {
  text: "About Me",
  url: "/about",
};

export const buttonRight: Button = {
  text: "Get in Touch",
  url: "/contact",
};

export const showRepository: boolean = true;
