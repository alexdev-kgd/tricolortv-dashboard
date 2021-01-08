import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('HomePage <=> StatsPage', [
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
            query(':leave', animateChild()),
            group([
                query(':leave', [
                    animate('500ms ease-out', style({ 
                        transform: 'translateX(200%)'
                    }))
                ]),
                query(':enter', [
                    animate('500ms ease-out', style({ 
                        transform: 'translateX(0)'
                    }))
                ])
            ]),
            query(':enter', animateChild()),
        ]),

    // transition('* <=> ArticlesPage', [
    //     style({ position: 'relative' }),
    //     query(':enter, :leave', [
    //     style({
    //         position: 'relative',
    //         top: 0,
    //         left: 0,
    //         width: '100%'
    //     })
    //     ]),
    //     query(':enter', [
    //     style({ left: '-100%' })
    //     ]),
    //     query(':leave', animateChild()),
    //     group([
    //     query(':leave', [
    //         animate('200ms ease-out', style({ left: '100%' }))
    //     ]),
    //     query(':enter', [
    //         animate('300ms ease-out', style({ left: '0' }))
    //     ])
    //     ]),
    //     query(':enter', animateChild()),
    // ]),
    ]);