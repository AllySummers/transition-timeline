import { AppBar, Toolbar, Typography } from '@mui/material';
import { Container } from '@mui/system';
import type { ShellProps } from './shell.types';

export const Shell = ({ children }: ShellProps) => (
  <>
    <AppBar
      position="sticky"
      color="primary"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: 'wrap' }}>
        <Typography variant="h4" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Ally's Transition Timeline
        </Typography>
      </Toolbar>
    </AppBar>

    <main>
      <Container maxWidth="lg" sx={{ padding: '0 !important' }}>
        {children}
      </Container>
    </main>
  </>
);
