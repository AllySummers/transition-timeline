import { Grid, Typography } from '@mui/material';
import { Icon } from '../icon';
import type { SectionProps } from './section.types';

export const Section = ({ title, icon, description, children }: SectionProps) => (
  <Grid item xs={12} lg={6} sx={{ padding: '1rem 0' }}>
    <Typography
      variant="h5"
      color={(theme) => theme.palette.primary.main}
      sx={{
        textAlign: 'center',
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: '1rem',
        paddingBottom: '0.75rem'
      }}
    >
      {icon && <Icon icon={icon} />}
      <span>{title}</span>
    </Typography>
    {description && <Typography>{description}</Typography>}
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row' }}>{children}</div>
  </Grid>
);
