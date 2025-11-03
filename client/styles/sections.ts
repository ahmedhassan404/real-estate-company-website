import { spacing, typography, colors } from "./theme";

export const sectionHeadings = {
  main: `${typography.h2} ${colors.text.primary} mb-3 sm:mb-4`,
  mainDark: `${typography.h2} text-white mb-3 sm:mb-4`,
  subtitle: `text-base sm:text-lg md:text-xl ${colors.text.muted}`,
  subtitleLight: `text-base sm:text-lg md:text-xl text-blue-100`,
};

export const sectionContent = {
  heading: `text-center mb-10 sm:mb-16`,
  description: `${typography.body.base} ${colors.text.secondary}`,
  descriptionLight: `${typography.body.base} text-blue-100`,
};

export const heroContent = {
  mainContainer: `${spacing.gap.md} md:${spacing.gap.lg}`,
  titleBlock: `${typography.h1} ${colors.text.white} mb-4 sm:mb-6 leading-tight`,
  subtitleBlock: `${typography.body.lg} text-gray-300 mb-6 sm:mb-8`,
  statsGrid: `grid grid-cols-2 gap-3 sm:gap-4`,
  statCard: `bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 sm:p-6 text-center`,
  statNumber: `text-2xl sm:text-3xl font-bold mb-1 sm:mb-2`,
  statLabel: `text-xs sm:text-sm text-gray-300`,
};

export const featureSection = {
  container: `bg-white bg-opacity-10 rounded-lg ${spacing.card}`,
  containerDark: `bg-white rounded-lg ${spacing.card} ${colors.background.light}`,
  title: `text-2xl sm:text-3xl font-bold ${colors.text.primary} mb-3 sm:mb-4`,
  description: `${typography.body.base} ${colors.text.secondary}`,
  icon: `w-12 h-12 mb-4`,
};

export const propertyCard = {
  image: "w-full h-56 object-cover",
  priceText: "text-blue-600 font-bold text-lg mb-2",
  title: "text-xl font-bold text-gray-900 mb-2",
  location: "flex items-center text-gray-600 mb-4",
  details: "flex justify-between text-gray-600 text-sm",
};

export const contactSection = {
  form: "space-y-6",
  formGroup: "space-y-0",
  label: "block text-sm font-semibold text-gray-900 mb-2",
  labelRequired: "text-red-500",
  input: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600",
  textarea: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none",
  mapContainer: "rounded-lg overflow-hidden h-96",
};

export const ctaSection = {
  container: `text-center`,
  title: `${typography.h1} mb-4 sm:mb-6`,
  subtitle: `${typography.body.lg} text-blue-100 mb-8 sm:mb-12`,
  buttonGroup: `flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center`,
};

export const statsSection = {
  container: `grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center`,
  number: `text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2`,
  label: `text-xs sm:text-sm md:text-base text-blue-100`,
};

export const valuesSection = {
  container: `grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12`,
  item: `flex gap-6`,
  title: `text-2xl sm:text-3xl font-bold ${colors.text.primary} mb-2 sm:mb-3`,
  description: `${typography.body.base} ${colors.text.secondary}`,
};
