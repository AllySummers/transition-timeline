import { useState } from 'react';
import { useInterval } from 'usehooks-ts';
import type { DateDifference } from '@typings';
import { calculateDifference } from '@utils';

export const useDifference = (date: Date | number, excludeWeeks = false): DateDifference => {
  const [diff, setDiff] = useState(calculateDifference(date, excludeWeeks));

  useInterval(() => {
    setDiff(calculateDifference(date, excludeWeeks));
  }, 1000);

  return diff;
};
