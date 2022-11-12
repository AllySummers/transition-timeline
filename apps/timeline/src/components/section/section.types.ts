import type { ReactNode } from 'react';

export interface SectionBox {
  icon?: string;
  title: string;
  content: ReactNode;
}

export interface SectionProps {
  heading: string;
  alternate?: boolean;
  children: SectionBox[];
}

export interface StyledSectionProps {
  alternate?: boolean;
}
