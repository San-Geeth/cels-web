export class Student {
    public index: string;
    public firstName: string;
    public lastName: string;
    public contact: string;
    public email: string;
    public birthDay: string;
    public address: string;
    public company?: string;
    public school?: string;

    constructor(
        index: string,
        firstName: string,
        lastName: string,
        contact: string,
        email: string,
        birthDay: string,
        address: string,
        company?: string,
        school?: string,
    ) {
        this.index = index;
        this.firstName = firstName;
        this.lastName = lastName;
        this.contact = contact;
        this.email = email;
        this.company = company;
        this.school = school;
        this.birthDay = birthDay;
        this.address = address;
    }
}
