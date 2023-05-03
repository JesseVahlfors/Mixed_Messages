const workout = {
    push: [ "bench press", "overhead press", "push-ups", "machine chest press"],
    pull: ["pull-ups", "lat pulldown", "barbell row", "dumbbell row", "cable row"],
    hip_hinge: ["deadlift", "good morning", "Romanian deadlift", "clean", "kettlebell swing"],
    squat: ["back squat", "front squat", "Bulgarian split squat", "goblet squat", "leg press"],
    generate() {
        let pushExercise = this.push[Math.floor(Math.random() * 4)]
        let pullExercise = this.pull[Math.floor(Math.random() * 5)]
        let hipExercise = this.hip_hinge[Math.floor(Math.random() * 5)]
        let squatExercise = this.squat[Math.floor(Math.random() * 5)]
        return `Here is your workout: 
        Push movement: ${pushExercise}.
        Pull movement: ${pullExercise}.
        Hip-hinge movement: ${hipExercise}.
        Squat movement: ${squatExercise}.
        Have a productie workout!`
    }
}

console.log(workout.generate())
