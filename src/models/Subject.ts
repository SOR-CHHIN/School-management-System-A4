export class Subject {
    // static MATH: string;
    constructor(
        public name: string,
        public code: string,
        public isOptional: boolean,
        public classroom: string,
        public scheduleTime: Date
    ) {
        this.name = name;
        this.code = code;
        this.isOptional = isOptional;
        this.classroom = classroom;
        this.scheduleTime = scheduleTime;
    }
}