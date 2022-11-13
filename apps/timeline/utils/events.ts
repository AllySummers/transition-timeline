import { add, isFuture, isPast } from 'date-fns';
import type { ITransitionEvent } from '@typings';

export const sortEvents = (events: ITransitionEvent[]) =>
  events.reduce<Record<'current' | 'future' | 'past', ITransitionEvent[]>>(
    (acc, event) => {
      if (event.duration) {
        const endTime = add(event.date, event.duration);

        if (isFuture(event.date)) {
          acc.future.push(event);
        } else if (isPast(endTime)) {
          acc.past.push(event);
        } else {
          acc.current.push(event);
        }
      } else {
        if (isPast(event.date)) {
          acc.past.push(event);
        } else {
          acc.future.push(event);
        }
      }

      return acc;
    },
    { past: [], future: [], current: [] }
  );
