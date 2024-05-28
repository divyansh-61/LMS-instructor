import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';


export const slideRightAnimation = trigger('slideRight', [
  transition(':enter', [
    style({ transform: 'translateX(-100%)' }),
    animate('300ms ease-in', style({ transform: 'translateX(0%)' })),
  ]),
  transition(':leave', [
    animate('300ms ease-out', style({ transform: 'translateX(-100%)' })),
  ]),
]);

@Component({
  selector: 'app-slidinganimate-course',
  templateUrl: './slidinganimate-course.component.html',
  styleUrls: ['./slidinganimate-course.component.css']
})

export class SlidinganimateCourseComponent {

}
