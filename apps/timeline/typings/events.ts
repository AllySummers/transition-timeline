import type { Duration } from 'date-fns';
import type { Icon } from './icon';

export interface ITransitionEvent {
  name: string;
  icon: Icon;
  description?: string;
  date: Date;
  duration?: Duration;
}

export type ISortedEvents = Record<'current' | 'future' | 'past', ITransitionEvent[]>;
