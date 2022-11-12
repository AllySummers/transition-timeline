import { useState } from 'react';
import styled from 'styled-components';
import { useInterval } from 'usehooks-ts';
import { Section, Timer } from '@components';
import { events } from '@config';
import type { ISortedEvents, ITransitionEvent } from '@typings';
import { sortEvents, titlecase } from '@utils';

const mapEvents = ({ icon, date, description, duration, name }: ITransitionEvent) => ({
  title: name,
  icon,
  content: (
    <>
      <p>{description}</p>
      <Timer date={date} duration={duration} />
    </>
  )
});

const StyledApp = styled.div``;

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
    <StyledApp>
      {filteredEvents.map((eventType, index) => (
        <Section
          alternate={index % 2 === 0}
          key={`${eventType}-${index}`}
          heading={titlecase(eventType)}
          children={sortedEvents[eventType].map(mapEvents)}
        />
      ))}
    </StyledApp>
  );
};
