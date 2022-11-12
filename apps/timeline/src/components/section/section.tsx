import { StyledContentHead, StyledContentItems, StyledContentSubhead, StyledSection } from './section.styled';
import type { SectionProps } from './section.types';

export const Section = ({ heading, alternate, children }: SectionProps) => (
  <StyledSection alternate={alternate}>
    <StyledContentHead alternate={alternate}>{heading}</StyledContentHead>
    <StyledContentItems>
      {children.map(({ title, icon, content }) => (
        <div key={`section-${title}-${icon ?? ''}`}>
          <StyledContentSubhead>
            {icon ? <i className={icon} /> : null}
            {title}
          </StyledContentSubhead>

          {content}
        </div>
      ))}
    </StyledContentItems>
  </StyledSection>
);
