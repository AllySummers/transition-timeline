import styled from '@emotion/styled';
import type { Theme } from '@mui/material';
import { useTheme } from '@mui/styles';
import type { DetailedHTMLProps, LiHTMLAttributes } from 'react';
import { useAlternate } from '@hooks';
import type { StyledListItemProps } from './timer.types';

export const StyledTimerList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const StyledTimerType = styled.span``;

export const StyledTimerValue = styled.span``;

const StyledTimerLi = styled.li<StyledListItemProps>`
  display: inline-flex;
  text-align: center;
  font-size: 0.4rem;
  width: 3rem;
  padding: 0.15rem 0.25rem;
  text-transform: uppercase;
  flex-direction: column;
  justify-content: center;
  margin: 0.1rem;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 10%;
  background-color: ${({ alternate, muiTheme }) => (alternate ? muiTheme.palette.grey[900] : 'rgb(24,24,24)')};

  ${StyledTimerValue} {
    font-size: 2rem;
  }

  @media screen and (min-width: ${({ muiTheme }) => muiTheme.breakpoints.values.sm}px) {
    font-size: 0.5rem;
    width: 3.5rem;

    ${StyledTimerValue} {
      font-size: 2.25rem;
    }
  }

  @media screen and (min-width: ${({ muiTheme }) =>
      (muiTheme.breakpoints.values.sm + muiTheme.breakpoints.values.md) / 2}px) {
    font-size: 0.8rem;
    width: 4.5rem;

    ${StyledTimerValue} {
      font-size: 2.5rem;
    }
  }
`;

export const StyledTimerListItem = ({
  children,
  ...props
}: DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>) => {
  const theme = useTheme<Theme>();
  const alternate = useAlternate();

  return (
    <StyledTimerLi {...props} alternate={alternate} muiTheme={theme}>
      {children}
    </StyledTimerLi>
  );
};
