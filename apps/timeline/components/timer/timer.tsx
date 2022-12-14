import { add } from 'date-fns';
import { useMemo } from 'react';
import { useDifference } from '@hooks';
import { titlecase } from '../../utils/titlecase';
import { StyledTimerList, StyledTimerListItem, StyledTimerType, StyledTimerValue } from './timer.styled';
import type { TimerProps } from './timer.types';

const timerKeys = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds'] as const;

export const Timer = ({ date, duration, excludeWeeks }: TimerProps) => {
  const timerDate = useMemo(() => (duration ? add(date, duration) : date), [date, duration]);

  const diff = useDifference(timerDate, excludeWeeks);

  return (
    <StyledTimerList>
      {timerKeys.map(
        (key) =>
          diff[key] !== undefined && (
            <StyledTimerListItem key={`${key}-${date.toString()}`}>
              <StyledTimerValue>{String(diff[key]).padStart(2, '0')}</StyledTimerValue>
              <StyledTimerType>{titlecase(key)}</StyledTimerType>
            </StyledTimerListItem>
          )
      )}
    </StyledTimerList>
  );
};
