export interface IRepository<T> {
    GetAll(): Promise<T[]>;
    GetById(id: string): Promise<T>;
    Add(entity: T): Promise<T>;
    Update(id: string, entity: T): Promise<T>;
    Delete(id: string): Promise<T>;
}
