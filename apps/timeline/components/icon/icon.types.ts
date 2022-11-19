import type { CSSProperties } from 'react';
import type { Icon } from '@typings';

export interface IconProps {
  style?: CSSProperties;
  className?: string;
  icon: Icon;
}
