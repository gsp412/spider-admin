import {trigger, query, group, state, style, transition, animate, keyframes} from '@angular/animations';

/***********************接口地址前缀*********************/
export const beforeUrl = '';

// 页面跳转动画
export const pageAnimation = trigger('pageAnimation', [
  state('in', style({opacity: 1, transform: 'translateY(0)'})),
  transition('void => *', [
    style({
      opacity: 1,
      transform: 'translateY(40px)'
    }),
    animate('400ms  ease-out')
  ]),
  transition('* => void', [
    animate('400ms  ease-out', style({
      opacity: 0,
      transform: 'translateY(40px)'
    }))
  ])
]);

export const routerTransition = trigger('routerTransition', [
  transition('* <=> *', [
    /* order */
    /* 1 */ query(':enter, :leave', style({ position: 'fixed', width: '100%' })
      , { optional: true }),
    /* 2 */ group([  // block executes in parallel
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.3s ease-in-out', style({ transform: 'translateX(0%)' }))
      ], { optional: true }),
      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.3s ease-in-out', style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ])
]);
