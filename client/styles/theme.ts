// Design Tokens and Theme Constants
export const colors = {
  // Primary Colors
  primary: {
    DEFAULT: "bg-blue-600",
    hover: "hover:bg-blue-700",
    light: "bg-blue-50",
    dark: "bg-blue-900",
  },

  // Secondary Colors
  secondary: {
    DEFAULT: "bg-gray-600",
    light: "bg-gray-50",
    dark: "bg-gray-900",
  },

  // Text Colors
  text: {
    primary: "text-gray-900",
    secondary: "text-gray-700",
    muted: "text-gray-600",
    light: "text-gray-400",
    white: "text-white",
  },

  // Background Colors
  background: {
    white: "bg-white",
    light: "bg-gray-50",
    dark: "bg-gray-900",
  },

  // Border Colors
  border: {
    DEFAULT: "border-gray-200",
    light: "border-gray-100",
    dark: "border-gray-800",
  },

  // Status Colors
  status: {
    error: "bg-red-600",
    success: "bg-green-600",
    warning: "bg-yellow-600",
  },
};

export const spacing = {
  // Padding
  px: {
    sm: "px-4",
    md: "sm:px-6",
    lg: "lg:px-8",
  },
  py: {
    xs: "py-2.5",
    sm: "py-3",
    md: "py-6",
    lg: "py-12",
    xl: "py-20",
  },

  // Margin
  gap: {
    xs: "gap-3",
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
    xl: "gap-12",
  },

  // Padding values for cards/containers
  card: "p-6 sm:p-8",
  section: "px-4 sm:px-6 lg:px-8",
};

export const typography = {
  // Headings
  h1: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold",
  h2: "text-2xl sm:text-3xl md:text-4xl font-bold",
  h3: "text-lg sm:text-xl font-bold",
  h4: "text-base sm:text-lg font-semibold",

  // Body Text
  body: {
    lg: "text-base sm:text-lg md:text-xl",
    base: "text-base sm:text-base",
    sm: "text-sm sm:text-sm",
    xs: "text-xs sm:text-xs",
  },

  // Line Heights
  tight: "leading-tight",
  normal: "leading-normal",
  relaxed: "leading-relaxed",
};

export const transitions = {
  fast: "transition-colors",
  smooth: "transition-all duration-200",
};

export const shadows = {
  sm: "shadow",
  md: "shadow-lg",
  lg: "shadow-xl",
  hover: "hover:shadow-lg",
};

export const borderRadius = {
  sm: "rounded",
  md: "rounded-lg",
  lg: "rounded-xl",
  full: "rounded-full",
};

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
};

export const maxWidth = {
  container: "max-w-7xl",
  content: "max-w-3xl",
};

export const zIndex = {
  dropdown: "z-40",
  fixed: "z-50",
  modal: "z-50",
};
