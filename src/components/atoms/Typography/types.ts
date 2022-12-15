export type FontVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'normal'
  | 'eyebrow'
  | 'freelandHeadline'
  | 'bullet'
  | 'number'
  | 'none'
  | 'footerLink';

export type TypographyDefinition = {
  element: TypographyElement;
  fontSize?: string;
  className?: Array<string | any>;
};

export type TypographyElement =
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'a'
  | 'li';
