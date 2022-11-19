import type { Duration } from 'date-fns';
import type { ReactNode } from 'react';
import type { Icon } from './icon';

export interface ITransitionEvent {
  name: string;
  icon: Icon;
  description?: ReactNode;
  date: Date;
  duration?: Duration;
  /**
   * Default is false
   */
  excludeWeeks?: boolean;
}

export type ISortedEvents = Record<'current' | 'future' | 'past', ITransitionEvent[]>;
