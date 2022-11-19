import type { ReactNode } from 'react';

export interface GroupProps {
  heading: ReactNode;
  alternate?: boolean;
  children?: ReactNode;
}
