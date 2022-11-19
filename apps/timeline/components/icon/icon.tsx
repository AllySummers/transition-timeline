import { StyledIcon } from './icon.styled';
import type { IconProps } from './icon.types';

export const Icon = ({ icon, className, ...props }: IconProps) => (
  <StyledIcon {...props} className={`${icon} ${className ?? ''}`} />
);
