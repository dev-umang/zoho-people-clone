import { atomWithStorage } from "jotai/utils";

type ThemeColors = Partial<{
  container: string;
  bodyPrimary: string;
  bodySecondary: string;
  bodyTernary: string;
  bodyPrimaryText: string;
  bodySecondaryText: string;
  bodyTernaryText: string;
  active: string;
  activeAlpha: string;
  border: string;
}>;

export const Colors: { [k in "light" | "dark"]: ThemeColors } = {
  light: {
    bodyPrimary: "#F3F3F3",
    bodySecondary: "#E7E6E6",
    bodyPrimaryText: "#000000",
    bodySecondaryText: "#6B6B6BFF",
    bodyTernary: "#2424fd",
    bodyTernaryText: "#FFFFFF",
    container: "#FFFFFFFF",
    active: "#0088ff",
    activeAlpha: "#4463FF1F",
    border: "#D6D6D6B0",
  },
  dark: {
    bodyPrimary: "#131314",
    bodySecondary: "#0e0e10",
    bodyTernary: "#2424fd",
    bodyPrimaryText: "#ffffff",
    bodySecondaryText: "#A3A1A1FF",
    bodyTernaryText: "#FFFFFF",
    container: "#010003ff",
    active: "#0088ff",
    activeAlpha: "#4463FF17",
    border: "#333333B0",
  },
};

export const AtomDarkMode = atomWithStorage("dark", false);
