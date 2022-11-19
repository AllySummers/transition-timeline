export type DateDifference = Record<'days' | 'hours' | 'minutes' | 'months' | 'seconds' | 'years', number> & {
  weeks?: number;
};
