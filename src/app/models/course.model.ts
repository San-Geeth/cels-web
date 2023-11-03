export class Course {
    public name: string;
    public type: string;
    public enrollments: number;
    public description: string;
    public courseFee: number;

    constructor(name: string, type: string, enrollments: number, description: string, courseFee: number) {
        this.name = name;
        this.type = type;
        this.enrollments = enrollments;
        this.description = description;
        this.courseFee = courseFee;
    }
}