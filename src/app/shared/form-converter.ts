import { Program } from './models/program';
import { FormGroup } from '@angular/forms';
import { Workout } from './models/workout';
import { Exercise } from './models/exercise';

export function convertFormToProgram(form: FormGroup) {
    const programName = form.value.programName;
    const programDesc = form.value.programDesc;
    const workouts = [];

    form.value.workouts.forEach(workout => {
        const exercises = [];

        workout.exercises.forEach(exercise => {
            const exerciseName = exercise.exerciseName;
            const sets = exercise.sets;
            const reps = exercise.reps;
            const duration = exercise.duration;

            const exerciseObj = {
                name: exerciseName,
                sets,
                reps,
                duration
            } as Exercise;

            exercises.push(exerciseObj);
        });

        const workoutObj = {
            exercises
        } as Workout;

        workouts.push(workoutObj);
    });

    return {
        name: programName,
        description: programDesc,
        workouts
    } as Program;
}
