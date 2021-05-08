import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* => *', [
            query(':enter, :leave', [
                style({
                    width: '903px',
                    position: 'fixed'
                })
            ]),
            query(':enter', [
                style({ 
                    transform: 'translateX(-200%)'
                })
            ]),
            query(':leave', animateChild(), { optional: true }),
            group([
                query(':leave', [
                    animate('500ms ease-out', style({ 
                        transform: 'translateX(200%)'
                    }))
                ], { optional: true }),
                query(':enter', [
                    animate('500ms ease-out', style({ 
                        transform: 'translateX(0)'
                    }))
                ])
            ]),
            query(':enter', animateChild()),
        ]),
    ]);