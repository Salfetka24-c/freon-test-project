import { Injectable } from '@angular/core';

export interface VitrineItem {
  image: string;
  title: string;
  code: string;
  description: string;
  applications: string[];
}

@Injectable({
  providedIn: 'root',
})
export class VitrineService {
  private items: VitrineItem[] = [
    {
      image: './assets/ballons/blue512.png',
      title: 'Freon',
      code: '134A',
      description: 'Lorquis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      applications: [
        'assets/applications/conditioner.png',
        'assets/applications/car.png',
        'assets/applications/truck.png',
        'assets/applications/industrial.png',
      ],
    },
    {
      image: './assets/ballons/orange512.png',
      title: 'Freon',
      code: '404A',
      description: ', pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim ',
      applications: [
        'assets/applications/conditioner.png',
        'assets/applications/car.png',
        'assets/applications/truck.png',
      ],
    },
    {
      image: './assets/ballons/aqua512.png',
      title: 'Freon',
      code: '507',
      description: 'nim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasell',
      applications: [
        'assets/applications/industrial.png',
        'assets/applications/truck.png',
      ],
    },
    {
      image: 'assets/ballons/pink512.png',
      title: 'Freon',
      code: '410A',
      description: ' vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus.',
      applications: [
        'assets/applications/car.png',
        'assets/applications/conditioner.png',
      ],
    },
    {
      image: 'assets/ballons/red512.png',
      title: 'Freon',
      code: '407C',
      description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et ',
      applications: [
        'assets/applications/industrial.png',
        'assets/applications/truck.png',
      ],
    },
  ];

  getItems(): VitrineItem[] {
    return this.items;
  }
}
