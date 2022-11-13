import type { ITransitionEvent } from './events';

export interface IConfig {
  events: ITransitionEvent[];
  name: string;
}
