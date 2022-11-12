import {
  add,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInMonths,
  differenceInSeconds,
  differenceInWeeks,
  differenceInYears,
  isFuture,
  max,
  min,
  sub
} from 'date-fns';
import type { DateDifference } from '@typings';

const orderDate = (date1: Date | number, date2: Date | number): [Date, Date] => [
  max([date1, date2]),
  min([date1, date2])
];

export const calculateDifference = (diffDate: Date | number): DateDifference => {
  const now = Date.now();
  let date = diffDate;
  const isInFuture = isFuture(date);

  const years = differenceInYears(...orderDate(now, diffDate));
  date = (isInFuture ? sub : add)(date, { years });
  const months = differenceInMonths(...orderDate(now, date));
  date = (isInFuture ? sub : add)(date, { months });
  const weeks = differenceInWeeks(...orderDate(now, date));
  date = (isInFuture ? sub : add)(date, { weeks });
  const days = differenceInDays(...orderDate(now, date));
  date = (isInFuture ? sub : add)(date, { days });
  const hours = differenceInHours(...orderDate(now, date));
  date = (isInFuture ? sub : add)(date, { hours });
  const minutes = differenceInMinutes(...orderDate(now, date));
  date = (isInFuture ? sub : add)(date, { minutes });
  const seconds = differenceInSeconds(...orderDate(now, date));

  return {
    years,
    months,
    weeks,
    days,
    hours,
    minutes,
    seconds
  };
};
