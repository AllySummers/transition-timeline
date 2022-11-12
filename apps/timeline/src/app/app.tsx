import { useState } from 'react';
import { useInterval } from 'usehooks-ts';
import { Group, Section, type SectionProps, Shell, Timer } from '@components';
import { events } from '@config';
import type { ISortedEvents, ITransitionEvent } from '@typings';
import { sortEvents, titlecase } from '@utils';

const mapEvents = ({ icon, date, description, duration, name }: ITransitionEvent): SectionProps => ({
  title: name,
  icon,
  description,
  children: <Timer date={date} duration={duration} />
});

export const App = () => {
  const [sortedEvents, setSortedEvents] = useState<ISortedEvents>({
    past: [],
    current: [],
    future: []
  });

  useInterval(() => {
    setSortedEvents(sortEvents(events));
  }, 1000);

  const filteredEvents = (['past', 'current', 'future'] as const).filter((event) => sortedEvents[event].length);

  return (
    <Shell>
      {filteredEvents.map((eventType, index) => (
        <Group
          heading={titlecase(eventType)}
          key={`${eventType}-${index}`}
          alternate={index % 2 === 0}
          children={sortedEvents[eventType].map((event, i) => (
            <Section key={`${eventType}-${index}-${i}`} {...mapEvents(event)} />
          ))}
        />
      ))}
    </Shell>
  );
};
/*
alternate={index % 2 === 0}
          key={`${eventType}-${index}`}
          heading={titlecase(eventType)}
          children={sortedEvents[eventType].map(mapEvents)}
          */
