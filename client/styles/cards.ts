import { colors, spacing, borderRadius, shadows, transitions } from "./theme";

export const cardStyles = {
  base: `${colors.background.white} ${borderRadius.md} overflow-hidden ${shadows.md} ${transitions.smooth}`,

  property: `${colors.background.white} ${borderRadius.md} overflow-hidden ${shadows.md} ${shadows.hover} ${transitions.smooth}`,

  feature: `${colors.primary.light} ${borderRadius.md} ${spacing.card}`,

  featureDark: `bg-white bg-opacity-10 backdrop-blur-sm ${borderRadius.md} ${spacing.card}`,

  contactInfo: `text-center border ${colors.border.DEFAULT} ${borderRadius.md} ${spacing.card} ${transitions.smooth} hover:${shadows.lg}`,

  statCard: `${colors.background.white} bg-opacity-10 backdrop-blur-sm ${borderRadius.md} ${spacing.card} text-center`,
};

export const cardContent = {
  padding: spacing.card,
  imageLarge: "w-full h-56 object-cover",
  imageSmall: "w-full h-40 object-cover",
  title: "text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3",
  subtitle: "text-base sm:text-lg font-semibold text-gray-900 mb-3 sm:mb-4",
  description: "text-sm sm:text-base text-gray-600",
  price: "text-blue-600 font-bold text-lg mb-2",
  location: "flex items-center text-gray-600 mb-4",
  details: "flex justify-between text-gray-600 text-sm",
};

export const containerGrid = {
  twoCol: `grid grid-cols-1 md:grid-cols-2 ${spacing.gap.md} sm:${spacing.gap.lg}`,
  threeCol: `grid grid-cols-1 md:grid-cols-3 ${spacing.gap.md} sm:${spacing.gap.lg}`,
  fourCol: `grid grid-cols-2 md:grid-cols-4 ${spacing.gap.xs} sm:${spacing.gap.md}`,
  responsive: `grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ${spacing.gap.md} sm:${spacing.gap.lg}`,
};
