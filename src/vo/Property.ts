export default class Property {
    public constructor(id: string, type: string, sleeps: number, bedrooms: number, bathrooms: number) {
        this.id = id;
        this.type = type;
        this.sleeps = sleeps;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
    }

    public id: string;
    public type: string;
    public sleeps: number;
    public bedrooms: number;
    public bathrooms: number;
}
