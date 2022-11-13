import { add, isFuture, isPast } from 'date-fns';
import type { ISortedEvents, ITransitionEvent } from '@typings';

export const categoriseEvents = (events: ITransitionEvent[]) =>
  events.reduce<ISortedEvents>(
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

export const sortDates = (a: ITransitionEvent, b: ITransitionEvent) =>
  add(new Date(a.date), { ...a.duration }).getTime() - add(new Date(b.date), { ...b.duration }).getTime();

export const sortCategorisedDates = ({ past, current, future }: ISortedEvents): ISortedEvents => ({
  future: future.sort(sortDates),
  current: current.sort(sortDates),
  past: past.sort(sortDates)
});
