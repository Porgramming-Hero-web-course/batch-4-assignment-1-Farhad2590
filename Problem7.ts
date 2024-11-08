class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarAge(): string  {
        const currentYear = 2024
        const age = currentYear - this.year;
        return `${age} (assuming current year is ${currentYear})` 
    }
}
