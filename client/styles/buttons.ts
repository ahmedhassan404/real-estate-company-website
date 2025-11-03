import { colors, spacing, typography, transitions, borderRadius } from "./theme";

export const buttonStyles = {
  primary: `${colors.primary.DEFAULT} ${colors.primary.hover} ${colors.text.white} px-6 sm:px-8 ${spacing.py.xs} sm:${spacing.py.sm} ${borderRadius.md} font-semibold ${transitions.fast} text-sm sm:text-base`,
  
  secondary: `border-2 border-white ${colors.text.white} hover:bg-white hover:text-blue-900 px-6 sm:px-8 ${spacing.py.xs} sm:${spacing.py.sm} ${borderRadius.md} font-semibold ${transitions.fast} inline-block text-center text-sm sm:text-base`,
  
  white: `${colors.background.white} text-blue-600 hover:bg-blue-50 px-6 sm:px-8 ${spacing.py.xs} sm:${spacing.py.sm} ${borderRadius.md} font-semibold ${transitions.fast} text-sm sm:text-base`,

  whiteBorder: `border-2 border-white ${colors.text.white} hover:bg-white hover:text-blue-600 px-6 sm:px-8 ${spacing.py.xs} sm:${spacing.py.sm} ${borderRadius.md} font-semibold ${transitions.fast} text-sm sm:text-base`,

  icon: `inline-flex items-center gap-2`,
};

export const buttonContainers = {
  row: `flex flex-col sm:flex-row ${spacing.gap.xs} sm:${spacing.gap.sm}`,
  center: `flex flex-col sm:flex-row ${spacing.gap.xs} sm:${spacing.gap.sm} justify-center`,
  group: `flex flex-col sm:flex-row ${spacing.gap.xs} sm:${spacing.gap.sm}`,
};
