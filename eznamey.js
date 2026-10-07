const firstWords = [
  "Easy",
  "Smart",
  "Awesome",
  "Super",
  "Fast",
  "Bright",
  "Happy",
  "Cool",
  "Digital",
  "Creative",
];

const secondWords = [
  "Corporation",
  "Solutions",
  "Technology",
  "Systems",
  "Labs",
  "Works",
  "Ideas",
  "World",
  "Hub",
  "Tech",
];

const randomNumber = Math.floor(Math.random() * 10);

const startupName = firstWords[randomNumber] + " " + secondWords[randomNumber];

const numberOfCharacters = startupName.length;

console.log(
  "The startup: " +
    startupName +
    " contains " +
    numberOfCharacters +
    " characters",
);
