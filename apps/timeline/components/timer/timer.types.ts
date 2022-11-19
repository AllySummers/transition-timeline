import type { Theme } from '@mui/material';
import type { Duration } from 'date-fns';

export interface TimerProps {
  date: Date;
  duration?: Duration;
  excludeWeeks?: boolean;
}

export interface StyledListItemProps {
  muiTheme: Theme;
  alternate: boolean;
}
