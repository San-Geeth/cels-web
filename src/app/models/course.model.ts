export class Course {
    public name: string;
    public type: string;
    public enrollments?: number;
    public description: string;
    public courseFee: number;

    constructor(name: string, type: string, description: string, courseFee: number, enrollments?: number) {
        this.name = name;
        this.type = type;
        this.enrollments = enrollments;
        this.description = description;
        this.courseFee = courseFee;
    }
}