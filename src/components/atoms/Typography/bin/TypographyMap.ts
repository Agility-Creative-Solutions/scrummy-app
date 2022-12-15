import type { FontVariant, TypographyDefinition } from '../types';

export const TypographyMap: Record<FontVariant, TypographyDefinition> = {
  h1: {
    element: 'h1',
    className: ['text-4xl', 'font-sans'],
  },
  h2: {
    element: 'h2',
    className: ['text-3xl', 'font-sans'],
  },
  h3: {
    element: 'h3',
    className: ['text-2xl', 'font-sans', 'font-bold'],
  },
  h4: {
    element: 'h4',
    className: ['text-xl', 'font-sans', 'font-semibold'],
  },
  h5: {
    element: 'h5',
    className: ['text-lg', 'font-sans', 'font-bold'],
  },
  h6: {
    element: 'h6',
    className: ['text-base', 'font-sans', 'font-bold'],
  },
  normal: {
    element: 'p',
    className: ['text-base', 'font-sans'],
  },
  eyebrow: {
    element: 'p',
    className: ['text-base'],
  },
  freelandHeadline: {
    element: 'h3',
    className: ['font-freeland', 'text-4xl'],
  },
  bullet: {
    element: 'li',
    className: ['list-disc'],
  },
  number: {
    element: 'li',
    className: ['list-decimal'],
  },
  none: {
    element: 'span',
  },
  footerLink: {
    element: 'a',
    className: ['text-base', 'font-sans'],
  },
};
