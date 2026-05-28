export interface IRepository<T> {
    create(data: any) : Promise<T>;

    findAll(): Promise<T[]>;

    findById(id: number): Promise<T | null>;
}