import { Exercise } from './exercise';
import { Program } from './program';

export interface Workout {
  day: number;
  exercises: Exercise[];
  program: Program;
}
