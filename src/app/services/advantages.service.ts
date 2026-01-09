import { Injectable, signal } from '@angular/core';
import { Advantages } from '../models/advantages.model';

@Injectable({ providedIn: 'root' })
export class AdvantagesService {
  advantages = signal<Advantages[]>([
    {
      id: 1,
      paragraph1: 'Lorem ipsum dolor',
      paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      image: '../../assets/advantages/smile.png',
    },
    {
      id: 2,
      paragraph1: 'Lorem ipsum dolor',
      paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      image: '../../assets/advantages/smile.png',
    },
    {
      id: 3,
      paragraph1: 'Lorem ipsum dolor',
      paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      image: '../../assets/advantages/smile.png',
    },
    {
      id: 4,
      paragraph1: 'Lorem ipsum dolor',
      paragraph2: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      image: '../../assets/advantages/smile.png',
    },
  ]);
}
