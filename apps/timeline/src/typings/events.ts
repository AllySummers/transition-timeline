import type { Duration } from 'date-fns';

export interface ITransitionEvent {
  name: string;
  icon: string;
  description?: string;
  date: Date;
  duration?: Duration;
}

export type ISortedEvents = Record<'current' | 'future' | 'past', ITransitionEvent[]>;
