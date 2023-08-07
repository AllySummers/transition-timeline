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
      icon: 'fa-solid fa-tablets',
      date: new Date('September 3, 2018 16:30:00')
    },
    {
      name: 'Progesterone',
      icon: 'fa-solid fa-capsules',
      date: new Date('October 7, 2022 10:30:00')
    },
    {
      name: 'Legal Name/Gender Change',
      icon: 'fa-solid fa-gavel',
      date: new Date('October 12, 2018 10:47:00')
    },
    {
      name: 'Sex Reassignment Surgery',
      icon: 'fa-solid fa-scalpel',
      date: new Date('August 8, 2023 11:30:00'),
      duration: {
        hours: 6
      }
    }
  ],
  name: 'Ally'
};
