import { useRef } from 'react';
import { SectionRef } from '../section-ref';
import type { SectionProps } from './section.types';

export const Section = ({ children, ...props }: SectionProps) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <SectionRef {...props} childrenRef={ref}>
      <div ref={ref}>{children}</div>
    </SectionRef>
  );
};
