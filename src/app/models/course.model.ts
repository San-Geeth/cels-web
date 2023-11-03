export class Course {
    public name: string;
    public type: string;
    public enrollments: number;
    public description: string;

    constructor(name: string, type: string, enrollments: number, description: string) {
        this.name = name;
        this.type = type;
        this.enrollments = enrollments;
        this.description = description;
    }
}