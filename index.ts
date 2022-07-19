export type ISpongebobCase = (str: string) => string;

export const spongebobCase: ISpongebobCase = (str) => {
  return str
    .split("")
    .map((letter, index) => {
      return index % 2 === 0 ? letter : letter.toUpperCase();
    })
    .join("");
};
