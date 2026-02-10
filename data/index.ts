// Export all data and utilities
export * from './symptoms';
export * from './affirmations';
export * from './facts';
export * from './courses';
export * from './boosters';
export * from './quizzes';

// Color palette for the app
export const colors = {
  cream: '#FDF8F3',
  warmWhite: '#FFFBF7',
  blush: '#F5E6DC',
  terracotta: '#C4887A',
  terracottaLight: '#E8B4A6',
  sage: '#8BA888',
  sageLight: '#B8D4B5',
  deepPlum: '#4A3F4B',
  softGray: '#9B9299',
} as const;

export type ColorName = keyof typeof colors;
