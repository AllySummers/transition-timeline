import type { IConfig } from '@typings';

export const config: IConfig = {
  events: [
    {
      name: 'Testosterone Blockers',
      icon: 'fa-solid fa-pills',
      date: new Date('August 6, 2018 17:14:00')
    },
    {
      name: 'Estrogen',
      icon: 'fa-solid fa-capsules',
      date: new Date('September 3, 2018 16:30:00')
    },
    {
      name: 'Legal Name/Gender Change',
      icon: 'fa-solid fa-gavel',
      date: new Date('October 12, 2018 10:47:00')
    },
    {
      name: 'Sexual Reassignment Surgery',
      icon: 'fa-solid fa-scalpel',
      date: new Date('August 11, 2023 09:00:00'),
      duration: {
        hours: 6
      }
    }
  ],
  name: 'Ally'
};
