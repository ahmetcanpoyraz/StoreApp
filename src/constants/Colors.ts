export const Colors = {
  blue: "#3498db",
  green: "#2ecc71",
  lightWhite: "#f5f5f5",
  white: "#ffffff",
  black: "#000000",
  red: "#e72c3c",
  gray: "#808080",
} as const;

export type ColorKeys = keyof typeof Colors;
