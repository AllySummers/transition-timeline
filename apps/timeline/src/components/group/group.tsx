import { Grid, Typography } from '@mui/material';
import { AlternateProvider } from '@hooks';
import { Container } from '../container';
import type { GroupProps } from './group.types';

export const Group = ({ children, heading, alternate = false }: GroupProps) => (
  <AlternateProvider alternate={alternate}>
    <Container
      sx={{
        padding: '1rem',
        backgroundColor: (theme) => (alternate ? theme.palette.background.default : theme.palette.grey[900])
      }}
    >
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        {heading}
      </Typography>
      <Grid container justifyContent="center">
        {children}
      </Grid>
    </Container>
  </AlternateProvider>
);
