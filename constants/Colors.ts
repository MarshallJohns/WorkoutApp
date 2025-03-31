/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";

export const Colors = {
  light: {
    text: "#11181C",
    background: "#fff",
    tint: tintColorLight,
    icon: "#687076",
    tabIconDefault: "#687076",
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: "#ECEDEE",
    background: "#151718",
    tint: tintColorDark,
    icon: "#9BA1A6",
    tabIconDefault: "#9BA1A6",
    tabIconSelected: tintColorDark,
  },
  primary: "#008F89", // Navy blue
  background: "#EFEFEF", // White
  black: "#000000", // Text
  white: "#FFFFFF", // Background
  green: "#90BD47", // Success, confirmations
  red: "#E3575C", // Errors, warnings
  blue: "#8DAACE", // Secondary UI elements
  yellow: "#F7F591", // Warnings, highlights
  purple: "#6263A5", // Informational highlights, tooltips
  orange: "#E08742", // Noticeable actions, warmth
  mustard: "#F9CB3D", // CTA elements, secondary highlights
  gray: "#2E3C4F",
};
