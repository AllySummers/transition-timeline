import { Typography } from '@mui/material';
import { useState } from 'react';
import { useInterval } from 'usehooks-ts';
import { Group, Section, type SectionProps, Timer } from '@components';
import { config } from '@config';
import type { ISortedEvents, ITransitionEvent } from '@typings';
import { categoriseEvents, formatDate, sortCategorisedDates, titlecase } from '@utils';

const mapEvents = ({ icon, description, name, date, duration, excludeWeeks }: ITransitionEvent): SectionProps => ({
  title: name,
  icon,
  description,
  children: (
    <>
      <Timer date={date} duration={duration} excludeWeeks={excludeWeeks} />
      <Typography sx={{ textAlign: 'center', color: (theme) => theme.palette.grey[400], padding: '0.5rem 0 0' }}>
        {formatDate(date, duration)}
      </Typography>
    </>
  )
});

const Index = () => {
  const [sortedEvents, setSortedEvents] = useState<ISortedEvents>({
    past: [],
    current: [],
    future: []
  });

  useInterval(() => {
    setSortedEvents(sortCategorisedDates(categoriseEvents(config.events)));
  }, 1000);

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
