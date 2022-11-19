import type { ReactNode } from 'react';
import type { Icon } from '@typings';

export interface SectionProps {
  title: ReactNode;
  icon?: Icon;
  description?: ReactNode;
  children?: ReactNode;
}
