import { useState } from 'react';
import { useInterval } from 'usehooks-ts';
import type { DateDifference } from '@typings';
import { calculateDifference } from '@utils';

export const useDifference = (date: Date | number): DateDifference => {
  const [diff, setDiff] = useState(calculateDifference(date));

  useInterval(() => {
    setDiff(calculateDifference(date));
  }, 1000);

  return diff;
};
