import { useState } from 'react';
import { useEffectOnce, useInterval } from 'usehooks-ts';
import { Group, Section, type SectionProps, Timer } from '@components';
import { config } from '@config';
import type { ISortedEvents, ITransitionEvent } from '@typings';
import { sortEvents, titlecase } from '@utils';

const mapEvents = ({ icon, date, description, duration, name }: ITransitionEvent): SectionProps => ({
  title: name,
  icon,
  description,
  children: <Timer date={date} duration={duration} />
});

const Index = () => {
  const [sortedEvents, setSortedEvents] = useState<ISortedEvents>({
    past: [],
    current: [],
    future: []
  });

  useInterval(() => {
    setSortedEvents(sortEvents(config.events));
  }, 1000);

  useEffectOnce(() => {
    document.title = `${config.name}'s Transition Timeline`;
  });

  const filteredEvents = (['past', 'current', 'future'] as const).filter((event) => sortedEvents[event].length);

  return (
    <>
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
    </>
  );
};

export default Index;
