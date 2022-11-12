import styled, { css } from 'styled-components';
import type { StyledSectionProps } from './section.types';

export const StyledSection = styled.section<Readonly<StyledSectionProps>>`
  padding: 1em 0 3em;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ alternate }) =>
    !alternate &&
    css`
      background: #2d3e50;
    `}
`;

export const StyledContentHead = styled.h2<Readonly<StyledSectionProps>>`
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin: 1em 0 0.5em;

  ${({ alternate }) =>
    !alternate &&
    css`
      color: white;
    `}
`;

export const StyledContentItems = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  /* display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  flex-basis: 0;
  flex-grow: 1; */
`;

export const StyledContentSubhead = styled.div`
  color: #1f8dd6;
  margin: 0;

  i {
    margin-right: 7px;
  }
`;
