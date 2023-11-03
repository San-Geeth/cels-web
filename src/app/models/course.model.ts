export class Course {
    public name: string;
    public category: string;
    public paymentType: string;
    public enrollments?: number;
    public description: string;
    public courseFee: number;

    constructor(name: string, category: string, paymentType: string, description: string, courseFee: number, enrollments?: number) {
        this.name = name;
        this.paymentType = paymentType;
        this.enrollments = enrollments;
        this.description = description;
        this.courseFee = courseFee;
        this.category = category;
    }
}