import { add } from 'date-fns';
import { useMemo } from 'react';
import { useDifference } from '@hooks';
import { titlecase } from '../../utils/titlecase';
import { StyledTimerList, StyledTimerListItem, StyledTimerType, StyledTimerValue } from './timer.styled';
import type { TimerProps } from './timer.types';

const timerKeys = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'] as const;

export const Timer = ({ date, duration }: TimerProps) => {
  const timerDate = useMemo(() => (duration ? add(date, duration) : date), [date, duration]);

  const diff = useDifference(timerDate);

  return (
    <StyledTimerList>
      {timerKeys.map((key) => (
        <StyledTimerListItem key={`${key}-${date.toString()}`}>
          <StyledTimerType>{titlecase(key)}</StyledTimerType>
          <StyledTimerValue>{diff[key]}</StyledTimerValue>
        </StyledTimerListItem>
      ))}
    </StyledTimerList>
  );
};
