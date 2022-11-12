import { StyledIcon } from './icon.styled';
import type { IconProps } from './icon.types';

export const Icon = ({ icon }: IconProps) => <StyledIcon className={icon} />;
