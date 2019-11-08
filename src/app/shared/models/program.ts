import { Workout } from './workout';

export interface Program {
    name: string;
    description: string;
    workouts: Workout[];
}
