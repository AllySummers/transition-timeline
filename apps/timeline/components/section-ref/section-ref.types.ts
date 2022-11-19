import type { RefObject } from 'react';
import type { SectionProps } from '../section/section.types';

export interface SectionRefProps<T extends Element = Element> extends SectionProps {
  childrenRef?: RefObject<T>;
}
