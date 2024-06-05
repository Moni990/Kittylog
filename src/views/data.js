import cat4 from '../images/cat4.png';
import cat2 from '../images/cat2.jpg';
import cat3 from '../images/cat3.jpg';
import cat6 from '../images/cat6.jpg';
import cat1_1 from '../images/cat1_1.jpg';
import cat1_2 from '../images/cat1_2.jpg';
import cat1_3 from '../images/cat1_3.jpg';
import cat2_1 from '../images/cat2_1.jpg';
import cat2_2 from '../images/cat2_2.jpg';
import cat2_3 from '../images/cat2_3.jpg';
import cat3_1 from '../images/cat3_1.jpg';
import cat3_2 from '../images/cat3_2.jpg';
import cat3_3 from '../images/cat3_3.jpg';


export const cats = [
  { id: 1, name: 'Brownie', sex: 1, age: '13 months', distance: '160mm', img: cat4, description: 'Oliver is a good friend with Luna, they often play together, chasing each other around the house in a friendly manner.' },
  { id: 2, name: 'Luna', sex: 2, age: '12 months', distance: '250mm', img: cat2 },
  { id: 3, name: 'Oliver', sex: 2, age: '10 months', distance: '100mm', img: cat3, condition: 'healthy' },
  { id: 4, name: 'Simba', sex: 2, age: '15 months', distance: '200mm', img: cat6 },
];

export const catInfoMap = {
  1: [
    cat1_1,
    cat1_2,
    cat1_3,
  ],
  2: [
    cat2_1,
    cat2_2,
  ],
  3: [
    cat3_1,
    cat3_2,
    cat3_3,
  ],
}