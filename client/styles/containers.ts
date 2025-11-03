import { maxWidth, spacing, zIndex } from "./theme";

export const containers = {
  maxWidth: `${maxWidth.container} mx-auto`,
  withPadding: `${maxWidth.container} mx-auto ${spacing.px.sm} ${spacing.px.md} ${spacing.px.lg}`,
  content: `${maxWidth.content} mx-auto`,
  full: "w-full",
};

export const layouts = {
  header: `fixed top-0 left-0 right-0 bg-white border-b border-gray-200 ${zIndex.fixed}`,
  headerInner: `${containers.withPadding} flex items-center justify-between h-20`,
  
  footer: `bg-gray-900 text-white`,
  footerInner: `${containers.withPadding} py-8 sm:py-12`,

  heroSection: `pt-24 sm:pt-32 pb-12 sm:pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white`,
  
  mainSection: `py-12 sm:py-20 bg-white`,
  
  altSection: `py-12 sm:py-20 bg-gray-50`,
  
  blueSection: `py-12 sm:py-20 bg-blue-600 text-white`,
};

export const flexLayouts = {
  centerBetween: "flex items-center justify-between",
  centerColumn: "flex flex-col items-center justify-center",
  rowStart: "flex items-start gap-6",
  rowCenter: "flex items-center gap-2",
};

export const textAlign = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export const responsiveGrid = {
  heroGrid: `grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center`,
  featureGrid: `grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8`,
  statsGrid: `grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8`,
  contentGrid: `grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12`,
};
